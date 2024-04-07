import React, {useEffect, useState} from 'react';
import {Card, Col, ListGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {getFirestore, collection, getDocs, query, orderBy} from 'firebase/firestore';

export default function Blog() {
    const data = getFirestore();

    const [posts, setPosts] = useState([]);
    const [sortBy, setSortBy] = useState(null);

    useEffect(() => {
        fetchData();
    }, [sortBy]);

    const collectionRef = collection(data, 'blog');

    const fetchData = async () => {
        const data = await getDocs(query(collectionRef,
           sortBy && orderBy("date", sortBy)));
        let postsData = [];
        data.docs.forEach(doc => {
            postsData.push({ id: doc.id, ...doc.data() });
        });
        setPosts(postsData);
    }

    const handleSort = (order) => {
        setSortBy(order);
        console.log(posts);
    };

    return (
        <Row style={{marginRight: 60 + 'px', marginLeft: 60 + 'px'}}>
            <Col md="9">
                <div className="d-flex justify-content-end mt-2">
                    <button onClick={() => handleSort('asc')}
                            className="btn btn-primary mr-auto">Дата ↑</button>
                    <button onClick={() => handleSort('desc')}
                            className="btn btn-primary mx-2">Дата ↓</button>
                </div>
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
