import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const [blogs, setBlogs] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${id}`)
            .then(res => res.json())
            .then(data => setBlogs(data))
            .finally(() => setIsLoading(false))
    }, [])
    const { userName, placeName, time, descriptions, expenses, image } = blogs;
    if (isloading) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    } else {
        return (
            <Container>
                <h1>{placeName}</h1>
            </Container>
        );
    };
}

export default BlogDetails;