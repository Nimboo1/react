import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import AboutUs from './pages/about-us/AboutUs';
import NotFound from './pages/not-found/NotFound';
import FormPage from './pages/form/FormPage';
import './index.css';

class App extends React.Component {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="form" element={<FormPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
