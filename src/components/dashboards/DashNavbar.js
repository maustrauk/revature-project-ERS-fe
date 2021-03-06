import React, { useState } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useHistory } from 'react-router';

import EditUserModal from '../modals/EditUserModal';

const DashNavbar = (props) => {

    const {user, setIsPending, setIsApproved, setIsDenied} = props.myHooks;

    const {push} = useHistory();

    const [showUser, setShowUser] = useState(false);

    const setAll = (status) => {
        setIsPending(status);
        setIsApproved(status);
        setIsDenied(status);
    }


    const onBrandClick = (event) => {
        event.preventDefault();
        setAll(false);
        push('/dashboard');
    };

    const onAddClick = (event) => {
        event.preventDefault();
        setAll(false);
        push('/add-reimb');
    }

    const onPendingClick = (event) => {
        event.preventDefault();
        setAll(false);
        setIsPending(true);
    }

    const onDeniedClick = (event) => {
        event.preventDefault();
        setAll(false);
        setIsDenied(true);
    }

    const onApprovedClick = (event) => {
        event.preventDefault();
        setAll(false);
        setIsApproved(true);
    }

    const onAddUserClick = (event) => {
        event.preventDefault();
        setAll(false);
        push('/add-user');
    }

    const onUserNameClick = (event) => {
        event.preventDefault();
        setAll(false);
        setShowUser(true);
    }



    return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-4">
            <Container className="fs-5 font-weight-bold">
                <Navbar.Brand href="#" onClick={onBrandClick}>ERS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {user.userRoleId === 2 ?
                        <Nav.Link  href="#" onClick={onAddUserClick}>Add User</Nav.Link> : null} 
                        <Nav.Link disabled>Reimbursement  Action:</Nav.Link>
                        {user.userRoleId === 1 ? 
                            <Nav.Link  href="#" onClick={onAddClick}>Add </Nav.Link> :null}
                        <Nav.Link  href="#" onClick={onPendingClick}>Show Pending</Nav.Link>
                        <Nav.Link  href="#" onClick={onDeniedClick}>Show Denied</Nav.Link>
                        <Nav.Link  href="#" onClick={onApprovedClick}>Show Approved</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#" onClick={onUserNameClick}>{user.userName}</Nav.Link>
                        <EditUserModal showUser={showUser} setShowUser={setShowUser} myHooks={props.myHooks}/>
                        <Nav.Link href="/">Log out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>);
}

export default DashNavbar;