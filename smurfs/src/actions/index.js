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

export const addActivity = (localState) => {
    console.log('add event api', localState)
    axios
    .post('http://localhost:3333/smurfs', localState)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}