import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ setName }) => {

    const textOnChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div className="container">
            <h1>Enter you name</h1>
            <input type='text' onChange={textOnChange} />
            <Link to="/home" className="btn btn-primary">Go</Link>
        </div>
    );
}

export default Login;
