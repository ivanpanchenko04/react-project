import React, {useEffect, useState} from 'react';
import {Card, Col, ListGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import { initializeApp } from "firebase/app";

function Blog() {
    const firebaseConfig = {
        apiKey: "AIzaSyBP3EK6mQWdhdT0njW1PnP7Z6nPv6AzvUU",
        authDomain: "frontendlab5.firebaseapp.com",
        projectId: "frontendlab5",
        storageBucket: "frontendlab5.appspot.com",
        messagingSenderId: "201245358397",
        appId: "1:201245358397:web:e47117fe7d22abafeaed54",
        measurementId: "G-CSDR9GK46R"
    };
    initializeApp(firebaseConfig);
    const data = getFirestore();

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        const collectionRef = collection(data, 'blog');
        getDocs(collectionRef)
            .then(snapshot => {
                let postsData = [];
                snapshot.docs.forEach(doc => {
                    postsData.push({ id: doc.id, ...doc.data() });
                });
                setPosts(postsData);
            })
            .catch(error => {
                console.error("Error getting documents: ", error);
            });
    }

    return (
        <Row style={{marginRight: 60 + 'px', marginLeft: 60 + 'px'}}>
            <Col md="9">
                {posts.map((post, index) => (
                    <div className="d-flex align-items-center me-5 m-4" key={index}>
                        <div className="flex-shrink-0">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src={post.image}
                                alt="photo"/>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <Link to={`/post/${post.id}`} style={{color: "black", textDecoration: "none"}}>
                                <h5>{post.title}</h5>
                            </Link>
                            <p>
                                {post.details}
                            </p>
                        </div>
                    </div>
                ))}
            </Col>
            <Col md="3">
                <h5 className="text-center mt-5">Категорії</h5>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>категорія 1</ListGroup.Item>
                        <ListGroup.Item>категорія 2</ListGroup.Item>
                        <ListGroup.Item>категорія 3</ListGroup.Item>
                        <ListGroup.Item>категорія 4</ListGroup.Item>
                        <ListGroup.Item>категорія 5</ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card className="mt-3 bg-light">
                <Card.Body>
                        <Card.Title>Slide widget</Card.Title>
                        <Card.Text>
                            Lorem
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default Blog;
