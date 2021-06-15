import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class AddTransactionTypeModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'transactiontype', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                BranchId: null,
                TransactionTypeName: event.target.TransactionTypeName.value,
                Description: event.target.Description.value
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
                            Add TransactionType
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Row>
                        <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="TransactionTypeName">
                                        <Form.Label>TransactionTypeName</Form.Label>
                                        <Form.Control type="text" name="TransactionTypeName" required placeholder="TransactionType Name" />
                                    </Form.Group>
                                    <Form.Group controlId="Description">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type="text" name="Description" required placeholder="Description" />
                                    </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type="submit">
                                            Add TransactionType
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row></Modal.Body>
                        <Modal.Footer>
                            <Button variatn="danger" onClick={ this.props.onHide}>Close</Button>
                        </Modal.Footer>
                </Modal>
            </div>
            )
    }
}