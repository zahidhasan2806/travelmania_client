import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const AllBlog = ({ blog }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleNoBtn = () => setShow(false);

    const { userName, userEmail, rating, status, _id } = blog;
    const handleUpdateStatus = () => {
        const updatedStatus = { status: "Approved" };

        const url = `https://still-brushlands-68938.herokuapp.com/blogs/${_id}`;

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
    // handle delete order from api
    const handleDeleteBlog = id => {
        const url = `https://still-brushlands-68938.herokuapp.com/blogs/${id}`

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    window.location.reload();
                }
            })
            .finally(setShow(false))
    };

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
            <td>
                <Button onClick={() => { setShow(true); }} variant="secondary" className="btn btn-success w-100">
                    Delete
                </Button>

            </td>
            {/* Confirmation alert */}
            <Modal show={show} onHide={handleClose}>

                {/* modal title */}
                <div className="modal-header">
                    <h5 className="modal-title text-primary" id="exampleModalLabel">Confirmation</h5>
                </div>

                <Modal.Body>Are you sure you want to <span className="text-danger fw-bold"> Delete </span> this Blog? This action cannot be undone and you will be unable to recover any data.</Modal.Body>


                {/* confirmation button */}
                <Modal.Footer>

                    <Button variant="outline-danger" onClick={() => { handleDeleteBlog(_id) }}>
                        Yes! Delete it
                    </Button>
                    <Button variant="outline-success" onClick={handleNoBtn}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </tr >
    );
};

export default AllBlog;