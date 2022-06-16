import './App.scss';
import { Route , Routes} from 'react-router';
import { HashRouter } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <HashRouter hashtype='noslash'>
        <header>
          <Header/>
        </header>
        <div className='container'>
          <main>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route path='/o-mnie' element={<About/>}/>
              <Route path='/kontakt' element={<Contact/>}/>
              <Route path='*' element={<Home/>}/>
            </Routes>
          </main>
          <footer>
            <Footer/>
          </footer>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
