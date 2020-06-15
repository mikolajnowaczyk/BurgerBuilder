import React from 'react'

import classes from './Modal.css'
import PropTypes from 'prop-types'
import Aux from '../../../hoc/Auxiliary/Aux'
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>
      {props.children}
    </div>
  </Aux>
)

modal.propTypes = {
  children: PropTypes.object,
  show: PropTypes.bool,
  modalClosed: PropTypes.func
}

export default modal