import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Galleria from './pages/Galleria';
import NotFound from './pages/NotFound';
import ScrollToTop from '../src/components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        {/* ScrollToTop must be inside BrowserRouter */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="chi-siamo" element={<About />} />
            <Route path="servizi" element={<Services />} />
            <Route path="galleria" element={<Galleria />} />
            <Route path="contatti" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
