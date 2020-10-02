import React, { Component } from 'react'

export class Formulaire extends Component {
    render() {
        return (
            <form className='form'>
                <textarea required maxLength='140'/>
                <div className='info'>
                    140
                </div>
                <button type='submit'>
                    Send
                </button>
            </form>
        )
    }
}