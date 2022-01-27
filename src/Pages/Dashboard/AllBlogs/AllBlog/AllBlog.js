import React from 'react';

const AllBlog = ({ blog }) => {
    const { userName, userEmail, descriptions, rating, status, _id } = blog;
    const handleUpdateStatus = () => {
        const updatedStatus = { status: "Approved" };

        const url = `http://localhost:5000/blogs/${_id}`;

        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    alert('Approved')
                    window.location.reload()
                }
            })
    }
    return (
        <div className="prodcuts-details-manage col-md-3">
            <div className="my-order-title">
                <p>Name: {userName}</p>
                <p>Email: {userEmail}</p>
                <p>Rating: {rating}</p>
                <p>Description: {descriptions}</p>
                <button className="blog-btn" onClick={handleUpdateStatus}>Pending</button>
            </div>
        </div>
    );
};

export default AllBlog;