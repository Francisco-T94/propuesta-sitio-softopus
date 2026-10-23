CREATE TABLE prospectos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    empresa VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    telefono VARCHAR(50),
    mensaje TEXT NOT NULL,
    fecha_creacion TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
