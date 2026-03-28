import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import FloatingActions from './components/FloatingActions';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import ResultsPage from './pages/ResultsPage';
import ResourcesPage from './pages/ResourcesPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import VideosPage from './pages/VideosPage';

function App() {
  const [theme, setTheme] = useState('dark');
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(true);
  const [resourceQuery, setResourceQuery] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const handleEnroll = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3200);
  };

  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-500 light:bg-slate-50 light:text-slate-900">
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            <Navbar theme={theme} setTheme={setTheme} onEnroll={handleEnroll} />
            <div className="overflow-hidden border-y border-white/10 bg-violet-500/10 py-2 text-center text-sm font-semibold uppercase tracking-[0.3em] text-white light:border-slate-200/20 light:bg-violet-100 light:text-slate-950">
              <div className="marquee whitespace-nowrap text-lg md:text-xl">
                <span className="mr-8">सपना IAS का, भरोसा हमारे साथ का।</span>
                <span className="mr-8">सपना IAS का, भरोसा हमारे साथ का।</span>
                <span className="mr-8">सपना IAS का, भरोसा हमारे साथ का।</span>
              </div>
            </div>
            <Routes>
              <Route path="/" element={<HomePage onEnroll={handleEnroll} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/courses" element={<CoursesPage onEnroll={handleEnroll} />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/resources" element={<ResourcesPage query={resourceQuery} setQuery={setResourceQuery} />} />
              <Route path="/videos" element={<VideosPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage onEnroll={handleEnroll} />} />
            </Routes>
            <Footer />
            <FloatingActions />
            <AnimatePresence>
              {showToast && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="fixed bottom-6 right-6 z-50 rounded-3xl border border-white/10 bg-slate-900/95 px-6 py-4 text-sm text-slate-100 shadow-glass backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <FiCheckCircle className="h-5 w-5 text-emerald-400" />
                    <div>
                      <p className="font-semibold">Request received!</p>
                      <p className="text-slate-400">Our team will contact you within 24 hours.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
