import { API_BASE_URL } from '../config'
export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';

const fetchCheesesRequest = () => {
    return {
        type: FETCH_CHEESES_REQUEST
    }
}

const fetchCheesesSuccess = (cheeses) => {
    return {
        type: FETCH_CHEESES_SUCCESS,
        cheeses
    }
}

const fetchCheesesError = (error) => {
    return {
        type: FETCH_CHEESES_ERROR,
        error
    }
}

export const fetchCheeses = () => {
    console.log('inside action')
    return (dispatch) => {
        dispatch(fetchCheesesRequest());

        fetch(`${API_BASE_URL}/cheeses`)
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json();
            })
            .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
            .catch(err => dispatch(fetchCheesesError(err)))
    }
}


// const aFunc = (variable) => dispatch => {
// }