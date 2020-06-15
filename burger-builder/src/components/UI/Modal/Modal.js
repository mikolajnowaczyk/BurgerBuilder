import React, { Component } from 'react'

import classes from './Modal.css'
import PropTypes from 'prop-types'
import Aux from '../../../hoc/Auxiliary/Auxi'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
  // eslint-disable-next-line
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children;
  }

  // componentWillUpdate() {
  //   console.log('[Modal] WillUpdate');
  // }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </Aux>
    )
  }
}

Modal.propTypes = {
  children: PropTypes.object,
  show: PropTypes.bool,
  modalClosed: PropTypes.func
}

export default Modal