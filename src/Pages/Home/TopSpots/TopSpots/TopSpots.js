import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import TopSpot from '../TopSpot/TopSpot';

const TopSpots = () => {
    const [topSpots, setTopSpots] = useState([]);


    // fetch top spots from api

    useEffect(() => {
        fetch('https://still-brushlands-68938.herokuapp.com/spots')
            .then(res => res.json())
            .then(data => setTopSpots(data))
    }, []);
    return (
        <Row className='px-0'>
            <h3 className=' text-uppercase text-center '>Top Rated <span className="main-font-color">Spots</span></h3>

            {
                topSpots.map(spot => <TopSpot

                    key={spot._id}
                    spot={spot}

                ></TopSpot>)
            }
        </Row >
    );
};

export default TopSpots;