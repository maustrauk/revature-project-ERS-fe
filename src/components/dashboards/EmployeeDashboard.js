import React, { useEffect} from 'react';
import axios from "axios";

import { URL } from '../../utils/backend';

import Loading from '../modals/Loading';
import Reimbursements from './Reimbursements';


const EmployeeDashboard = (props) => {

    const {user, isLoading, setIsLoading, setReimbList} = props.myHooks;

    useEffect(() => {
        setIsLoading(true);
        axios
        .post(`${URL}by-user-id.reimb-list`, user)
        .then((res) => {
            const data = res.data;
            console.log(data);
            setReimbList(data);
            setIsLoading(false);
        },)
        .catch((er) => {
            console.log(er);
            setIsLoading(false);
        });
       
    }, [user]);


    return (
    <div>
        <Loading isLoading={isLoading}/>
        <Reimbursements myHooks={props.myHooks}/>
    </div>);
}

export default EmployeeDashboard;