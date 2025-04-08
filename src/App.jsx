import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PromoBar from './components/PromoBar';
import Services from './components/Services';
import FeaturedProducts from './components/FeaturedProducts';
import DiscountProducts from './components/DiscountProducts';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsappButton';

// Importando la biblioteca AOS para animaciones
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    // Inicializar AOS para animaciones
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <Box>
      {/* <PromoBar /> */}
      <Header />
      <Hero />
      <Services />
      <FeaturedProducts />
      <DiscountProducts />
      <Gallery />
      <Location />
      <Footer />
      <WhatsAppButton />
    </Box>
  );
}

export default App;