import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form/Form';

const Home = ({ name }) => {

    const [showForm, setShowForm] = useState(false);
    const [message, setMessage] = useState('');

    return (
        <div className="container">
            <div>
                <h1>Hi {name}!</h1>
            </div>

            <Link to="/list" className="btn btn-primary mx-5">Go to List</Link>

            <button onClick={() => setShowForm(true)}>Show Form</button>

            {showForm ? (<Form setMessage={setMessage} />) : null}
            {message ? (<p>Message from Form - {message}</p>) : null}
        </div>

    );
}

export default Home;
