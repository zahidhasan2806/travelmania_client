import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import UserExperience from '../UsersExperience/UserExperience';
import './UsersExperiences.css'
const UsersExperiences = () => {
    const [blogs, setBlogs] = useState([])
    const [pages, setPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const perPageBlog = 10;
    useEffect(() => {
        fetch(`http://localhost:5000/blogs?currentPage=${currentPage}&&perPageBlog=${perPageBlog}`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data.blog)
                // pagination
                const totalPage = data.count;
                const pageNumber = Math.ceil(totalPage / perPageBlog);
                setPages(pageNumber)
            })
    }, [currentPage]);

    return (
        <Row className='px-0 gx-5'>
            <h3 className=' text-uppercase text-start '> Recent Blogs<span className="main-font-color"></span></h3>

            {
                blogs.filter(singleBlog => singleBlog.status === "Approved").map(blog => <UserExperience
                    key={blog._id}
                    blog={blog}
                ></UserExperience>)
            }
            <div className="pagination">
                {
                    [...Array(pages).keys()]
                        .map(number => <Button
                            className={number === currentPage ? 'selected' : ''}
                            key={number}
                            onClick={() => setCurrentPage(number)}
                        >{number + 1}</Button>)
                }
            </div>
        </Row >
    );
};

export default UsersExperiences;