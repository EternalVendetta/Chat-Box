import React from 'react';

// Message is Stateless
export const Message = ({ message, pseudo, isUser }) => {
    // Condition to Know Who is The User
    if (isUser(pseudo)) {
        return (
            <p className='user-message'>
                <strong>{pseudo}</strong>: {message}
            </p>
        )
    } else {
        return (
            <p className='not-user-message'>
                <strong>{pseudo}</strong>: {message}
            </p>
        )
    }
}