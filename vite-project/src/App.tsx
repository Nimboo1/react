import React from 'react';
import Header from './components/header/Header';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header class={'header'}></Header>
      </div>
    );
  }
}

export default App;
