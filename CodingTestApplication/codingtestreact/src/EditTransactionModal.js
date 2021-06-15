import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class EditTransactionModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'transaction', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserAccount: event.target.UserAccount.value,
                TransactionTypeId: event.target.TransactionTypeId.value,
                Amount: event.target.Amount.value,
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
                                <Form.Group controlId="UserAccountID">
                                    <Form.Label>UserAccount</Form.Label>
                                    <Form.Control type="text" name="UserAccountID" required placeholder="UserAccount ID" disabled
                                        defaultValue={this.props.useraccountid}/>
                                </Form.Group>
                                <Form.Group controlId="TransactionType">
                                    <Form.Label>TransactionType</Form.Label>
                                    <Form.Control type="text" name="TransactionType" required placeholder="TransactionType"
                                        defaultValue={this.props.transactiontypee}/>
                                </Form.Group>
                                <Form.Group controlId="Amount">
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control type="number" name="Amount" required placeholder="Amount"
                                        defaultValue={this.props.amount}/>
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type="submit">
                                        Update
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