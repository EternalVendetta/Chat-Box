import React from 'react';

// Message is Stateless
export const Message = ({ message, pseudo }) => {
    return (
        <p className='user-message'>
            {pseudo}: {message}
        </p>
    )
}