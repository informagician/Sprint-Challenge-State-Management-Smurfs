import React, {useState} from 'react';
import { connect } from 'react-redux';
import { fetchActivity } from '../actions'
import Axios from 'axios';

const Add = props => {

    const [localState, setLocalState] = useState({
        id: null,
        name: null,
        age: null,
        height: null
    })

    console.log(localState)

    function handleChange(e) {
        const value = e.target.value;
        setLocalState({
            ...localState,
            [e.target.name]: value
        });
    }

    let smurf = { ...localState};


    console.log('smurf', smurf)

    function handleAdd (smurf) {
        Axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            console.log(res)
            props.fetchActivity();
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <label>Name: <input type="text" name="name" onChange={handleChange}/></label><br />
            <label>Age: <input type="text" name="age" onChange={handleChange}/></label><br />
            <label>Height: <input type="text" name="height" onChange={handleChange}/></label><br />
            <button onClick={() => handleAdd(smurf)}>Add Smurf</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        name: state.name,
        age: state.age,
        height: state.height,
        id: state.id
    }
}

export default connect(mapStateToProps,{fetchActivity})(Add);