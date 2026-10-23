import { Link } from 'react-router-dom';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3001/api/prospectos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Error al enviar el formulario');
      
      setIsSuccess(true);
    } catch (err) {
      setError('Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full bg-surface-container-low py-20 border-t border-outline-variant/20" id="formulario-diagnostico">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary-fixed/20 text-secondary w-fit">
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              <span className="font-label-sm text-xs uppercase font-bold tracking-wider">Sesión de 30 Minutos</span>
            </div>
            <h2 className="font-display-lg text-4xl md:text-5xl text-primary-container font-bold tracking-tight text-balance">
              Cuéntanos qué necesita mejorar tu empresa.
            </h2>
            <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
              Agenda un diagnóstico tecnológico gratuito para conversar sobre tus necesidades, identificar oportunidades y explorar posibles soluciones sin ningún compromiso comercial.
            </p>
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-6 space-y-4 shadow-sm mt-2">
              <span className="font-label-md text-sm text-primary-container font-bold uppercase tracking-wider block">¿Qué obtendrás de esta conversación?</span>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
                <p className="font-body-sm text-sm text-on-surface-variant">Claridad sobre la viabilidad técnica y funcional de tu requerimiento.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
                <p className="font-body-sm text-sm text-on-surface-variant">Recomendación inicial de arquitectura tecnológica o alternativas de automatización.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
                <p className="font-body-sm text-sm text-on-surface-variant">Criterio experto sobre tiempos, alcances realistas y estimaciones metodológicas.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-10 rounded-xl border border-outline-variant/30 shadow-sm relative">
            {isSuccess ? (
              <div className="p-6 rounded bg-secondary-container/20 border border-secondary text-primary-container flex flex-col items-center text-center gap-4">
                <span className="material-symbols-outlined text-secondary text-[48px]">check_circle</span>
                <div>
                  <h3 className="font-headline-sm text-xl font-bold">¡Solicitud recibida con éxito!</h3>
                  <p className="font-body-sm text-sm text-on-surface-variant mt-2">
                    Tu solicitud ha sido registrada. Un consultor tecnológico de Softopus se pondrá en contacto en menos de 24 horas hábiles.
                  </p>
                </div>
              </div>
            ) : (
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-sm font-semibold text-primary-container" htmlFor="diag-nombre">Nombre completo <span className="text-error">*</span></label>
                    <input required type="text" name="nombre" onChange={handleChange} className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded px-3.5 py-2.5 font-body-md text-base text-on-surface focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" placeholder="Ej. Carlos Mendoza" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-sm font-semibold text-primary-container flex items-center justify-between" htmlFor="diag-empresa">
                      <span>Empresa</span><span className="font-normal text-on-surface-variant/70 text-xs">(Opcional)</span>
                    </label>
                    <input type="text" name="empresa" onChange={handleChange} className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded px-3.5 py-2.5 font-body-md text-base text-on-surface focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" placeholder="Ej. Logística Andina S.A." />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-sm font-semibold text-primary-container" htmlFor="diag-email">Correo electrónico <span className="text-error">*</span></label>
                    <input required type="email" name="email" onChange={handleChange} className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded px-3.5 py-2.5 font-body-md text-base text-on-surface focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" placeholder="carlos@empresa.com" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-sm font-semibold text-primary-container flex items-center justify-between" htmlFor="diag-telefono">
                      <span>Teléfono o WhatsApp</span><span className="font-normal text-on-surface-variant/70 text-xs">(Opcional)</span>
                    </label>
                    <div className="flex rounded border border-outline-variant/50 focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/20 overflow-hidden bg-surface-container-lowest">
                      <div className="bg-surface-container-low px-3 py-2.5 text-on-surface-variant font-label-md text-sm flex items-center border-r border-outline-variant/30 shrink-0">+57 (CO)</div>
                      <input type="tel" name="telefono" onChange={handleChange} className="w-full bg-transparent px-3 py-2.5 font-body-md text-base text-on-surface focus:outline-none" placeholder="300 123 4567" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-sm font-semibold text-primary-container" htmlFor="diag-interes">¿En qué podemos ayudarte? <span className="text-error">*</span></label>
                  <div className="relative">
                    <select required name="interes" className="w-full appearance-none bg-surface-container-lowest border border-outline-variant/50 rounded px-3.5 py-2.5 font-body-md text-base text-on-surface focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all cursor-pointer">
                      <option disabled selected value="">Selecciona una opción...</option>
                      <option value="consultoria">Consultoría tecnológica</option>
                      <option value="desarrollo">Desarrollo de software a la medida</option>
                      <option value="automatizacion">Automatización de procesos</option>
                      <option value="mantenimiento">Mantenimiento o mejora de software</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                      <span className="material-symbols-outlined text-[20px]">expand_more</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-sm font-semibold text-primary-container" htmlFor="diag-mensaje">Describe brevemente tu necesidad <span className="text-error">*</span></label>
                  <textarea required name="mensaje" onChange={handleChange} rows={4} className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded p-3.5 font-body-md text-base text-on-surface focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all resize-y" placeholder="Cuéntanos sobre el proceso, reto o idea tecnológica que tu empresa busca resolver..."></textarea>
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <input required type="checkbox" className="mt-1 h-4 w-4 rounded border-outline-variant text-secondary focus:ring-secondary cursor-pointer" />
                  <label className="font-body-sm text-sm text-on-surface-variant cursor-pointer">
                    Acepto el tratamiento de mis datos personales conforme a la <Link to="/politica-de-privacidad" target="_blank" className="text-secondary font-semibold hover:underline">Política de Tratamiento de Datos de Softopus S.A.S.</Link>
                  </label>
                </div>

                {error && <p className="text-error text-sm">{error}</p>}

                <div className="pt-3">
                  <button disabled={isLoading} type="submit" className={`w-full md:w-auto inline-flex items-center justify-center gap-3 bg-secondary-fixed text-on-secondary-fixed font-label-lg text-sm font-bold rounded px-8 py-3.5 shadow-sm hover:bg-secondary-container transition-all cursor-pointer ${isLoading ? 'opacity-70' : ''}`}>
                    <span>{isLoading ? 'Procesando...' : 'Solicitar mi diagnóstico gratis'}</span>
                    {!isLoading && <span className="material-symbols-outlined text-[18px]">arrow_forward</span>}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;