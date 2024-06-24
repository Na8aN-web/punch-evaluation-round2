import Navbar from './components/Navbar';
import Hero from './sections/Section1';
import SectionTwo from './sections/Section2'
import SectionThree from './sections/Section3';
import SectionFour from './sections/Section4';
import SectionFive from './sections/Section5';
import Break from './assets/vectors/break.png'
import SectionSix from './sections/Section6';
import SectionSeven from './sections/Section7';
import SectionEight from './sections/Section8';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full flex justify-center pt-0 md:pt-8 flex-col">
      <div className='px-0 md:px-8 lg:px-16'>
        <Navbar />
      </div>
      <Hero />
      <img src={Break} alt='line break' />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <Footer />
    </div>
  );
}

export default App;
