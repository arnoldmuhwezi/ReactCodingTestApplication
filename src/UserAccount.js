import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddUserAccountModal } from './AddUserAccountModal';
import { EditUserAccountModal } from './EditUserAccountModal';

export class UserAccount extends Component {

    constructor(props) {
        super(props);
        this.state = { useraccounts: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'useraccount')
            .then(response => response.json())
            .then(data => {
                this.setState({ useraccounts: data });
            });
    }
    componentDidMount() {
        this.refreshList();
    }
    componentDidUpdate() {
        this.refreshList();
    }
    deleteUserAccount(useraccountid) {
        if (window.confirm("Be Honest?")) {
            fetch(process.env.REACT_APP_API + 'useraccount/' + useraccountid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { useraccounts, useraccountid, useraccountname } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div className="mt-5 d-flex justify-content-left">
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead><tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Branch</th>
                        <th>Balance</th>
                        <th>CreationDate</th>
                        <th>Edit/Delete</th>
                    </tr></thead>
                    <tbody>
                        {useraccounts.map(useraccount =>
                            <tr key={useraccount.UserAccountID}>
                                <td>{useraccount.LastName}</td>
                                <td>{useraccount.LastName}</td>
                                <td>{useraccount.Branch}</td>
                                <td>{useraccount.Balance}</td>
                                <td>{useraccount.CreationDate}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                useraccountid: useraccount.UserAccountID, firstname: useraccount.FirstName,
                                                lastname: useraccount.LastName, branch: useraccount.Branch, balance: useraccount.Balance, creationdate: useraccount.CreationDate
                                            })}>
                                            Edit</Button>
                                    </ButtonToolbar>
                                </td></tr>)}
                    </tbody>

                </Table >
                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add UserAccount
                    </Button>
                    <AddUserAccountModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                    <Button variant='info'
                        onClick={() => this.setState({ editModalShow: true })}>
                        Edit
                    </Button>
                    <Button variant='danger'
                        onClick={() => this.deleteUserAccount(useraccounts.UserAccountID)}>
                        Delete
                    </Button>
                    <EditUserAccountModal show={this.state.editModalShow}
                        onHide={editModalClose} useraccountid={useraccountid} useraccountname={useraccountname} />
                </ButtonToolbar>
            </div>)
    }

}