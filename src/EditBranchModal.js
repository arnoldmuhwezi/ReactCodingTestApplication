import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class EditBranchModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'branch', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                BranchId: event.target.BranchId.value,
                BranchName: event.target.BranchName.value,
                Location: event.target.Location.value,
                CreationDate: event.target.CreationDate.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
            },
                (error) => {
                    alert('Failed')
                })
    }
    render() {
        return (
            <div className="container">
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Branch
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="BranchID">
                                    <Form.Label>BranchName</Form.Label>
                                    <Form.Control type="text" name="BranchID" required placeholder="Branch ID" disabled
                                        defaultValue={this.props.branchid}/>
                                </Form.Group>
                                <Form.Group controlId="BranchName">
                                    <Form.Label>BranchName</Form.Label>
                                    <Form.Control type="text" name="BranchName" required placeholder="Branch Name"
                                        defaultValue={this.props.branchname}/>
                                </Form.Group>
                                <Form.Group controlId="Location">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control type="text" name="Location" required placeholder="Branch Location"
                                        defaultValue={this.props.location}/>
                                </Form.Group>
                                <Form.Group controlId="CreationDate">
                                    <Form.Label>CreationDate </Form.Label>
                                    <Form.Control type="date" name="CreationDate " required placeholder="Creation Date "
                                        defaultValue={this.props.creationdate}/>
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type="submit">
                                        Update Branch
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row></Modal.Body>
                    <Modal.Footer>
                        <Button variatn="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}