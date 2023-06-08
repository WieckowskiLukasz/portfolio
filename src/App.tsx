import './App.scss';
import React, { useState } from 'react';
import { Route , Routes} from 'react-router';
import { HashRouter } from 'react-router-dom';
import Header from './layouts/Header.tsx';
import Footer from './layouts/Footer.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Skills from './pages/Skills.tsx';
import Projects from './pages/Projects.tsx';
import Page404 from './pages/Page404.tsx';
import { AppContext, defaultObject } from './AppContext.tsx';

function App() {
  const [lang, setLang] = useState(defaultObject.lang);

  const setLanguage = (lang: string) =>{
    setLang(lang);
    document.cookie = `lang=${lang}; path=/;`;
  };

  return (
    <div className='App'>
      <HashRouter>
      <AppContext.Provider
          value={{
            lang: lang,
            setLanguage: setLanguage,
          }}
        >
          <header>
            <Header/>
          </header>
          <div className='container'>
            <main>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/o-mnie' element={<About/>}/>
                <Route path='/kontakt' element={<Contact/>}/>
                <Route path='/umiejetnosci' element={<Skills/>}/>
                <Route path='/projekty' element={<Projects/>}/>
                <Route path='*' element={<Page404/>}/>
              </Routes>
            </main>
            <footer>
              <Footer/>
            </footer>
          </div>
        </AppContext.Provider>
      </HashRouter>
    </div>
  );
}

export default App;

