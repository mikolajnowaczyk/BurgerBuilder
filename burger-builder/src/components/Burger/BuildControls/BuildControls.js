import React from 'react'

import classes from "./BuildControls.css"
import BuildControl from "./BuildControl/BuildControl";
import PropTypes from 'prop-types'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];


const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {
        controls.map(ctrl =>
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]} />)}

      <button
        className={classes.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.ordered}>ORDER NOW
        
        </button>
    </div >
  )
}

buildControls.propTypes = {
  ingredientAdded: PropTypes.func,
  ingredientRemoved: PropTypes.func,
  disabled: PropTypes.object,
  price: PropTypes.number,
  purchaseable: PropTypes.bool,
  ordered: PropTypes.func
}

export default buildControls