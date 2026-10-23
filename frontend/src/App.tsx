import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import PrivacyPolicy from './PrivacyPolicy'; // Importante que esté esta línea

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        
        {/* Esta es la ruta que faltaba o estaba mal escrita */}
        <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
        
      </Routes>
    </Router>
  );
}

export default App;