const PrivacySidebar = () => {
  const sections = [
    { id: 'responsable', num: '00', title: 'Identificación del Responsable' },
    { id: 'alcance', num: '01', title: 'Alcance y Objeto Estatutario' },
    { id: 'principios', num: '02', title: 'Principios Rectores del Tratamiento' },
    { id: 'datos-recopilados', num: '03', title: 'Datos Recopilados vía Web' },
    { id: 'finalidades', num: '04', title: 'Finalidades Legítimas del Tratamiento' },
    { id: 'derechos', num: '05', title: 'Derechos de los Titulares (Habeas Data)' },
    { id: 'procedimiento-pqrs', num: '06', title: 'Procedimiento de Atención (PQRS)' },
    { id: 'seguridad', num: '07', title: 'Seguridad y Salvaguardas Digitales' },
    { id: 'vigencia', num: '08', title: 'Vigencia del Instrumento' },
  ];

  return (
    <aside className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28">
      {/* Table of Contents */}
      <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-on-surface-variant font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-base">format_list_bulleted</span>
            Estructura Normativa
          </span>
          <span className="text-xs text-secondary px-2 py-0.5 rounded bg-secondary-fixed/50 font-semibold">9 Secciones</span>
        </div>
        <nav className="flex flex-col gap-1" id="legal-toc">
          {sections.map((sec) => (
            <a key={sec.id} href={`#${sec.id}`} className="px-2 py-2 rounded-lg text-sm hover:bg-surface-container text-on-surface-variant hover:text-primary flex items-center gap-2 transition-colors toc-link">
              <span className="text-secondary font-bold w-5">{sec.num}</span>
              <span>{sec.title}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Guarantee Card */}
      <div className="bg-primary-container text-on-primary p-6 rounded-xl shadow-md relative overflow-hidden flex flex-col gap-3">
        <div className="flex items-center gap-2 text-secondary-fixed">
          <span className="material-symbols-outlined text-2xl">account_balance</span>
          <span className="text-xs uppercase tracking-wider font-bold">Garantía Constitucional</span>
        </div>
        <h3 className="text-lg font-bold text-surface">Artículo 15 C.P. de Colombia</h3>
        <p className="text-sm text-on-primary-container leading-relaxed">
          Todas las personas tienen derecho a su intimidad personal, familiar y a su buen nombre. Es deber soberano y ético de Softopus velar por la autodeterminación informativa de todo titular en nuestros sistemas.
        </p>
        <div className="pt-2 flex items-center gap-2 text-xs text-secondary-fixed-dim font-semibold">
          <span className="material-symbols-outlined text-sm">shield</span>
          <span>Vigilado por la SIC (Delegatura de Datos)</span>
        </div>
      </div>

      {/* Contact Box */}
      <div className="bg-surface-container-high/40 p-4 rounded-xl flex flex-col gap-1">
        <span className="text-xs text-on-surface font-bold uppercase tracking-wider">¿Preguntas sobre privacidad?</span>
        <p className="text-sm text-on-surface-variant">Atención directa del Oficial de Cumplimiento Técnico de Datos:</p>
        <a href="mailto:contacto@softopus.com.co" className="text-sm text-secondary font-bold hover:underline flex items-center gap-1 mt-1">
          <span className="material-symbols-outlined text-base">mail</span>
          contacto@softopus.com.co
        </a>
      </div>
    </aside>
  );
};
export default PrivacySidebar;