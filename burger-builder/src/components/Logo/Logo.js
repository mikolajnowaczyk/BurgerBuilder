import React from "react";

import classes from './Logo.css'
import PropTypes from 'prop-types'
import burgerLogo from '../../assets/Images/logo.png'

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="MyBurgerLogo" />
  </div>
);

logo.propTypes = {
  height: PropTypes.string
}

export default logo;
