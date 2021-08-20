import './App.scss';
import Navbar from './layout/Navbar/Navbar';
import Main from './components/Main';

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Main/>
      </main>
    </>
  );
}

export default App;
