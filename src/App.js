import './App.css';
import React, {Component} from 'react';
import About from './components/About';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
import Header from './components/Header';

const data = require('./resumeData.json');

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header data={data.main}/>
          <header className="App-header">
            <Profile data={data.main}/>
            <About data={data.main}/>
            <Portfolio data={data.portfolio}/>
          </header>
        </div>
    );
  }
}

export {App};
