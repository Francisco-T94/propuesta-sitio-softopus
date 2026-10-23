import Header from './components/Header';
import AboutHero from './components/AboutHero';
import AboutProcess from './components/AboutProcess';
import AboutTeam from './components/AboutTeam';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <Header />
      <main className="w-full pt-20 bg-background min-h-[calc(100vh-80px)]">
        <AboutHero />
        <AboutProcess />
        <AboutTeam />
        <AboutContact />
      </main>
      <Footer />
    </div>
  );
};

export default About;