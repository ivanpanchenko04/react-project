import React from 'react';
import {Card, Col, ListGroup, Row} from "react-bootstrap";
import post1 from "../img/post1.jpg";
import post2 from "../img/post2.jpeg";
import post3 from "../img/post3.jpeg";
import {Link} from "react-router-dom";

function Blog() {
    const posts = [
        {id: 1, image: post1, title: "Post #1", text: "First post in this blog"},
        {id: 2, image: post2, title: "Post #2", text: "Another post"},
        {id: 3, image: post3, title: "Post #3", text: "One more post"}
    ]

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
                                {post.text}
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