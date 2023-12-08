import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/nav/Navbar';

import Footer from './components/footer/Footer';
import Home from './home/home';
import About from './about/about';
import Tour from './tour/tour';
import Gallery from './gallery/gallery';
import Contact from './contact/contact';


import { ThemeProvider, themeObject } from './components/content/theme.content';

function App() {
  const [theme, setTheme] = useState('dark');
  const themeColor = themeObject[theme];

  return (
    <ThemeProvider value={[themeObject[theme], setTheme]}>
      <div
        className="App"
        style={{ color: themeColor.color, background: themeColor.background }}
      >
        <BrowserRouter>
          <div className="navBar__holder">
            <NavBar />
          </div>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;