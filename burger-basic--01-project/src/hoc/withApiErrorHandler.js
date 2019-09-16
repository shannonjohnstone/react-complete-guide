import React from 'react'
import Modal from '../components/UI/Modal/Modal';

/**
 * withApiErrorHandler
 * A HOC that will handle components that could have API error
 * @param {function} WrappedComponent 
 * @param {object} axiosInstance 
 */
const withApiErrorHandler = (WrappedComponent, axiosInstance) => {
    return class extends React.Component {
        state = {
            error: null
        }
        
        constructor(props) {
            super(props);
            this.axiosInstanceRequest = axiosInstance.interceptors.request.use(request => {
                this.setState({ error: null })
                return request
            })

            this.axiosInstanceResponse = axiosInstance.interceptors.response.use(response => response, error => {
                console.log(error, 'error')
                this.setState({ error })
            })
        }
        
        componentWillUnmount() {
            axiosInstance.interceptors.request.eject(this.axiosInstanceRequest)
            axiosInstance.interceptors.response.eject(this.axiosInstanceResponse)
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null })
        }

        render() {
            return (
                <>
                    <Modal
                        show={this.state.error}
                        close={this.errorConfirmedHandler}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>
            )
        }
    }
}

export default withApiErrorHandler;