import React from 'react'
import { Redirect } from 'react-router-dom'

const ConditionalRedirect = (props) => (
    <div>
        {props.condition ? <Redirect to={props.to} /> : props.children}
    </div>
)

export default ConditionalRedirect;