import React from 'react'
import ConditionalRedirect from '../../components/Navigation/ConditionalRedirect';

/**
 * Not Found
 * 
 * This component is Not Found route
 * Logic of this component is to check if the route is "/" (root)
 * if this is true, redirect to "/posts", otherwise render Not Found
 * 
 * @param {object} props 
 */

const NotFound = (props) => (
    <ConditionalRedirect
        condition={props.location.pathname === '/'}
        to="/posts"
    >
        <h1>Not Found</h1>
    </ConditionalRedirect>
)

export default NotFound;