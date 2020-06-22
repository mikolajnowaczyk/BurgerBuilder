import React from "react";

import { NavLink } from 'react-router-dom'
import classes from './NavigationItem.css'
import PropTypes from 'prop-types'

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={classes.active}>
      {props.children}
    </NavLink>
  </li>
);

navigationItem.propTypes = {
  children: PropTypes.any,
  active: PropTypes.bool,
  link: PropTypes.any,
  exact: PropTypes.bool
}

export default navigationItem;
