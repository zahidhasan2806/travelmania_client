import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import UserExperience from '../UsersExperience/UserExperience';

const UsersExperiences = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <Row className='px-0 gx-5'>
            <h3 className=' text-uppercase text-start '> Recent Blogs<span className="main-font-color"></span></h3>

            {
                blogs.filter(singleBlog => singleBlog.status === "Approved").map(blog => <UserExperience
                    key={blog._id}
                    blog={blog}
                ></UserExperience>)
            }
        </Row >
    );
};

export default UsersExperiences;