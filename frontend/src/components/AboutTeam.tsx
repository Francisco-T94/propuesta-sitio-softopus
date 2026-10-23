const AboutTeam = () => {
  return (
    <section className="w-full py-20 lg:py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 lg:px-12">
        <div className="max-w-2xl mb-10">
          <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-bold mb-1 block">Liderazgo y Gobierno Técnico</span>
          <h2 className="font-headline-lg text-3xl md:text-4xl text-primary font-bold tracking-tight">Personas que conectan negocio y tecnología.</h2>
          <p className="font-body-md text-base text-on-surface-variant mt-2">Socios comprometidos con el criterio técnico y el éxito operativo de cada proyecto.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Socio 1 */}
          <article className="flex flex-col bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20 transition-all duration-300 hover:shadow-md">
            <h3 className="text-xl text-primary font-bold tracking-tight mb-1">Andrés Santacruz</h3>
            <p className="text-sm text-secondary font-semibold mb-2">Socio / Consultor de Negocio y Estrategia Tecnológica</p>
            <p className="text-sm text-on-surface-variant leading-relaxed flex-grow">[Espacio reservado para trayectoria profesional o enfoque de trabajo].</p>
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="text-xs px-2.5 py-1 rounded bg-surface-container-low text-primary font-medium">Estrategia Tecnológica</span>
              <span className="text-xs px-2.5 py-1 rounded bg-surface-container-low text-primary font-medium">Procesos Empresariales</span>
            </div>
          </article>
          
          {/* Socio 2 */}
          <article className="flex flex-col bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20 transition-all duration-300 hover:shadow-md">
            <h3 className="text-xl text-primary font-bold tracking-tight mb-1">Francisco Tinjacá</h3>
            <p className="text-sm text-secondary font-semibold mb-2">Socio / Líder de Arquitectura y Desarrollo de Software</p>
            <p className="text-sm text-on-surface-variant leading-relaxed flex-grow">[Espacio reservado para trayectoria profesional o enfoque de trabajo].</p>
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="text-xs px-2.5 py-1 rounded bg-surface-container-low text-primary font-medium">Arquitectura de Software</span>
              <span className="text-xs px-2.5 py-1 rounded bg-surface-container-low text-primary font-medium">Desarrollo a la Medida</span>
            </div>
          </article>

          {/* Socio 3 */}
          <article className="flex flex-col bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20 transition-all duration-300 hover:shadow-md">
            <h3 className="text-xl text-primary font-bold tracking-tight mb-1">Sebastián Santacruz</h3>
            <p className="text-sm text-secondary font-semibold mb-2">Socio / Consultor de Operaciones y Automatización</p>
            <p className="text-sm text-on-surface-variant leading-relaxed flex-grow">[Espacio reservado para trayectoria profesional o enfoque de trabajo].</p>
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="text-xs px-2.5 py-1 rounded bg-surface-container-low text-primary font-medium">Automatización</span>
              <span className="text-xs px-2.5 py-1 rounded bg-surface-container-low text-primary font-medium">Integración de Sistemas</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
export default AboutTeam;