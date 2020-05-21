import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = (props) => {

    const [value, setValue] = useState('');

    return (
        <div>
            <h1>My Form</h1>
            <input

                type='text'
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={() => props.setMessage(value)}>Show My Message</button>
        </div>
    );
}

export default Form;
