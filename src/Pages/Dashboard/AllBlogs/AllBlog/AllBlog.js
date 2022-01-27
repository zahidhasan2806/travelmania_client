import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';

const AllBlog = ({ blog }) => {
    const { userName, userEmail, rating, status, _id } = blog;
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
                    alert('Approved')
                    window.location.reload()
                }
            })
    }
    return (
        <tr>
            <td>{userName}</td>
            <td>{userEmail}</td>
            <td>{rating}</td>
            <td>
                {status === "Approved" && <FontAwesomeIcon
                    className="text-success" icon={faCheck} />}
                {status}
            </td>
            <td>
                <Button onClick={handleUpdateStatus} variant="secondary" className="btn btn-success w-100">
                    Confirm
                </Button>

            </td>
        </tr >
    );
};

export default AllBlog;