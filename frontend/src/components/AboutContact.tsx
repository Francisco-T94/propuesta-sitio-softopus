import { Link } from 'react-router-dom';

const AboutContact = () => {
  return (
    <section className="w-full py-20 lg:py-24 bg-surface-container-low">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 lg:px-12">
        <div className="max-w-3xl mb-10">
          <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-bold mb-1 block">Comunicación Directa</span>
          <h2 className="font-headline-lg text-3xl md:text-4xl text-primary font-bold tracking-tight">Hablemos de lo que tu empresa necesita.</h2>
          <p className="font-body-lg text-lg text-on-surface-variant mt-2 leading-relaxed">
            Cuéntanos tu reto, tu idea o el proceso que te gustaría mejorar. Podemos conversar sobre las alternativas tecnológicas que mejor se ajusten a tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="flex flex-col bg-surface-container-lowest p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined text-2xl">mail</span>
            </div>
            <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Canal 1</span>
            <h3 className="text-xl text-primary font-bold mt-1">Correo corporativo</h3>
            <p className="text-base text-secondary font-semibold my-2 select-all">[contacto@softopus.com.co / Por suministrar]</p>
            <p className="text-sm text-on-surface-variant leading-relaxed">Escríbenos para consultas formales y propuestas.</p>
          </div>

          <div className="flex flex-col bg-surface-container-lowest p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined text-2xl">chat</span>
            </div>
            <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Canal 2</span>
            <h3 className="text-xl text-primary font-bold mt-1">WhatsApp y Teléfono empresarial</h3>
            <p className="text-base text-secondary font-semibold my-2 select-all">[Línea corporativa / Por suministrar]</p>
            <p className="text-sm text-on-surface-variant leading-relaxed">Atención ágil para consultas preliminares.</p>
          </div>

          <div className="flex flex-col bg-surface-container-lowest p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined text-2xl">location_on</span>
            </div>
            <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Canal 3</span>
            <h3 className="text-xl text-primary font-bold mt-1">Ubicación y Cobertura</h3>
            <p className="text-base text-secondary font-semibold my-2">Colombia (Atención presencial y remota)</p>
            <p className="text-sm text-on-surface-variant leading-relaxed">Consultoría y desarrollo para empresas a nivel nacional e internacional.</p>
          </div>
        </div>

        {/* CTA Destacado */}
        <div className="w-full bg-primary-container text-on-primary rounded-xl p-8 md:p-12 shadow-md relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full bg-secondary/15 blur-2xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-widest text-secondary-fixed-dim font-bold mb-1 block">Diagnóstico inicial sin compromiso</span>
              <h3 className="text-3xl font-bold text-surface tracking-tight">¿Prefieres una sesión estructurada?</h3>
              <p className="text-base text-on-primary-container mt-2">
                Evaluamos tus sistemas actuales, identificamos cuellos de botella y te entregamos un plan técnico inicial sin costo.
              </p>
            </div>
            <div className="shrink-0 w-full sm:w-auto">
              {/* Usamos Link para volver a la página de Inicio */}
              <Link to="/" className="w-full sm:w-auto inline-flex items-center justify-center bg-secondary-fixed text-on-secondary-fixed font-label-lg text-sm rounded-lg px-6 py-3 shadow-sm hover:bg-secondary-container transition-all focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 font-bold tracking-tight">
                Agenda tu diagnóstico gratis
                <span className="material-symbols-outlined ml-2 text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutContact;