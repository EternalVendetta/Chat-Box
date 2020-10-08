import React, { Component } from 'react'

export class Formulaire extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            characters: this.props.length
        }
    
    // Bind THIS to Methods 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createMessage = this.createMessage.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    createMessage() {
    // Imports Props Destructuring
      const { addMessage, pseudo, length } = this.props;
      
      const message = {
        pseudo,
        message: this.state.message
      }

      addMessage(message);
      
      // Reset Fields After Sending Msg
      this.setState({ message: '', characters: length });
    }

    // Send Message When Click SEND
    handleSubmit(e) {
       e.preventDefault();
       this.createMessage()
    }

    // Remove 1 each time we put Characters in TextArea 
    handleChange(e) {
        const message = e.target.value;
        const length = this.props.length - message.length
        this.setState({ message, characters: length })
    }
    
    // Send Message When Push ENTER
    handleKeyUp(e) {
        if (e.key === 'Enter') {
            this.createMessage(); 
        }
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <textarea 
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                    required 
                    maxLength={this.props.length}
                />
                <div className='info'>
                    {this.state.characters}
                </div>
                <button type='submit'>
                    Send
                </button>
            </form>
        )
    }
}