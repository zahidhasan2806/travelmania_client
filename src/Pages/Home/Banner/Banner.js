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
                        <h1>First slide label</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid banner_img"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='BannerInfo'>
                        <h1>Second slide label</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img

                        className="d-block w-100 img-fluid banner_img"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='BannerInfo'>
                        <h1>Third slide label</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;