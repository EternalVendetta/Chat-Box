import React, { Component } from 'react';
import './App.css';

// My Components
import { Formulaire } from './Components/Formulaire';
import { Message } from './Components/Message';

export class App extends Component {
  render() {
    return (
      <div className='box'>
        <div>
          <div className='message'>
            <Message />
          </div>
        </div>
        <Formulaire />
      </div>
    )
  }
}

