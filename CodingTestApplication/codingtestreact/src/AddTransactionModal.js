import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class AddTransactionModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'transaction', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                TransactionId: null,
                UserAccount: event.target.UserAccount.value,
                TransactionType: event.target.TransactionType.value,
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
                            Transact
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Row>
                        <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="UserAccount">
                                        <Form.Label>UserAccount</Form.Label>
                                        <Form.Control type="text" name="UserAccount" required placeholder="User Account" />
                                    </Form.Group>
                                    <Form.Group controlId="TransactionType">
                                        <Form.Label>Transaction Type</Form.Label>
                                        <Form.Control type="text" name="TransactionType" required placeholder="Transaction Type" />
                                    </Form.Group>
                                    <Form.Group controlId="CreationDate">
                                        <Form.Label>CreationDate </Form.Label>
                                        <Form.Control type="date" name="CreationDate " required placeholder="Creation Date " />
                                    </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type="submit">
                                        Add Transaction
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