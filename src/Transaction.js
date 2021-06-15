import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddTransactionModal } from './AddTransactionModal';
import { EditTransactionModal } from './EditTransactionModal';

export class Transaction extends Component {

    constructor(props) {
        super(props);
        this.state = { transactions: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'transaction')
            .then(response => response.json())
            .then(data => {
                this.setState({ transactions: data });
            });
    }
    componentDidMount() {
        this.refreshList();
    }
    componentDidUpdate() {
        this.refreshList();
    }
    deleteUserAccount(transactionid) {
        if (window.confirm("Be Honest?")) {
            fetch(process.env.REACT_APP_API + 'transaction/' + transactionid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { transactions, transactionid, useraccount, transactiontype,amount } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div className="mt-5 d-flex justify-content-left">
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead><tr>
                        <th>Id</th>
                        <th>UserAccount</th>
                        <th>TransactionType</th>
                        <th>Balance</th>
                        <th>CreationDate</th>
                        <th>Edit/Delete</th>
                    </tr></thead>
                    <tbody>
                        {transactions.map(transaction =>
                            <tr key={transaction.TransactionID}>
                                <td>{transaction.UserAccount}</td>
                                <td>{transaction.TransactionType}</td>
                                <td>{transaction.Balance}</td>
                                <td>{transaction.CreationDate}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                transactionid: transaction.TransactionID, useraccount: transaction.UserAccount,
                                                transactiontype: transaction.TransactionType, balance: transaction.Balance, creationdate: transaction.CreationDate
                                            })}>
                                            Edit</Button>
                                    </ButtonToolbar>
                                </td></tr>)}
                    </tbody>

                </Table >
                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Transaction
                    </Button>
                    <AddTransactionModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                    <Button variant='info'
                        onClick={() => this.setState({ editModalShow: true })}>
                        Edit
                    </Button>
                    <Button variant='danger'
                        onClick={() => this.deleteTransaction(transactions.TransactionID)}>
                        Delete
                    </Button>
                    <EditTransactionModal show={this.state.editModalShow}
                        onHide={editModalClose}transactionid={transactionid} useraccount={useraccount} />
                </ButtonToolbar>
            </div>)
    }

}