import axios from 'axios';

export const START = 'START';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const fetchActivity = () => dispatch => {
    dispatch({ type: START });
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        dispatch({type: SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({ type: FAILURE, payload: err})
    })
}

//