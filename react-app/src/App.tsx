import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import AboutUs from './pages/about-us/AboutUs';
import NotFound from './pages/not-found/NotFound';
import FormPage from './pages/form/FormPage';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="form" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
