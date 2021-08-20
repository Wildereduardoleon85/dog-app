import './App.scss';
import Navbar from './layout/Navbar/Navbar';
import Hero from './layout/Hero/Hero';
import Main from './components/Main/Main';

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Hero/>
        <Main/>
      </main>
    </>
  );
}

export default App;
