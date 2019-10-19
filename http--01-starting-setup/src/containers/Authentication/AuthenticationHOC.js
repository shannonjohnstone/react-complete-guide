import React from 'react'
import ConditionalRedirect from '../../components/Navigation/ConditionalRedirect';

/**
 * AuthenticationHoc
 * 
 * Authentication HOC that will check if the application is in a authentication state or not
 * Logic: if authenticated all ok render content
 * if not redirect the flow, default redirection is to "/login"
 * 
 * @param {function} WrappedComponent 
 * @param {object} props 
 */
    
const AuthenticationHoc = (WrappedComponent, props) => {
    return class extends React.Component {
        render() {
            return (
                <ConditionalRedirect
                    condition={props.authenticated === false}
                    to={props.to || '/login'}
                >
                    <WrappedComponent {...props} />
                </ConditionalRedirect>

            )
        }
    }
}

export default AuthenticationHoc;