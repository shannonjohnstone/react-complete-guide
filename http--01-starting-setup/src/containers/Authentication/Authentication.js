import React from 'react'
import ConditionalRedirect from '../../components/Navigation/ConditionalRedirect';

const AuthenticationContainer = (props) => {
    return (
        <ConditionalRedirect
            condition={props.authenticated === false}
            to={props.to || '/login'}
        >
            {props.children}
        </ConditionalRedirect>
    )
}

export default AuthenticationContainer;