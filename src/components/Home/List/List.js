import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './List.css'
import axios from 'axios';

const List = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setPosts(response.data))
    }, [])

    return (
        <div>
            {posts.map(post => (
                <p key={post.id}>{post.title}</p>
            ))}
        </div>
    );
}

export default List;
