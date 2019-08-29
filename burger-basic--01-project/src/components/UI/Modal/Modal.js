import React from 'react'
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import Backdrop from '../../../components/UI/Backdrop/Backdrop';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.el = document.createElement('div')
    }
    componentDidMount() {
        modalRoot.appendChild(this.el)
    }
    componentWillUnmount() {
        modalRoot.removeChild(this.el)
    }
    render() {
        return ReactDOM.createPortal(
            <>
                <Backdrop show={this.props.show} handleClick={this.props.close} />>
                Î<div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </>,
            this.el
        )
    }
}

export default Modal;