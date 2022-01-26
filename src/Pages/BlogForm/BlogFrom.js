import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useStars from 'stars-rating-react-hooks';
import Navigation from '../../Component/Shared/Navigation/Navigation';
import useAuth from '../../Hooks/useAuth';
import './BlogForm.css'
const fileInput = React.createRef();

const BlogFrom = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

    // handle submit
    const onSubmit = data => {
        let image = fileInput.current.files[0];
        const status = 'Pending';
        const formData = new FormData();
        for (var key in data) {
            formData.append(key, data[key]); // formdata doesn't take objects
        }
        formData.append('image', image)
        formData.append('status', status)
        fetch('http://localhost:5000/blogs', {
            method: "POST",
            body: formData
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {

                    reset()
                }
            });
    }
    const config = {
        totalStars: 5,
        initialSelectedValue: 2,
        renderFull: "★",
        renderEmpty: "☆"
    };
    const { stars, getStarProps, getStarWrapperProps } = useStars(config);
    return (
        <div className='form-container'>
            <Navigation />
            <Container className='feedback-form border shadow rounded d-block m-auto bg-white p-4'>
                <h4 className="text-uppercase mb-2">Share Your <span className='main-font-color'>Experience</span></h4>

                <Form className="" onSubmit={handleSubmit(onSubmit)}>

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
                    <Row className='m-0 p-0 g-2'>
                        <Col className='ps-0 m-0' md={6}>
                            <label className="main-font-color fw-bold fs-6" htmlFor="name">Your Name*</label><br />
                            <input className="w-100 p-2 mb-2" readOnly name="name" defaultValue={user.displayName} {...register("userName")} />
                            <br />

                            <label className="main-font-color fw-bold fs-6" htmlFor="address">Your Address*</label><br />

                            <input className="w-100 p-2 mb-2" placeholder="Address"{...register("address", { required: true })} /> <br />

                            <label className="main-font-color fw-bold fs-6" htmlFor="destination">Tour Destination*</label><br />
                            <input className="w-100 p-2  mb-2" placeholder="Tour Destination"{...register("placeName", { required: true })} /> <br />

                            <label className="main-font-color fw-bold fs-6" htmlFor="expense">Trip Cost*</label><br />
                            <input className="w-100 p-2  mb-2" placeholder="Trip Cost"{...register("expenses", { required: true })} /> <br />
                        </Col>

                        <Col className='ps-0 m-0' md={6}>
                            <label className="main-font-color fw-bold fs-6" htmlFor="email">Your Email*</label><br />
                            <input className="w-100 p-2 mb-2" readOnly name="email" defaultValue={user.email} {...register("userEmail")} /> <br />

                            {errors.email && <span className="text-danger">Please Enter Your Email</span>}

                            <label className="main-font-color fw-bold fs-6" htmlFor="date">Trip Date*</label><br />
                            <input className="w-100 p-2 mb-2" type="date"{...register("date", { required: true })} /> <br />

                            <label className="main-font-color fw-bold fs-6" htmlFor="time">Departure Time*</label><br />
                            <input className="w-100 p-2 mb-2" type="time" {...register("time", { required: true })} /> <br />

                            <label className="main-font-color fw-bold fs-6">Upload Image*</label>
                            <input type="file" className="form-control p-2" name="image" accept='image/*' id="inputCity" ref={fileInput} required />
                        </Col>
                    </Row>

                    <textarea className="w-100 d-block m-auto py-2 mt-3" placeholder="Tell us about your journey!"{...register("descriptions", { required: true })} />


                    {/* submit button */}
                    <input as="NavLink" to="/home" className="w-100 py-2 my-2 explore-button border-0" type="submit" value="Submit" />



                </Form>
            </Container >

        </div >
    );
};

export default BlogFrom;