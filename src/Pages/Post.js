import React from 'react';
import { useParams } from 'react-router-dom';
import post1 from "../img/post1.jpg";
import post2 from "../img/post2.jpeg";
import post3 from "../img/post3.jpeg";

export default function Post() {
    const { id } = useParams();

    const posts = [
        {id: 1, image: post1, title: "Post #1", text: "First post in this blog"},
        {id: 2, image: post2, title: "Post #2", text: "Another post"},
        {id: 3, image: post3, title: "Post #3", text: "One more post"}
    ]

    const post = posts.find(post => post.id === parseInt(id));

    return (
        <div className="m-2">
            <img src={post.image} alt="Team image" style={{width: 500 + "px"}}/>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
        </div>
    )
}