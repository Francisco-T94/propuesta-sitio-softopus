const AboutProcess = () => {
  return (
    <section className="w-full py-20 lg:py-24 bg-surface-container-lowest">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-bold mb-1 block">Ingeniería de procesos</span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-primary font-bold tracking-tight">
              Entendemos el reto. Diseñamos la solución. Evolucionamos contigo.
            </h2>
            <p className="font-body-md text-base text-on-surface-variant mt-2">
              Un proceso colaborativo, transparente y estructurado para garantizar valor real en cada etapa.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-1 text-on-surface-variant font-label-md text-sm font-semibold">
            <span className="material-symbols-outlined text-secondary text-sm">verified</span>
            <span>Sin dogmas tecnológicos</span>
          </div>
        </div>

        <div className="relative w-full">
          <div aria-hidden="true" className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-0.5 bg-surface-container-high z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-2 relative z-10">
            
            {/* Paso 1 */}
            <div className="group flex flex-col bg-surface p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-secondary group-hover:text-on-secondary transition-colors">1</span>
                <span className="text-xs px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-semibold">FASE 01</span>
              </div>
              <h3 className="text-lg text-primary font-bold mb-1">Comprender</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Escuchamos al cliente y conocemos sus procesos, necesidades y objetivos.</p>
            </div>

            {/* Paso 2 */}
            <div className="group flex flex-col bg-surface p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-secondary group-hover:text-on-secondary transition-colors">2</span>
                <span className="text-xs px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-semibold">FASE 02</span>
              </div>
              <h3 className="text-lg text-primary font-bold mb-1">Analizar</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Identificamos problemas, restricciones, prioridades y oportunidades de mejora.</p>
            </div>

            {/* Paso 3 */}
            <div className="group flex flex-col bg-surface p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-secondary group-hover:text-on-secondary transition-colors">3</span>
                <span className="text-xs px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-semibold">FASE 03</span>
              </div>
              <h3 className="text-lg text-primary font-bold mb-1">Proponer</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Definimos una alternativa tecnológica coherente con las necesidades del negocio.</p>
            </div>

            {/* Paso 4 */}
            <div className="group flex flex-col bg-surface p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-secondary group-hover:text-on-secondary transition-colors">4</span>
                <span className="text-xs px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-semibold">FASE 04</span>
              </div>
              <h3 className="text-lg text-primary font-bold mb-1 leading-snug">Desarrollar e implementar</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Construimos y ponemos en marcha la solución según el alcance acordado.</p>
            </div>

            {/* Paso 5 */}
            <div className="group flex flex-col bg-surface p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-secondary group-hover:text-on-secondary transition-colors">5</span>
                <span className="text-xs px-2 py-0.5 rounded bg-secondary-fixed/40 text-on-secondary-fixed font-semibold">CONTINUO</span>
              </div>
              <h3 className="text-lg text-primary font-bold mb-1">Evolucionar</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Evaluamos mejoras y adaptamos la solución cuando cambian las necesidades.</p>
            </div>

          </div>
        </div>

        <div className="mt-10 p-6 rounded-xl bg-surface-container flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-secondary">psychology_alt</span>
          </div>
          <p className="text-base text-on-surface leading-normal">
            <span className="font-bold text-primary">Criterio metodológico:</span> Metodología ágil y adaptativa orientada a la comunicación clara y expectativas bien definidas, sin dogmatismos ni falsas promesas.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutProcess;