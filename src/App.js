import React, { Component, createRef } from 'react';
import './App.css';

// CSS Animation
import './Animations.css';

// My Components
import { Formulaire } from './Components/Formulaire';
import { Message } from './Components/Message';

// Firebase
import base from '../src/Base';

// React Transition Group
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export class App extends Component {
  constructor(props) {
    super(props);

  // Component States
    this.state = {
      messages: {},
      pseudo: this.props.match.params.pseudo
    }

  // Bind THIS to Methods
    this.addMessage = this.addMessage.bind(this);
  }

  // createRef Below
  messagesRef = createRef()

  // Will be Mounted 1 time When the Component is Render
  componentDidMount() {
    base.syncState('/', {
      context: this,
      state: 'messages' 
    })
  }

  // Will be Render Everytime the State is Uptdated
  componentDidUpdate() {
    const ref = this.messagesRef.current;
    ref.scrollTop = ref.scrollHeight;
  }

  addMessage(message) {
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    Object
      .keys(messages)
      .slice(0, -10)
      .forEach(key => {
        messages[key] = null
      });
    
    this.setState({ messages })
  }

  // Let us Know who is Chatting to
  isUser = pseudo => pseudo === this.state.pseudo;

  render() {
    const messages = Object.keys(this.state.messages)
    .map(key => {
      return (
        <CSSTransition 
              key={key}
              timeout={200}
              classNames='fade'
        >
          <Message
              isUser={this.isUser}
              message={this.state.messages[key].message} 
              pseudo={this.state.messages[key].pseudo} 
          />
        </CSSTransition>
      )
    });
    
  // JSX Below
    return (
      <div className='box'>
        <div>
          <div className='messages' ref={this.messagesRef}>
            <TransitionGroup className='message'>
              {messages}
            </TransitionGroup>
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

