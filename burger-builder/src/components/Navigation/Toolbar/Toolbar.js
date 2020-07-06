import React from 'react'

import PropTypes from 'prop-types'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'


const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo />

    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems isAuthenticated={props.isAuth} />
    </nav>
  </header>
)

toolbar.propTypes = {
  children: PropTypes.object,
  show: PropTypes.bool,
  modalClosed: PropTypes.func,
  drawerToggleClicked: PropTypes.func,
  isAuth: PropTypes.bool
}

export default toolbar