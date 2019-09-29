import React from 'react'

const withHandleApiError = (WrappedComponent, instance, msg) => {
    return class extends React.Component {
        state = {
            error: false
        }

        componentDidMount() {
            this.apiInstanceRequest = instance.interceptors.request.use(request => {
                this.setState({ error: null })
                return request;
            })

            this.apiInstanceResponse = instance.interceptors.response.use(response => response, error => {
                this.setState({ error })
            })
        }

        componentWillUnmount() {
            instance.interceptors.request.eject(this.apiInstanceRequest)
            instance.interceptors.response.eject(this.apiInstanceResponse)
        }

        render() {
            if (this.state.error) return <p>${msg}</p> ? msg : <p>Something went wrong!</p>

            return <WrappedComponent {...this.props} />;
        }
    }
}

export default withHandleApiError;