import './App.scss';
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/layout/Hero/Hero';
import Main from './components/Main/Main';
import MainState from './context/main/MainState';

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
    </MainState>
  );
}

export default App;
