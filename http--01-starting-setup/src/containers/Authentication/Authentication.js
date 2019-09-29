import React from 'react'
import ConditionalRedirect from '../../components/Navigation/ConditionalRedirect';

const AuthenticationContainer = (props) => {
    const auth = true;
    return (
        <ConditionalRedirect
            condition={!auth}
            to="/login"
        >
            {props.children}
        </ConditionalRedirect>
    )
}

export default AuthenticationContainer;