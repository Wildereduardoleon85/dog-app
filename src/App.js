import './App.scss';
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/layout/Hero/Hero';
import Main from './components/Main/Main';
import MainState from './context/main/MainState';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <MainState>
      <header>
        <Navbar/>
      </header>
      <main>
        <Hero/>
        <Main/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </MainState>
  );
}

export default App;
