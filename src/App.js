import './App.scss';
import Navbar from './layout/Navbar/Navbar';
import Hero from './layout/Hero/Hero';

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Hero/>
      </main>
    </>
  );
}

export default App;
