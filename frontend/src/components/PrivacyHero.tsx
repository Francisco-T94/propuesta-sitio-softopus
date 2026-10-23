import { Link } from 'react-router-dom';

const PrivacyHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-low py-10 md:py-16">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 lg:px-12">
        {/* Breadcrumb */}
        <nav aria-label="Navegación contextual" className="flex items-center gap-1 text-on-surface-variant font-label-md text-sm mb-4">
          <Link to="/" className="hover:text-secondary transition-colors">Inicio</Link>
          <span className="material-symbols-outlined text-sm leading-none opacity-60">chevron_right</span>
          <span className="text-secondary font-semibold">Marco Legal & Tratamiento de Datos</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Main Title */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-xs tracking-wider uppercase w-fit">
              <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: '"FILL" 1' }}>gavel</span>
              <span>Marco Legal & Transparencia Corporativa</span>
            </div>
            <h1 className="font-headline-lg text-3xl md:text-5xl text-primary tracking-tight font-bold">
              Política de Tratamiento y Protección de Datos Personales
            </h1>
            <p className="font-body-lg text-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Lineamientos, finalidades estatutarias y procedimientos de <strong className="text-primary font-semibold">Softopus S.A.S.</strong> para la recolección, almacenamiento, custodia, uso y protección de datos conforme a la <em>Ley 1581 de 2012</em> y el <em>Decreto Reglamentario 1377 de 2013</em> de la República de Colombia.
            </p>
          </div>

          {/* Meta Cards */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 w-full">
            <div className="flex-1 bg-surface-container-lowest p-4 rounded-lg shadow-sm flex items-start gap-4">
              <div className="p-1 rounded bg-surface-container text-secondary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">verified</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-on-surface-variant uppercase tracking-wider">Estado del Documento</span>
                <span className="text-lg text-primary font-bold">Versión 1.0</span>
                <span className="text-sm text-on-surface-variant">Vigencia formal: Octubre 2026</span>
              </div>
            </div>
            <div className="flex-1 bg-surface-container-lowest p-4 rounded-lg shadow-sm flex items-start gap-4">
              <div className="p-1 rounded bg-surface-container text-secondary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">schedule</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-on-surface-variant uppercase tracking-wider">Tiempo de Auditoría</span>
                <span className="text-lg text-primary font-bold">7 min</span>
                <span className="text-sm text-on-surface-variant">Lectura técnica completa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PrivacyHero;