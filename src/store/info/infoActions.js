import * as actionTypes from './infoActionTypes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../../interceptor';
import APP_CONSTANTS from '../../constants';

const toastOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

// Set characters
export const set_spells = ( value ) => {
  return {
    type: actionTypes.SET_SPELLS,
    val: value
  };
};

// Set houses
export const set_characters = ( value ) => {
  return {
    type: actionTypes.SET_CHARACTERS,
    val: value
  };
};

// Set spells
export const set_houses = ( value ) => {
  return {
    type: actionTypes.SET_HOUSES,
    val: value
  };
};

// Fetch all characters
export const get_all_characters_action = () => {
  return (dispatch) => {
    axiosInstance.get('characters?key=' + APP_CONSTANTS.APP_KEY)
      .then((response) => {
        dispatch(set_characters(response.data));
        toast.success("Character data fetched successfully!", toastOptions);
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Some error occured while fetching character data!", toastOptions);
        }
      })
  }
}

// Fetch all houses
export const get_all_houses_action = () => {
  return (dispatch) => {
    axiosInstance.get('houses?key=' + APP_CONSTANTS.APP_KEY)
      .then((response) => {
        dispatch(set_houses(response.data));
        toast.success("Harry Potter Houses data fetched successfully!", toastOptions);
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Some error occured while fetching houses data!", toastOptions);
        }
      })
  }
}

// Fetch all spells
export const get_all_spells_action = () => {
  return (dispatch) => {
    axiosInstance.get('spells?key=' + APP_CONSTANTS.APP_KEY)
      .then((response) => {
        dispatch(set_spells(response.data));
        toast.success("Harry Potter Spells data fetched successfully!", toastOptions);
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Some error occured while fetching spells data!", toastOptions);
        }
      })
  }
}