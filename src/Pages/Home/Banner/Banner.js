import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/Banner01.jpg'
import banner2 from '../../../Images/Banner02.jpg'
import banner3 from '../../../Images/Banner03.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid banner_img"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='BannerInfo'>
                        <h1>Where the journey begins!</h1>
                        <p> Add more excitement to your life.Make your life more extra ordinary</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid banner_img"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='BannerInfo'>
                        <h1>We make dreams come true!</h1>
                        <p> Grab more fun with travel.To the more beautiful trip.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img

                        className="d-block w-100 img-fluid banner_img"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='BannerInfo'>
                        <h1>Traveling is the spice of life.</h1>
                        <p> Don’t just book it, enjoy it.Roma around world.Pay less, travel more</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;