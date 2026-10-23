import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation(); // Nos dice en qué página estamos

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(21,53,75,0.06)]">
      <div className="h-20 max-w-[1200px] mx-auto px-5 md:px-6 lg:px-12 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-4 shrink-0">
          <div className="w-10 h-10 bg-primary-container text-white flex items-center justify-center rounded font-bold text-xl">S</div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-lg text-primary tracking-tight font-bold leading-none">SOFTOPUS</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-10">
          <Link 
            to="/" 
            className={`transition-colors ${location.pathname === '/' ? 'text-secondary font-bold' : 'font-label-lg text-label-lg text-on-surface-variant hover:text-secondary'}`}
          >
            Inicio
          </Link>
          <Link 
            to="/nosotros" 
            className={`transition-colors ${location.pathname === '/nosotros' ? 'text-secondary font-bold' : 'font-label-lg text-label-lg text-on-surface-variant hover:text-secondary'}`}
          >
            Nosotros
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/#formulario-diagnostico" className="inline-flex items-center justify-center bg-secondary-fixed text-on-secondary-fixed font-label-lg text-sm font-bold rounded-lg px-6 py-2 shadow-sm hover:bg-secondary-container transition-all">
            Agenda tu diagnóstico gratis
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;