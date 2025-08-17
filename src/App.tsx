import './App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './assets/components/navbar';
import Newbars from './assets/components/newbars';
import Showcase from './assets/components/showcase';
import Ceccter from './assets/components/ceccter';
import Select from './assets/components/select';
import Footer from './assets/components/footer';
import Scrool from './assets/components/scrool';

function App() {
  // AOS init
  useEffect(() => {
    AOS.init({
      duration: 800,       // animation davomiyligi
      easing: 'ease-in-out', 
      once: true,          // faqat bir marta ishga tushadi
    });
  }, []);

  return (
    <>
      <div data-aos="fade-down" data-aos-delay="50">
        <Navbar />
      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <Showcase />
      </div>

      <div data-aos="fade-right" data-aos-delay="250">
        <Newbars />
      </div>

      <div data-aos="fade-left" data-aos-delay="350">
        <Ceccter />
      </div>

      <div data-aos="fade-down-right" data-aos-delay="450">
        <Select />
      </div>

      <div data-aos="fade-up-left" data-aos-delay="550">
        <Footer />
      </div>

      {/* Scroll to top button */}
      <Scrool />
    </>
  );
}

export default App;
