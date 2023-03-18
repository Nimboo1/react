import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import AboutUs from './pages/about-us/AboutUs';
import NotFound from './pages/not-found/NotFound';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
