import React, { Component } from 'react';
import './App.css';
import { data } from './data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '',
    };
  }

  handler = () => {
    this.setState({
      quote: data[Math.floor(Math.random() * data.length)],
    });
  };
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Force Quotes</h1>
        </header>
        <div className='container'>
          <div className='joke'>
            <p>{this.state.quote}</p>
          </div>
          <button onClick={this.handler}>
            what does force have to say this time?🤔
          </button>
        </div>
      </div>
    );
  }
}

export default App;
