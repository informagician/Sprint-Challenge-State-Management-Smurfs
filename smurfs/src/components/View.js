import React from 'react';
import { connect } from 'react-redux';
import { fetchActivity } from '../actions'
import axios from 'axios'

const View = props => {

    const handleDelete = id => {
        axios
        .delete('http://localhost:3333/smurfs/' + id )
        .then(res => {
            console.log(res)
            props.fetchActivity();
        })
        .catch(err => console.log(err))
    }
    console.log(props.data.name)
    const id = props.data.id
    return(
        <div>
        {props.data ? (
            <div key={props.data.id}>
                <h3>Name: {props.data.name}</h3>
                <p>Age: {props.data.age}</p>
                <p>Height: {props.data.height}</p>
                <button onClick={() => handleDelete(id)}>delete</button>
            </div>
        ) : (
            <div>None</div>
        )}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps,{fetchActivity})(View);