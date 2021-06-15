import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddBranchModal } from './AddBranchModal';
import { EditBranchModal } from './EditBranchModal';

export class Branch extends Component {

    constructor(props) {
        super(props);
        this.state = {branches:[], addModalShow:false,editModalShow:false}
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'branch')
            .then(response => response.json())
            .then(data => {
                this.setState({ branches: data });
            });
    }
    componentDidMount() {
        this.refreshList();
    }
    componentDidUpdate() {
        this.refreshList();
    }
    deleteBranch(branchid) {
        if (window.confirm("Be Honest?")) {
            fetch(process.env.REACT_APP_API + 'branch/' + branchid, {
                method: 'DELETE',
                header: {'Accept':'application/json',
                    'Content-Type':'application/json'}
            })
        }
    }

    render() {
        const { branches, branchid, branchname } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div className="mt-5 d-flex justify-content-left">
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead><tr>
                        <th>BranchId</th>
                        <th>BranchName</th>
                        <th>CreationDate</th>
                        <th>Edit/Delete</th>
                    </tr></thead>
                    <tbody>
                        {branches.map(branch=>
                        <tr key={branch.BranchID}>
                            <td>{branch.BranchID}</td>
                            <td>{branch.BranchName}</td>
                            <td>{branch.CreationDate}</td>
                            <td>
                            <ButtonToolbar>
                                <Button className="mr-2" variant="info"
                                    onClick={() => this.setState({editModalShow: true,
                                        branchid: branch.BranchID, branchname: branch.BranchName,
                                        location: branch.Location, creationdate: branch.CreationDate})}>
                                            Edit</Button>
                            </ButtonToolbar>
                        </td></tr>)}
                     </tbody>

                </Table >
                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Branch
                    </Button>
                    <AddBranchModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                    <Button variant='info'
                        onClick={() => this.setState({ editModalShow: true })}>
                        Edit
                    </Button>
                    <Button variant='danger'
                        onClick={() => this.deleteBranch(branches.BranchID)}>
                        Delete
                    </Button>
                <EditBranchModal show={this.state.editModalShow}
                    onHide={editModalClose} branchid={branchid} branchname={branchname} />
                </ButtonToolbar>
            </div>)
                }

}