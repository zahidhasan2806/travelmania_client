import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import AllBlog from '../AllBlog/AllBlog';

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('https://still-brushlands-68938.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data.blog))

    }, [])
    return (
        <Container>
            <div className="text-start mt-5">
                <h2 className="fw-bold">Manages All Orders</h2>
                <hr />
            </div>
            <Table striped borderless responsive hover size="sm">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Rating</th>
                        <th>Status</th>
                        <th>Status Confirmation</th>
                        <th>Delete Blog</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogs?.map(blog => <AllBlog

                            key={blog._id}
                            blog={blog}
                        >

                        </AllBlog>)
                    }
                </tbody>
            </Table>
        </Container >
    );
};

export default AllBlogs;