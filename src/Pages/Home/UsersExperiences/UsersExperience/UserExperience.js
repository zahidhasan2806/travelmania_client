import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import useAuth from '../../../../Hooks/useAuth';

const UserExperience = ({ blog }) => {
    const { admin } = useAuth()
    const { userName, placeName, descriptions, date, rating, image, _id } = blog;

    return (
        <Col md={6} lg={4} className='py-3'>
            <div className='overlay'>
                <div className='all-spot-section'>
                    {
                        image &&
                        <img src={`data:image/jpeg;base64,${image}`} alt="" className='img-fluid' />
                    }
                    <div className='bg-opacity-75 bg-dark card-div w-100 py-2'>
                        <h3>{placeName}</h3>
                        <h5>{date}</h5>
                    </div>
                    <Button variant="none" className='view-details-spots' as={Link} to={`/blogDetails/${_id}`}>
                        View Details
                    </Button>

                </div>
            </div>
            <div>
                <div className='ps-5 text-center'>
                    <StarRatings
                        rating={parseFloat(rating)}
                        starDimension="25px"
                        starSpacing="5px"
                        starRatedColor="gold"
                        starEmptyColor='gray'
                    />
                </div>
                {
                    admin ? <p className='my-3' style={{ color: "gray", fontStyle: "italic" }}>by: Admin</p> : <p className='my-3' style={{ color: "gray", fontStyle: "italic" }}>by: {userName}</p>
                }
                <p>{descriptions.slice(0, 150)} </p>

            </div>
        </Col>
    );
};

export default UserExperience;