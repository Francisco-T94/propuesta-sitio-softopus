const Services = () => {
  return (
    <section className="w-full py-20 md:py-28 max-w-[1200px] mx-auto px-5 md:px-6 lg:px-12" id="lineas-negocio">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex flex-col max-w-2xl">
          <span className="font-label-md text-sm uppercase tracking-wider text-secondary font-bold mb-2">Servicios Profesionales</span>
          <h2 className="font-display-lg text-4xl md:text-5xl text-primary-container font-bold tracking-tight">
            Tecnología al servicio de tu negocio
          </h2>
          <p className="font-body-lg text-lg text-on-surface-variant mt-3 leading-relaxed">
            Diseñado para pymes en etapa de expansión, compañías con flujos y normativas particulares, y organizaciones que buscan orientación técnica calificada sin sobrecostos.
          </p>
        </div>
        <div className="shrink-0">
          <a className="inline-flex items-center gap-2 text-secondary font-label-lg text-sm font-bold hover:underline" href="#formulario-diagnostico">
            <span>Solicitar asesoría puntual</span>
            <span className="material-symbols-outlined text-[18px]">north_east</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Línea 1 */}
        <div className="bg-surface-container-lowest p-8 rounded-lg border border-outline-variant/30 flex flex-col justify-between hover:border-secondary transition-all group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-label-sm text-xs text-on-surface-variant uppercase font-bold tracking-wider">01. Enfoque Estratégico</span>
              <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-secondary group-hover:text-surface transition-colors">
                <span className="material-symbols-outlined text-[20px]">lightbulb</span>
              </div>
            </div>
            <h3 className="font-headline-md text-2xl text-primary-container font-bold mb-2">Consultoría tecnológica</h3>
            <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
              Analizamos las necesidades y los procesos de tu empresa para identificar oportunidades de mejora y orientar las decisiones tecnológicas con criterio financiero y de escalabilidad.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-outline-variant/20 flex flex-wrap gap-2 text-on-surface-variant font-label-sm text-xs font-semibold">
            <span className="bg-surface px-2.5 py-1 rounded border border-outline-variant/20">Auditoría de sistemas</span>
            <span className="bg-surface px-2.5 py-1 rounded border border-outline-variant/20">Roadmap tecnológico</span>
            <span className="bg-surface px-2.5 py-1 rounded border border-outline-variant/20">Selección de stack</span>
          </div>
        </div>

        {/* Línea 2 */}
        <div className="bg-surface-container-lowest p-8 rounded-lg border border-outline-variant/30 flex flex-col justify-between hover:border-secondary transition-all group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-label-sm text-xs text-on-surface-variant uppercase font-bold tracking-wider">02. Ingeniería Central</span>
              <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-secondary group-hover:text-surface transition-colors">
                <span className="material-symbols-outlined text-[20px]">code_blocks</span>
              </div>
            </div>
            <h3 className="font-headline-md text-2xl text-primary-container font-bold mb-2">Desarrollo de software a la medida</h3>
            <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
              Diseñamos y desarrollamos soluciones que responden a las reglas de negocio y los requerimientos específicos de cada organización, garantizando código limpio y propiedad intelectual clara.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-outline-variant/20 flex flex-wrap gap-2 text-on-surface-variant font-label-sm text-xs font-semibold">
            <span className="bg-surface px-2.5 py-1 rounded border border-outline-variant/20">Plataformas web empresariales</span>
            <span className="bg-surface px-2.5 py-1 rounded border border-outline-variant/20">Módulos transaccionales</span>
            <span className="bg-surface px-2.5 py-1 rounded border border-outline-variant/20">Paneles de control internos</span>
          </div>
        </div>

        {/* Línea 3 */}
        <div className="bg-surface-container-lowest p-8 rounded-lg border border-outline-variant/30 flex flex-col justify-between hover:border-secondary transition-all group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-label-sm text-xs text-on-surface-variant uppercase font-bold tracking-wider">03. Eficiencia Operacional</span>
              <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-secondary group-hover:text-surface transition-colors">
                <span className="material-symbols-outlined text-[20px]">sync_alt</span>
              </div>
            </div>
            <h3 className="font-headline-md text-2xl text-primary-container font-bold mb-2">Automatización de procesos</h3>
            <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
              Identificamos tareas repetitivas y oportunidades para optimizar flujos de trabajo mediante herramientas y soluciones tecnológicas que eliminan reprocesos humanos manuales.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-outline-variant/20 flex flex-wrap gap-2 text-on-surface-variant font-label-sm text-xs font-semibold">
            <span className="bg-surface px-2.5 py-1 rounded border border-outline-variant/20">Flujos de aprobación</span>
            <span className="bg-surface px-2.5 py-1 rounded border border-outline-variant/20">Sincronización de inventario</span>
            <span className="bg-surface px-2.5 py-1 rounded border border-outline-variant/20">Reportes automáticos</span>
          </div>
        </div>

        {/* Línea 4 */}
        <div className="bg-surface-container-lowest p-8 rounded-lg border border-outline-variant/30 flex flex-col justify-between hover:border-secondary transition-all group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-label-sm text-xs text-on-surface-variant uppercase font-bold tracking-wider">04. Sostenibilidad del Software</span>
              <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-secondary group-hover:text-surface transition-colors">
                <span className="material-symbols-outlined text-[20px]">published_with_changes</span>
              </div>
            </div>
            <h3 className="font-headline-md text-2xl text-primary-container font-bold mb-2">Mantenimiento y evolución de software</h3>
            <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
              Acompañamos la mejora, actualización y adaptación de las soluciones de software según las nuevas necesidades del negocio, previniendo obsolescencia y fallas de disponibilidad.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-outline-variant/20 flex flex-wrap gap-2 text-on-surface-variant font-label-sm text-xs font-semibold">
            <span className="bg-surface px-2.5 py-1 rounded border border-outline-variant/20">Modernización de legacy</span>
            <span className="bg-surface px-2.5 py-1 rounded border border-outline-variant/20">Parches de seguridad</span>
            <span className="bg-surface px-2.5 py-1 rounded border border-outline-variant/20">Refactorización continua</span>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-surface-container-high/40 border border-outline-variant/30 rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-primary-container text-surface flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[20px]">dataset</span>
          </div>
          <div>
            <span className="font-label-md text-sm font-bold text-primary-container block">Capacidad transversal destacada:</span>
            <p className="font-body-sm text-sm text-on-surface-variant">Integración de sistemas y datos empresariales (APIs REST/GraphQL, bases de datos heterogéneas y migración segura).</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 font-label-sm text-xs font-semibold text-secondary shrink-0">
          <span className="material-symbols-outlined text-[16px]">lock</span>
          <span>Estándares de seguridad de datos</span>
        </div>
      </div>
    </section>
  );
};

export default Services;