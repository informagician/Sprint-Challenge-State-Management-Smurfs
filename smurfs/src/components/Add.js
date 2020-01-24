import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addActivity } from '../actions'

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
            [e.target.name]: value,
            id: Date.now()
        });
    }

    function handleAdd (localState) {
        props.addActivity(localState)
    }

    return(
        <div>
            <label>Name: <input type="text" name="name" onChange={handleChange}/></label><br />
            <label>Age: <input type="text" name="age" onChange={handleChange}/></label><br />
            <label>Height: <input type="text" name="height" onChange={handleChange}/></label><br />
            <button onClick={handleAdd}>Add Smurf</button>
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

export default connect(mapStateToProps,{addActivity})(Add);