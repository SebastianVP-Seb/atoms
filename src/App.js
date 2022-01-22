import './App.scss';
import Easy from './pages/easy/Easy';
import Features from './pages/features/Features';
import Footer from './pages/footer/Footer';
import NavbarN from './components/navbar/NavbarN';
import Pricing from './pages/pricing/Pricing';
import Questions from './pages/questions/Questions';
import World from './pages/world/World';
// import BackG from './components/bg/BackG';
import Build from './pages/build/Build';

function App() {
  return (
    <>
      <NavbarN />
      <Build />
      {/* <BackG /> */}
      <Features />
      <Easy />
      <Pricing />
      <World />
      <Questions />
      <Footer />
    </>
  );
};

export default App;
