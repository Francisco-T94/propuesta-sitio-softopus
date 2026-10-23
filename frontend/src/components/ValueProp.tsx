const ValueProp = () => {
  return (
    <section className="w-full bg-surface-container-lowest py-20 border-y border-outline-variant/20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <span className="font-label-md text-sm uppercase tracking-wider text-secondary font-bold mb-2">Metodología Consultiva</span>
          <h2 className="font-display-lg text-4xl md:text-5xl text-primary-container font-bold tracking-tight text-balance">
            Más que programar: entendemos tu negocio
          </h2>
          <p className="font-body-lg text-lg text-on-surface-variant mt-3 leading-relaxed">
            Evitamos el software genérico y el código prescindible. Diagnosticamos y diseñamos únicamente lo que genera valor real para tu equipo directivo y operativo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Tarjeta 1 */}
          <div className="bg-surface p-8 rounded-lg border border-outline-variant/30 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-secondary mb-6">
                <span className="material-symbols-outlined text-[26px]">psychology_alt</span>
              </div>
              <h3 className="font-headline-sm text-xl text-primary-container font-bold mb-3">Comprendemos antes de desarrollar.</h3>
              <p className="font-body-md text-base text-on-surface-variant leading-relaxed">Entendemos las necesidades y los procesos del negocio antes de definir una solución técnica o comprometer presupuesto.</p>
            </div>
            <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center gap-2 text-secondary font-label-md text-sm font-semibold">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              <span>Validación de contexto previo</span>
            </div>
          </div>
          {/* Tarjeta 2 */}
          <div className="bg-surface p-8 rounded-lg border border-outline-variant/30 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-secondary mb-6">
                <span className="material-symbols-outlined text-[26px]">tune</span>
              </div>
              <h3 className="font-headline-sm text-xl text-primary-container font-bold mb-3">Soluciones ajustadas a cada empresa.</h3>
              <p className="font-body-md text-base text-on-surface-variant leading-relaxed">Evaluamos alternativas considerando los objetivos comerciales, las reglas operativas y las posibilidades reales de cada cliente.</p>
            </div>
            <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center gap-2 text-secondary font-label-md text-sm font-semibold">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              <span>Modularidad y compatibilidad</span>
            </div>
          </div>
          {/* Tarjeta 3 */}
          <div className="bg-surface p-8 rounded-lg border border-outline-variant/30 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-secondary mb-6">
                <span className="material-symbols-outlined text-[26px]">hub</span>
              </div>
              <h3 className="font-headline-sm text-xl text-primary-container font-bold mb-3">Acompañamiento tecnológico.</h3>
              <p className="font-body-md text-base text-on-surface-variant leading-relaxed">Ayudamos a tomar decisiones fundamentadas y a mejorar las plataformas de forma progresiva a medida que cambian las necesidades.</p>
            </div>
            <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center gap-2 text-secondary font-label-md text-sm font-semibold">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              <span>Soporte de ingeniería constante</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;