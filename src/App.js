import './App.css';
import React, {Component} from 'react';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import ThreeTest from './components/ThreeTest';

//files for understanding components, state and props
// import Table from './components/Table';
// import MyComponent from './MyComponent';

// import data from './resumeData.json';
const data = require('./resumeData.json');

class App extends Component {
  render() {
    // fetch json or use "require"
    // const getResumeData = () => {
    //   fetch('resumeData.json')
    //   .then(function(resumeData){
    //     console.log("-------", resumeData);
    //     return resumeData.json();
    //   }).then(function(myjson){
    //     console.log(myjson)
    //   })
    // }
    // getResumeData();
  
    return (
      <div className="App">
        <header className="App-header">
          <Header data={data.main}/>
          <About data={data.main}/>
          <ThreeTest />
          <Portfolio data={data.portfolio}/>
        </header>
      </div>
    );
  }
}

export {App};
