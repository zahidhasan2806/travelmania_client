import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import AllBlog from '../AllBlog/AllBlog';

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])
    return (
        <Container className="blogs-sec">
            <h1 className="" style={{ backgroundColor: '#FCF6F6' }}>ALl Customer Review</h1>
            <div className="container">
                <div className="row review-sec">
                    {
                        blogs?.map(blog => <AllBlog

                            key={blog._id}
                            blog={blog}
                        >

                        </AllBlog>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default AllBlogs;