import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Professional from './pages/Professional';
import DronePhotos from './pages/DronePhotos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="professional" element={<Professional />} />
          <Route path="drone-photos" element={<DronePhotos />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;