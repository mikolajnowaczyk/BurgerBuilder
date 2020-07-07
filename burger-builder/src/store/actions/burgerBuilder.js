import * as actionTypes from './actionTypes'
import axios from "../../axios-order"

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
}

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
}

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  };
};

//thanks to redux thunk
export const initIngredients = () => {
  return dispatch => {
    axios.get('https://burger-builder-eecea.firebaseio.com/ingredients.json')
      .then(response => {
        dispatch(setIngredients(response.data))
      })
      // eslint-disable-next-line
      .catch(error => {
        dispatch(fetchIngredientsFailed())
      });
  }
};