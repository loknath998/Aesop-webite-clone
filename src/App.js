import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import HorizontalItems from './components/HrizontalItems';
import Section2 from './components/Section2';
import SectionQuote from './components/SectionQuote';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <HorizontalItems />
      <Section2 imgPath="/images/a6.webp"
                  articleText="Daily rituals"
                  articleHeading="How to cleanse the skin"
                  articleDesc="Both delicate and resilient, skin requires gentle, routine cleansing. To better understand cleansing and its foundational role in a healthy skin care routine, we invite you to read on." 
                  btnText="Explore Cleansing"  
                  />
      <HorizontalItems />
      <Section2 imgPath="/images/a7.jpg" 
                  articleText="Beyond the bathroom"
                  articleHeading="Our commitment to sustainability"
                  articleDesc="As a company founded on steadfast ethics, sustainability has always been at Aesop’s heart. We aim to continuously improve our practices with honesty, sincerity and transparency, and seek to be a progressive presence in the communities in which we operate. "  
                  btnText="Learn more about our approach"

                  />
      <Section2 imgPath="/images/a8.jpg" 
                  articleHeading="Store Locator"
                  articleDesc="Our consultants are available to host you in-store and provide tailored guidance on gift purchases. "  
                  btnText="Find a nearby store"
                  type="left"
                  />
      <SectionQuote quote="‘It is by acts and not by ideas that people live.’"
                    quoter="Anatole France" />
      <Footer />
    </div>
  );
}

export default App;
