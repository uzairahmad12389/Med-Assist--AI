import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './pages/Home';
import TextQA from './pages/TextQA';
import ImageAnalysis from './pages/ImageAnalysis';
import VoiceInput from './pages/VoiceInput';
import About from './pages/About';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/text-qa" element={<TextQA />} />
          <Route path="/image-analysis" element={<ImageAnalysis />} />
          <Route path="/voice-input" element={<VoiceInput />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;