const PrivacyContent = () => {
  return (
    <div className="lg:col-span-8 flex flex-col gap-10">
      {/* SECCIÓN 00 */}
      <section className="scroll-mt-28 bg-primary-container text-on-primary p-6 md:p-10 rounded-xl shadow-md flex flex-col gap-4" id="responsable">
        <h2 className="text-2xl text-surface font-bold mb-4">Ficha Técnica del Responsable del Tratamiento</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-tertiary-container/40 p-4 rounded-lg">
            <span className="text-xs text-on-primary-container uppercase tracking-wider">Razón Social</span>
            <p className="text-lg text-surface font-bold">Softopus S.A.S.</p>
            <span className="text-sm text-secondary-fixed">Software Consulting</span>
          </div>
          <div className="bg-tertiary-container/40 p-4 rounded-lg">
            <span className="text-xs text-on-primary-container uppercase tracking-wider">NIT</span>
            <p className="text-lg text-surface font-bold">860.005.224-1</p>
          </div>
          <div className="bg-tertiary-container/40 p-4 rounded-lg">
            <span className="text-xs text-on-primary-container uppercase tracking-wider">Domicilio</span>
            <p className="text-base text-surface font-semibold">Zipaquirá, Colombia</p>
          </div>
          <div className="bg-tertiary-container/40 p-4 rounded-lg">
            <span className="text-xs text-on-primary-container uppercase tracking-wider">Canal Habeas Data</span>
            <p className="text-base text-secondary-fixed font-semibold">acsantacruzr22@gmail.com</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 01 */}
      <section className="scroll-mt-28 bg-surface-container-lowest p-6 md:p-10 rounded-xl shadow-sm flex flex-col gap-4" id="alcance">
        <h2 className="text-2xl text-primary font-bold">01. Alcance y Objeto Estatutario</h2>
        <p className="text-base text-on-surface-variant leading-relaxed">
          La presente <strong className="text-on-surface font-semibold">Política de Tratamiento de la Información (PTI)</strong> tiene por objeto regular los procesos operacionales mediante los cuales <strong className="text-on-surface font-semibold">Softopus S.A.S.</strong> realiza la recolección, almacenamiento y custodia de datos suministrados a través del portal.
        </p>
        <div className="bg-surface-container p-4 rounded-lg flex items-start gap-3 text-on-surface mt-2">
          <span className="material-symbols-outlined text-secondary shrink-0 text-xl">info</span>
          <p className="text-sm">Aplica a todo dato registrado en cualquier base de datos que sea susceptible de tratamiento por Softopus S.A.S. en su condición de <strong>Responsable del Tratamiento</strong>.</p>
        </div>
      </section>

      {/* SECCIÓN 02 */}
      <section className="scroll-mt-28 bg-surface-container-lowest p-6 md:p-10 rounded-xl shadow-sm flex flex-col gap-4" id="principios">
        <h2 className="text-2xl text-primary font-bold">02. Principios Rectores</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: 'balance', title: '1. Legalidad', text: 'Sujeto estrictamente a la legislación colombiana vigente.' },
            { icon: 'target', title: '2. Finalidad', text: 'Obedece a una finalidad legítima informada previamente.' },
            { icon: 'touch_app', title: '3. Libertad', text: 'Requiere consentimiento previo, expreso e informado.' },
            { icon: 'check_circle', title: '4. Veracidad', text: 'La información debe ser exacta y actualizada.' },
            { icon: 'visibility', title: '5. Transparencia', text: 'Derecho a obtener información sobre sus datos.' },
            { icon: 'vpn_lock', title: '6. Circulación', text: 'Sólo procesados por personal autorizado.' },
            { icon: 'enhanced_encryption', title: '7. Seguridad', text: 'Medidas técnicas para evitar adulteración o pérdida.' },
            { icon: 'lock_person', title: '8. Confidencialidad', text: 'Reserva profesional estricta de colaboradores.' },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-surface-container-low flex flex-col gap-1">
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="material-symbols-outlined text-secondary text-lg">{item.icon}</span>
                <span className="text-base">{item.title}</span>
              </div>
              <p className="text-sm text-on-surface-variant">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 03 */}
      <section className="scroll-mt-28 bg-surface-container-lowest p-6 md:p-10 rounded-xl shadow-sm flex flex-col gap-4" id="datos-recopilados">
        <h2 className="text-2xl text-primary font-bold">03. Datos Recopilados a través de la Web</h2>
        <p className="text-base text-on-surface-variant">Únicamente capturamos datos de contacto comercial cuando se diligencia el <strong>Diagnóstico Tecnológico</strong>:</p>
        <ul className="space-y-3">
          {[
            { icon: 'badge', title: 'Nombre y Apellidos', text: 'Identificación del interlocutor.' },
            { icon: 'mail', title: 'Correo Electrónico', text: 'Canal primario para emisión de diagnóstico.' },
            { icon: 'phone_iphone', title: 'Teléfono / WhatsApp', text: 'Confirmación de reuniones virtuales.' },
            { icon: 'domain', title: 'Razón Social', text: 'Contexto para adaptar la arquitectura.' },
            { icon: 'terminal', title: 'Descripción del Reto', text: 'Alcances funcionales del sistema.' },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 p-3 rounded-lg bg-surface-container">
              <span className="material-symbols-outlined text-secondary shrink-0 text-xl">{item.icon}</span>
              <div>
                <strong className="text-base text-primary block">{item.title}</strong>
                <p className="text-sm text-on-surface-variant">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* SECCIÓN 04 */}
      <section className="scroll-mt-28 bg-surface-container-lowest p-6 md:p-10 rounded-xl shadow-sm flex flex-col gap-4" id="finalidades">
        <h2 className="text-2xl text-primary font-bold">04. Finalidades del Tratamiento</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: 'analytics', title: '1. Diagnóstico Técnico', text: 'Analizar la problemática para entregar un informe preliminar de viabilidad.' },
            { icon: 'handshake', title: '2. Gestión Comercial', text: 'Formular cotizaciones y propuestas de consultoría.' },
            { icon: 'calendar_month', title: '3. Agenda Consultiva', text: 'Programar sesiones virtuales de descubrimiento.' },
            { icon: 'fact_check', title: '4. Cumplimiento Normativo', text: 'Atender requerimientos de autoridades competentes.' },
          ].map((item, i) => (
            <div key={i} className="bg-surface-container-low p-4 rounded-lg flex flex-col gap-2">
              <div className="w-10 h-10 rounded bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
              </div>
              <h3 className="text-base text-primary font-bold">{item.title}</h3>
              <p className="text-sm text-on-surface-variant">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 05 */}
      <section className="scroll-mt-28 bg-surface-container-lowest p-6 md:p-10 rounded-xl shadow-sm flex flex-col gap-4" id="derechos">
        <h2 className="text-2xl text-primary font-bold">05. Derechos de los Titulares (Habeas Data)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { num: 'Derecho 01', title: 'Conocer', text: 'Acceder a los datos en nuestros registros.' },
            { num: 'Derecho 02', title: 'Actualizar', text: 'Modificar datos inexactos o incompletos.' },
            { num: 'Derecho 03', title: 'Exigir Prueba', text: 'Solicitar constancia de la autorización.' },
            { num: 'Derecho 04', title: 'Ser Informado', text: 'Conocer el uso de sus datos.' },
            { num: 'Derecho 05', title: 'Revocar', text: 'Solicitar eliminación del dato.' },
            { num: 'Derecho 06', title: 'Quejarse', text: 'Acudir ante la Superintendencia (SIC).' },
          ].map((item, i) => (
            <div key={i} className="bg-surface-container p-4 rounded-lg flex flex-col gap-1">
              <span className="text-xs text-secondary font-bold uppercase">{item.num}</span>
              <h4 className="text-base text-primary font-bold">{item.title}</h4>
              <p className="text-sm text-on-surface-variant">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 06 */}
      <section className="scroll-mt-28 bg-surface-container-lowest p-6 md:p-10 rounded-xl shadow-sm flex flex-col gap-4" id="procedimiento-pqrs">
        <h2 className="text-2xl text-primary font-bold">06. Procedimiento de Atención (PQRS)</h2>
        <p className="text-base text-on-surface-variant">Remitir comunicación formal al correo <strong className="text-primary">acsantacruzr22@gmail.com</strong> indicando:</p>
        <ul className="list-disc list-inside space-y-1 text-sm text-on-surface-variant bg-surface-container p-4 rounded-lg">
          <li>Nombre completo y cédula.</li>
          <li>Descripción de los hechos.</li>
          <li>Dirección o correo electrónico.</li>
          <li>Documentos anexos.</li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div className="bg-surface-container-low p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-base font-bold text-primary">1. Consultas</span>
              <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed text-xs font-bold">10 Días Hábiles</span>
            </div>
            <p className="text-sm text-on-surface-variant">Las consultas serán atendidas en un plazo máximo de 10 días hábiles.</p>
          </div>
          <div className="bg-surface-container-low p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-base font-bold text-primary">2. Reclamos</span>
              <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary text-xs font-bold">15 Días Hábiles</span>
            </div>
            <p className="text-sm text-on-surface-variant">Resolución de 15 días hábiles para rectificación o eliminación.</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 07 y 08 */}
      <section className="scroll-mt-28 bg-surface-container-lowest p-6 md:p-10 rounded-xl shadow-sm flex flex-col gap-4" id="seguridad">
        <h2 className="text-2xl text-primary font-bold">07. Seguridad y Salvaguardas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-surface-container flex flex-col gap-2">
            <span className="material-symbols-outlined text-secondary text-2xl">lock</span>
            <h3 className="text-base text-primary font-bold">Cifrado TLS 1.3</h3>
            <p className="text-sm text-on-surface-variant">Transmisión blindada con cifrado criptográfico.</p>
          </div>
          <div className="p-4 rounded-lg bg-surface-container flex flex-col gap-2">
            <span className="material-symbols-outlined text-secondary text-2xl">key</span>
            <h3 className="text-base text-primary font-bold">Mínimo Privilegio</h3>
            <p className="text-sm text-on-surface-variant">Acceso granular y autenticación multifactor.</p>
          </div>
          <div className="p-4 rounded-lg bg-surface-container flex flex-col gap-2">
            <span className="material-symbols-outlined text-secondary text-2xl">cloud_done</span>
            <h3 className="text-base text-primary font-bold">Infraestructura Segura</h3>
            <p className="text-sm text-on-surface-variant">Alojamiento certificado ISO/IEC 27001.</p>
          </div>
        </div>
      </section>

      <section className="scroll-mt-28 bg-surface-container-lowest p-6 md:p-10 rounded-xl shadow-sm flex flex-col gap-4" id="vigencia">
        <h2 className="text-2xl text-primary font-bold">08. Vigencia</h2>
        <p className="text-base text-on-surface-variant leading-relaxed">
          La presente Política rige a partir del <strong>1 de octubre de 2026</strong> y permanecerá vigente de manera indefinida. Los datos personales se conservarán mientras subsista la relación comercial o durante los plazos legalmente fijados.
        </p>
      </section>

      {/* Banner Final CTA */}
      <section className="bg-gradient-to-br from-primary-container to-primary text-on-primary p-6 md:p-10 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-xs text-secondary-fixed uppercase tracking-wider font-bold">Atención Personalizada</span>
          <h3 className="text-2xl text-surface font-bold">¿Deseas gestionar tus datos personales?</h3>
          <p className="text-sm text-on-primary-container max-w-lg">Nuestro equipo dará trámite oportuno a tus solicitudes de rectificación o supresión.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
          <a href="mailto:contacto@softopus.com.co" className="w-full sm:w-auto inline-flex items-center justify-center bg-secondary-fixed text-on-secondary-fixed text-sm rounded-lg px-6 py-3 shadow hover:bg-secondary-container transition-all font-bold">
            <span className="material-symbols-outlined text-base mr-2">mail</span> Enviar PQRS
          </a>
        </div>
      </section>
    </div>
  );
};
export default PrivacyContent;