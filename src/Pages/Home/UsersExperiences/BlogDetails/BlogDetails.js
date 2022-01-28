import React, { useEffect, useState } from 'react';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Navigation from '../../../../Component/Shared/Navigation/Navigation';
import useAuth from '../../../../Hooks/useAuth';
import './BlogDetails.css'
const BlogDetails = () => {
    const { admin } = useAuth()
    const [blogs, setBlogs] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    const { id } = useParams();
    useEffect(() => {
        fetch(`https://still-brushlands-68938.herokuapp.com/blogs/${id}`)
            .then(res => res.json())
            .then(data => setBlogs(data))
            .finally(() => setIsLoading(false))
    }, [])
    const { userName, placeName, time, descriptions, expenses, image, pic, date, rating } = blogs;
    if (isloading) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    } else {
        return (
            <>
                <Navigation />
                <div style={{ "marginTop": "-150px" }} className='blog-detail-banner'>
                    {
                        image ?
                            <img src={`data:image/jpeg;base64,${image}`} alt="" className='img-fluid d-block w-100 opacity-25'
                                style={{ "height": "70vh" }}
                            />
                            :
                            <img src={pic} alt="" className='img-fluid d-block w-100 opacity-25' />
                    }

                </div>

                <Container >
                    <Breadcrumb className=' fs-3'>
                        <Breadcrumb.Item href="/home">Blogs</Breadcrumb.Item>
                        <Breadcrumb.Item active>{placeName}</Breadcrumb.Item>
                    </Breadcrumb>
                    <hr />

                    <Row className='my-5'>
                        <Col md={6} className='mb-5'>
                            {/* <h2>{title}</h2> */}
                            {
                                admin ? <p className='my-3' style={{ color: "gray", fontStyle: "italic" }}>by: Admin</p> : <p className='my-3' style={{ color: "gray", fontStyle: "italic" }}>by: {userName}</p>

                            }

                            <h2>{placeName}</h2>
                            <p>{descriptions}</p>
                            <p>Total cost i've spent <span className='fw-bold fs-3'>${expenses}</span></p>
                            <h6>Our Journey start at {time} in {date}</h6>
                            <div className='text-center'>
                                <StarRatings
                                    rating={parseFloat(rating)}
                                    starDimension="30px"
                                    starSpacing="5px"
                                    starRatedColor="gold"
                                    starEmptyColor='gray'
                                />
                            </div>
                        </Col>

                        <Col md={6}>

                            <img src={`data:image/jpeg;base64,${image}`} alt="" className='img-fluid d-block w-100' />

                        </Col>
                    </Row>
                </Container>

            </>
        );
    };


}

export default BlogDetails;