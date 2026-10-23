import Header from './components/Header';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <Header />
      <main className="w-full pt-20 bg-background min-h-[calc(100vh-80px)]">
        <Hero />
        <ValueProp />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;