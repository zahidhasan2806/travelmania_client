import axios from 'axios';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useStars from 'stars-rating-react-hooks';
import useAuth from '../../../Hooks/useAuth';

const fileInput = React.createRef();

const WriteBlog = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

    const config = {
        totalStars: 5,
        initialSelectedValue: 2,
        renderFull: '★',
        renderEmpty: '☆',
    };

    const {
        stars,
        getStarProps,
        getStarWrapperProps
    } = useStars(config);

    // handle submit button 
    const onSubmit = data => {

        let image = fileInput.current.files[0];

        const formData = new FormData();
        const status = 'Approved';

        for (var key in data) {
            formData.append(key, data[key]);
        }

        formData.append('image', image);
        formData.append('status', status)

        axios.post('http://localhost:5000/blogs', formData, {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            }
        })
            .then(res => {
                if (res.data.insertedId) {
                    alert("Article Added successfully");
                    reset();
                }
            })
    };
    return (
        <div
            style={{ "backgroundColor": "#f5b3a2" }}
        >

            <Container className='feedback-form d-block m-auto bg-white p-4'>
                <h4 className="text-uppercase mb-2">Share Your <span className='main-font-color'>Experience</span></h4>

                <Form className="border rounder shadow p-3" onSubmit={handleSubmit(onSubmit)}>

                    <div className="text-center  mb-2">

                        <span
                            {...getStarWrapperProps({
                                style: {
                                    cursor: 'pointer',
                                    display: 'inline-block'
                                },
                            })}
                        >
                            {stars?.map((star, i) => (
                                <span
                                    key={i}
                                    {...getStarProps(i, {
                                        style: {
                                            fontSize: '35px',
                                            color: "gold"

                                        },
                                        onClick: (event, ratedValue) => {
                                            setValue("rating", ratedValue, {
                                                shouldValidate: true,
                                                shouldDirty: true
                                            })
                                        },
                                    })}
                                >
                                    {star}
                                </span>
                            ))}
                        </span>
                    </div>
                    <Row className='m-0 p-0'>
                        <Col>
                            <label className="main-font-color fw-bold fs-6" htmlFor="name">Your Name</label><br />
                            <input className="w-100 p-2 mb-2" name="name" readOnly defaultValue={user.displayName} {...register("name")} />
                            <br />

                            <label className="main-font-color fw-bold fs-6" htmlFor="address">Your Address</label><br />

                            <input className="w-100 p-2 mb-2" placeholder="Address"{...register("address", { required: true })} /> <br />

                            <label className="main-font-color fw-bold fs-6" htmlFor="destination">Tour Destination</label><br />
                            <input className="w-100 p-2  mb-2" placeholder="Tour Destination"{...register("location", { required: true })} /> <br />

                            <label className="main-font-color fw-bold fs-6" htmlFor="expense">Trip Cost</label><br />
                            <input className="w-100 p-2  mb-2" placeholder="Trip Cost"{...register("expense", { required: true })} /> <br />
                        </Col>

                        <Col>
                            <label className="main-font-color fw-bold fs-6" htmlFor="email">Your Email</label><br />
                            <input className="w-100 p-2 mb-2" name="email" readOnly defaultValue={user.email} {...register("email")} /> <br />

                            {errors.email && <span className="text-danger">Please Enter Your Email</span>}

                            <label className="main-font-color fw-bold fs-6" htmlFor="date">Trip Date</label><br />
                            <input className="w-100 p-2 mb-2" type="date"{...register("date", { required: true })} /> <br />

                            <label className="main-font-color fw-bold fs-6" htmlFor="time">Departure Time</label><br />
                            <input className="w-100 p-2 mb-2" type="time" {...register("time", { required: true })} /> <br />

                            <label className="main-font-color fw-bold fs-6">Upload Image</label>
                            <input type="file" className="form-control" name="image" accept='image/*' id="inputCity" ref={fileInput} />
                        </Col>
                    </Row>
                    <div className='mx-2'>
                        <input className="w-100 p-2  mb-2" placeholder="Paste Your Image Link"{...register("pic")} /> <br />

                        <textarea className="w-100 d-block m-auto py-2 mt-3" placeholder="Share Your Experience with us?"{...register("comment", { required: true })} />
                    </div>

                    {/* submit button */}
                    <input as="NavLink" to="/home" className="w-100 py-2 my-2 explore-button border-0" type="submit" value="Submit" />
                </Form>
            </Container >
        </div >
    );
};

export default WriteBlog;