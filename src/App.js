import React, { Component } from 'react';
import './App.css';

// My Components
import { Formulaire } from './Components/Formulaire';
import { Message } from './Components/Message';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: {},
      pseudo: this.props.match.params.pseudo
    }

  // Bind THIS to Methods
    this.addMessage = this.addMessage.bind(this);
  }

  addMessage(message) {
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    this.setState({ messages })
  }

  render() {

    const messages = Object.keys(this.state.messages)
    .map(key => {
      return <Message
                key={key}
                message={this.state.messages[key].message} 
                pseudo={this.state.messages[key].pseudo} 
              />
    });
    
    return (
      <div className='box'>
        <div>
          <div className='messages'>
            <div className='message'>{messages}</div>
          </div>
        </div>
        <Formulaire 
          length={140}
          addMessage={this.addMessage}  
          pseudo={this.state.pseudo}
        />
      </div>
    )
  }
}

