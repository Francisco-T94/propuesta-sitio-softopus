import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-primary-container text-on-primary border-t border-outline-variant/15 mt-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-outline-variant/20">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-headline-sm text-xl text-surface font-bold tracking-tight">Softopus S.A.S.</span>
              <span className="font-label-sm text-xs px-2 py-0.5 rounded bg-surface-container-high/20 text-secondary-fixed-dim uppercase tracking-wider font-semibold">Consulting</span>
            </div>
            <p className="font-body-sm text-sm text-on-primary-container max-w-md">Ingeniería de software a medida, consultoría tecnológica y arquitectura empresarial con rigor de ejecución técnica.</p>
          </div>
          <nav className="flex flex-wrap items-center gap-6">
            <Link to="/" className="font-label-lg text-sm text-surface-variant hover:text-secondary-fixed transition-colors">
                Inicio
            </Link>
            <Link to="/nosotros" className="font-label-lg text-sm text-surface-variant hover:text-secondary-fixed transition-colors">
                Nosotros
            </Link>
            <Link to="/politica-de-privacidad" className="font-label-lg text-sm text-surface-variant hover:text-secondary-fixed transition-colors">
                Política de Tratamiento de Datos Personales
            </Link>
          </nav>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-on-primary-container font-body-sm text-sm">
          <p>© 2026 Softopus S.A.S. — Todos los derechos reservados.</p>
          <div className="font-label-sm text-xs text-surface-variant/80 tracking-wide flex flex-col gap-1">
            <span>NIT: 860.005.224-1</span>
            <span>Domicilio: Zipaquirá, Colombia.</span>
            <span>Contacto: acsantacruzr22@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;