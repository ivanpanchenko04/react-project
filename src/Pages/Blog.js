import React, { useEffect, useState } from 'react';
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import LanguageSelector from '../Components/LanguageSelector';
import CommentSection from '../Components/CommentSection';

export default function Blog() {
    const data = getFirestore();
    const [posts, setPosts] = useState([]);
    const [sortBy, setSortBy] = useState(null);
    const [ratings, setRatings] = useState({});
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState('En');

    useEffect(() => {
        fetchData();
    }, [sortBy, selectedCategory, selectedLanguage]);

    const collectionRef = collection(data, 'blog');

    const fetchData = async () => {
        let q = query(collectionRef, sortBy
            && orderBy("date", sortBy));
        if (selectedCategory) {
            q = query(q, where("category" + selectedLanguage, "==", selectedCategory));
        }
        const data = await getDocs(q);
        let postsData = [];
        data.docs.forEach(doc => {
            const title = doc.data()['title' + selectedLanguage];
            const details = doc.data()['details' + selectedLanguage];
            postsData.push({ id: doc.id, title, details, ...doc.data() });
        });
        setPosts(postsData);
    }

    const handleSort = (order) => {
        setSortBy(order);
    };

    const handleRating = (postId, rating) => {
        setRatings(prevRatings => ({
            ...prevRatings,
            [postId]: rating
        }));
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <Row style={{ marginRight: 60 + 'px', marginLeft: 60 + 'px' }}>
            <Col md="9">
                <LanguageSelector onSelectLanguage={handleLanguageSelect}/>
                <div className="d-flex justify-content-end mt-2">
                    <button onClick={() => handleSort('asc')}
                            className="btn btn-primary mr-auto">Дата ↑</button>
                    <button onClick={() => handleSort('desc')}
                            className="btn btn-primary mx-2">Дата ↓</button>
                </div>
                <div className="mt-3 mb-3">
                    <span className="me-2">Фільтр за категоріями:</span>
                    <button onClick={() => handleCategorySelect(null)}
                            className={`btn btn-sm ${selectedCategory === null 
                                ? 'btn-primary' : 'btn-outline-primary'}`}>All</button>
                    <button onClick={() => handleCategorySelect('Space')}
                            className={`btn btn-sm ${selectedCategory === 'Space' 
                                ? 'btn-primary' : 'btn-outline-primary'}`}>Space</button>
                    <button onClick={() => handleCategorySelect('IT')}
                            className={`btn btn-sm ${selectedCategory === 'IT' 
                                ? 'btn-primary' : 'btn-outline-primary'}`}>IT</button>
                    <button onClick={() => handleCategorySelect('Biology')}
                            className={`btn btn-sm ${selectedCategory === 'Biology' 
                                ? 'btn-primary' : 'btn-outline-primary'}`}>Biology</button>
                </div>
                {posts.map((post, index) => (
                    <div className="d-flex align-items-center me-5 m-4" key={index}>
                        <div className="flex-shrink-0">
                            <img width={150} height={150} className="mr-3" src={post.image} alt="photo" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <Link to={`/post/${post.id}`} style={{ color: "black", textDecoration: "none" }}>
                                <h5>{post.title}</h5>
                            </Link>
                            <p>{post.details}</p>
                            <p>{post.category}</p>
                            <div>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span key={star} onClick={() => handleRating(post.id, star)}
                                          style={{ cursor: 'pointer', color: ratings[post.id] >= star
                                                  ? 'orange' : 'gray' }}>
                                        &#9733;
                                    </span>
                                ))}
                            </div>
                            <CommentSection postId={post.id} />
                        </div>
                    </div>
                ))}
            </Col>
        </Row>
    );
}
