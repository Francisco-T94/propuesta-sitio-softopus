const Hero = () => {
  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-5 md:px-6 lg:px-12 pt-12 md:pt-16 pb-20 md:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6 items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface-dim/40 border border-outline-variant/30 text-secondary">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label-sm text-xs tracking-wider uppercase font-bold text-on-surface">Consultoría Tecnológica & Desarrollo a Medida</span>
          </div>
          <h1 className="font-display-lg text-4xl md:text-5xl text-primary-container tracking-tight font-extrabold max-w-2xl text-balance">
            Transformamos necesidades empresariales en soluciones tecnológicas.
          </h1>
          <p className="font-body-lg text-lg text-on-surface-variant max-w-xl leading-relaxed">
            Acompañamos a las empresas en la identificación de oportunidades, el desarrollo de software a la medida y la optimización de sus procesos mediante tecnología.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <a className="inline-flex items-center justify-center gap-2 bg-secondary-fixed text-on-secondary-fixed font-label-lg text-sm font-bold rounded px-6 py-3.5 shadow-sm hover:bg-secondary-container transition-all text-center" href="#formulario-diagnostico">
              <span>Agenda tu diagnóstico gratis</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a className="inline-flex items-center justify-center gap-2 bg-transparent text-primary-container border-2 border-primary-container font-label-lg text-sm font-bold rounded px-6 py-3 hover:bg-primary-container/5 transition-all text-center" href="#lineas-negocio">
              Conoce nuestros servicios
            </a>
          </div>
          <div className="pt-6 border-t border-outline-variant/30 w-full flex flex-wrap items-center gap-3 text-on-surface-variant font-label-md text-xs font-semibold">
            <div className="flex items-center gap-1.5 bg-surface-container-low px-3 py-1 rounded">
              <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
              <span>Enfoque en negocio primero</span>
            </div>
            <div className="flex items-center gap-1.5 bg-surface-container-low px-3 py-1 rounded">
              <span className="material-symbols-outlined text-[16px] text-secondary">account_tree</span>
              <span>Arquitectura escalable</span>
            </div>
            <div className="flex items-center gap-1.5 bg-surface-container-low px-3 py-1 rounded">
              <span className="material-symbols-outlined text-[16px] text-secondary">handshake</span>
              <span>Acompañamiento continuo</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative w-full">
          <div className="relative bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 sm:p-8 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                <h3 className="font-headline-sm text-lg font-bold text-primary-container">Así te ayudamos</h3>
              </div>
              <span className="font-label-sm text-xs text-secondary font-bold tracking-wider uppercase">Paso a paso</span>
            </div>
            <div className="space-y-4 relative">
              <div className="absolute left-6 top-6 bottom-6 w-0.5 border-l-2 border-dashed border-outline-variant/40 -z-0"></div>
              
              <div className="relative z-10 flex items-start gap-4 p-4 bg-surface-container-low/60 rounded-lg hover:bg-surface-container-low transition-colors">
                <div className="w-9 h-9 rounded bg-primary-container text-surface flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">hearing</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-sm text-xs text-secondary font-bold uppercase tracking-wider">Paso 1</span>
                  <span className="font-headline-sm text-base text-primary-container font-semibold leading-tight mt-0.5">Entendemos tu negocio</span>
                  <p className="font-body-sm text-sm text-on-surface-variant mt-1 leading-relaxed">Escuchamos qué necesitas mejorar y cómo trabajas actualmente.</p>
                </div>
              </div>

              <div className="flex justify-center my-0.5 z-10 relative">
                <div className="bg-surface border border-outline-variant/40 rounded-full p-1 text-secondary shadow-sm">
                  <span className="material-symbols-outlined text-[16px] block">arrow_downward</span>
                </div>
              </div>

              <div className="relative z-10 flex items-start gap-4 p-4 bg-surface-container-low/60 rounded-lg hover:bg-surface-container-low transition-colors">
                <div className="w-9 h-9 rounded bg-secondary text-surface flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">lightbulb</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-sm text-xs text-secondary font-bold uppercase tracking-wider">Paso 2</span>
                  <span className="font-headline-sm text-base text-primary-container font-semibold leading-tight mt-0.5">Buscamos la mejor alternativa</span>
                  <p className="font-body-sm text-sm text-on-surface-variant mt-1 leading-relaxed">Te proponemos una solución acorde con tus necesidades y posibilidades.</p>
                </div>
              </div>

              <div className="flex justify-center my-0.5 z-10 relative">
                <div className="bg-surface border border-outline-variant/40 rounded-full p-1 text-secondary shadow-sm">
                  <span className="material-symbols-outlined text-[16px] block">arrow_downward</span>
                </div>
              </div>

              <div className="relative z-10 flex items-start gap-4 p-4 bg-surface-container-low/60 rounded-lg hover:bg-surface-container-low transition-colors">
                <div className="w-9 h-9 rounded bg-primary text-surface flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-sm text-xs text-secondary font-bold uppercase tracking-wider">Paso 3</span>
                  <span className="font-headline-sm text-base text-primary-container font-semibold leading-tight mt-0.5">Te acompañamos a ponerla en marcha</span>
                  <p className="font-body-sm text-sm text-on-surface-variant mt-1 leading-relaxed">Desarrollamos o implementamos la solución y te ayudamos a mejorarla con el tiempo.</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-on-surface-variant font-label-sm text-xs font-semibold">
              <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
              <span>Sin tecnicismos innecesarios ni compromisos previos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;