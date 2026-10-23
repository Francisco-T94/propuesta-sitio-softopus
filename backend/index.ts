import express, { Request, Response } from 'express';
import { Pool } from 'pg';
import { Resend } from 'resend';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/prospectos', async (req: Request, res: Response) => {
  const { nombre, empresa, email, telefono, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos obligatorios.' });
  }

  try {
    const query = `
      INSERT INTO prospectos (nombre, empresa, email, telefono, mensaje, fecha_creacion)
      VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING id;
    `;
    const values = [nombre, empresa, email, telefono, mensaje];
    const result = await pool.query(query, values);
    const prospectoId = result.rows[0].id;
    console.log(`Prospecto guardado en DB con ID: ${prospectoId}`);

    try {
      await resend.emails.send({
        from: 'Notificaciones <notificaciones@softopus.com>', // Puedes cambiar esto luego
        to: ['tu-correo@ejemplo.com'], // ¡CAMBIA ESTO POR TU CORREO REAL!
        subject: 'Nuevo prospecto desde la web',
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Empresa:</strong> ${empresa}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Mensaje:</strong> ${mensaje}</p>
        `,
      });
      console.log('Correo enviado con éxito.');
    } catch (emailError) {
      console.error('Error al enviar correo:', emailError);
    }

    res.status(201).json({ message: 'Solicitud recibida correctamente.', id: prospectoId });
  } catch (dbError) {
    console.error('Error en la base de datos:', dbError);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
