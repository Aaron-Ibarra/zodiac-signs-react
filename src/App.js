import Header from '../src/components/layout/Header/Header.js';
import Footer from '../src/components/layout/Footer/Footer.js';
import './App.css';
import Main from './components/Main/Main.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
