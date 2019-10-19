import React from 'react'

const asyncComponent = (importedComponent) => {
    return class extends React.Component {
        state = {
            component: null
        }

        componentDidMount() {
            importedComponent().then(cmp => this.setState({ component: cmp.default })).catch(console.log)
        }

        render() {
            const Component = this.state.component ? this.state.component : null;

            return (
                Component ? <Component {...this.props} /> : null
            )
        }
    }
}

export default asyncComponent;