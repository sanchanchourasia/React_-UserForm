import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';


const UsersList = (props) => {
    return (
        <>
            <Card className={classes.users}>
                
                <ul>
                    <b>User's List ..</b>
                    {props.users.map((user) => (<li key='1'> {user.name} ( {user.age} Years Old. ) </li>))}
                </ul>
            </Card>
        </>
    )
}

export default UsersList;