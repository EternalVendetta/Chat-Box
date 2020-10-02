import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class Connexion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pseudo: '',
            isClicked: false
        }
    // Bind THIS
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Change the State (pseudo) via the Input Field 
    handleChange(e) {
        this.setState({ pseudo: e.target.value })
    }

    // Change the State (isClicked) to true via the Click & Redirect
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ isClicked: true })
    }

    render() {
        const { isClicked } = this.state;

        // Conditional Statement To Whether Redirect or Not
        if (isClicked) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
        } 

        return (
          <div className='connexionBox'>
              <form className='connexion'
                    onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder='Pseudo'
                    required
                    value={this.state.pseudo}
                    onChange={this.handleChange} />
                <button type='submit'>GO</button>
              </form>
          </div>  
        )
    }
}