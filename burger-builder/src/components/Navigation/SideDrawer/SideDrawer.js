import React from 'react'

import PropTypes from 'prop-types'
import classes from './SideDrawer.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Auxiliary/Auxi'


const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
}

sideDrawer.propTypes = {
  children: PropTypes.object,
  show: PropTypes.bool,
  open: PropTypes.bool,
  modalClosed: PropTypes.func,
  closed: PropTypes.func,
  isAuth: PropTypes.bool
}

export default sideDrawer