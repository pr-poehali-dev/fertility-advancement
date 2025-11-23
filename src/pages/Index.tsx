import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MainSections from '@/components/MainSections';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <Header />
      <HeroSection />
      <MainSections />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
