import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class AddUserAccountModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'useraccount', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserAccountId: null,
                FirstName: event.target.FirstName.value,
                LastName: event.target.LastName.value,
                Branch: event.target.Branch.value,
                Balance: event.target.Balance.value,
                CreationData: event.target.CreationData.value
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
                            Add User Account
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Row>
                        <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="FirstName">
                                        <Form.Label>FirstName</Form.Label>
                                        <Form.Control type="text" name="FirstName" required placeholder="First Name" />
                                    </Form.Group>
                                    <Form.Group controlId="LastName">
                                        <Form.Label>LastName</Form.Label>
                                        <Form.Control type="text" name="LastName" required placeholder="Last Name" />
                                    </Form.Group>
                                    <Form.Group controlId="Branch">
                                        <Form.Label>Branch</Form.Label>
                                        <Form.Control type="text" name="Branch" required placeholder="Branch" />
                                    </Form.Group>
                                    <Form.Group controlId="Balance">
                                        <Form.Label>Balance</Form.Label>
                                        <Form.Control type="number" min="0" name="Balance" required placeholder="Deposit" />
                                    </Form.Group>
                                    <Form.Group controlId="CreationDate">
                                        <Form.Label>CreationDate</Form.Label>
                                        <Form.Control type="date" name="CreationDate" required placeholder="Creation Date" />
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