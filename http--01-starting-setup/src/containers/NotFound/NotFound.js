import React from 'react'
import ConditionalRedirect from '../../components/Navigation/ConditionalRedirect';

const NotFound = (props) => (
    <ConditionalRedirect
        condition={props.location.pathname === '/'}
        to="/posts"
    >
        <h1>Not Found</h1>
    </ConditionalRedirect>
)

export default NotFound;