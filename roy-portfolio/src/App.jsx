import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Professional from './pages/Professional';
import DronePhotos from './pages/DronePhotos';
import Projects from './pages/Projects';

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'G-9XBXWTP2F4', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <Analytics />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="professional" element={<Professional />} />
          <Route path="projects" element={<Projects />} />
          <Route path="drone-photos" element={<DronePhotos />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;