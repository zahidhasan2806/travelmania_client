import React from 'react';
import { Button, Col } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

const UserExperience = ({ blog }) => {
    const { userName, placeName, descriptions, expenses, date, rating, image } = blog;

    return (
        <Col md={3} lg={4} className='py-3'>
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
                    <Button variant="none" className='view-details-spots'>
                        View Details
                    </Button>

                </div>
            </div>
            <div>
                <div className='ps-5'>
                    <StarRatings
                        rating={parseFloat(rating)}
                        starDimension="30px"
                        starSpacing="5px"
                        starRatedColor="gold"
                        starEmptyColor='gray'
                    />
                </div>
                <p className='my-3' style={{ color: "gray", fontStyle: "italic" }}>by: {userName}</p>
                <p>{descriptions.slice(0, 150)} <span><a href="">See More</a></span></p>

            </div>
        </Col>
    );
};

export default UserExperience;