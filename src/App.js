import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import Table from './components/Table'
import MyComponent from './MyComponent'

class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
    const characters2 = [
      {
        name: 'Charlie2222222',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MyComponent shouldsay="from dad" />
          <MyComponent shouldsay="from mom" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            hi
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        
          <h1>Hello, React!</h1>
        
          <div className="container">
            <Table characterData={characters}/>
            <Table characterData={characters2}/>
          </div>
        </header>
      </div>
    );
  }
}

export {App};
