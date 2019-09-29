import React from 'react'

const withHandleApiError = (WrappedComponent, instance, msg) => {
    return class extends React.Component {
        state = {
            error: false
        }

        componentDidMount() {
            this.apiInstanceRequest = instance.interceptors.response.use(req => {
                this.setState({ error: null })
            })

            this.apiInstanceResponse = instance.interceptors.request.use(res => res, error => {
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