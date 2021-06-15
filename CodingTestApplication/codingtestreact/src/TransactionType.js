import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddTransactionTypeModal } from './AddTransactionTypeModal';
import { EditTransactionTypeModal } from './EditTransactionTypeModal';

export class TransactionType extends Component {

    constructor(props) {
        super(props);
        this.state = { transactiontypes: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'transactiontypes')
            .then(response => response.json())
            .then(data => {
                this.setState({ transactiontypes: data });
            });
    }
    componentDidMount() {
        this.refreshList();
    }
    componentDidUpdate() {
        this.refreshList();
    }
    deleteTransactionType(transactiontypeid) {
        if (window.confirm("Be Honest?")) {
            fetch(process.env.REACT_APP_API + 'transactiontype/' + transactiontypeid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { transactiontypes, transactiontypeid, transactiontypename } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div className="mt-5 d-flex justify-content-left">
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead><tr>
                        <th>Id</th>
                        <th>TransationType</th>
                        <th>Description</th>
                        <th>Edit/Delete</th>
                    </tr></thead>
                    <tbody>
                        {transactiontypes.map(transactiontype =>
                            <tr key={transactiontype.TransactionTypeID}>
                                <td>{transactiontype.TransactionTypeID}</td>
                                <td>{transactiontype.TransactionTypeName}</td>
                                <td>{transactiontype.Description}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                transactiontypeid: transactiontype.TransactionTypeID, transactiontypename: transactiontype.TransactionTypeName,
                                                description: transactiontype.Description
                                            })}>
                                            Edit</Button>
                                    </ButtonToolbar>
                                </td></tr>)}
                    </tbody>

                </Table >
                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Transaction Type
                    </Button>
                    <AddTransactionTypeModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                    <Button variant='info'
                        onClick={() => this.setState({ editModalShow: true })}>
                        Edit
                    </Button>
                    <Button variant='danger'
                        onClick={() => this.deleteTransactionType(transactiontypes.TransactionTypeID)}>
                        Delete
                    </Button>
                    <EditTransactionTypeModal show={this.state.editModalShow}
                        onHide={editModalClose} transactiontypeid={transactiontypeid} transactiontypename={transactiontypename} />
                </ButtonToolbar>
            </div>)
    }

}