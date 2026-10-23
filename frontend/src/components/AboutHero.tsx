const AboutHero = () => {
  return (
    <section className="relative w-full py-20 bg-background overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-surface-container-high/40 blur-3xl pointer-events-none translate-y-1/3"></div>
      
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-start max-w-4xl">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded bg-secondary-fixed/30 text-on-secondary-fixed font-label-sm text-xs uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            CONOCE A SOFTOPUS S.A.S.
          </div>
          <h1 className="font-display-lg text-4xl md:text-5xl text-primary tracking-tight font-bold mb-4 leading-tight">
            Criterio técnico, cercanía y orientación a resultados de negocio
          </h1>
          <p className="font-body-lg text-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Somos una firma colombiana de consultoría tecnológica y desarrollo de software. No creemos en recetas genéricas ni en complejidades innecesarias: diseñamos software que responde a la realidad de tu empresa.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full mt-10 pt-6 bg-surface-container-low/70 rounded-xl p-6 shadow-sm">
            <div className="flex flex-col">
              <span className="font-display-lg text-2xl md:text-3xl text-secondary font-bold">100%</span>
              <span className="font-label-md text-xs text-on-surface-variant mt-1">Criterio adaptativo sin sobreingeniería</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display-lg text-2xl md:text-3xl text-primary font-bold">5 Fases</span>
              <span className="font-label-md text-xs text-on-surface-variant mt-1">Metodología de entrega estructurada</span>
            </div>
            <div className="flex flex-col col-span-2 sm:col-span-1">
              <span className="font-display-lg text-2xl md:text-3xl text-primary font-bold">Colombia</span>
              <span className="font-label-md text-xs text-on-surface-variant mt-1">Alcance nacional y remoto internacional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutHero;