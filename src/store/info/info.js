import * as actionTypes from './infoActionTypes';
import { updateObject } from '../utility';

const initialState = {
  spells_data: null,
  characters_data: null,
  houses_data: null,
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.SET_SPELLS:
      return updateObject(state, {spells_data: action.val});
    case actionTypes.SET_CHARACTERS:
      return updateObject(state, {characters_data: action.val});
    case actionTypes.SET_HOUSES:
      return updateObject(state, {houses_data: action.val});
    default:
      return state;
  }
};

export default reducer;