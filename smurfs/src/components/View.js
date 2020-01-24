import React from 'react';
import { connect } from 'react-redux';

const View = props => {

    console.log(props.data.name)
    return(
        <div>
        {props.data ? (
            <div key={props.data.id}>
                <h3>Name: {props.data.name}</h3>
                <p>Age: {props.data.age}</p>
                <p>Height: {props.data.height}</p>
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

export default connect(mapStateToProps,{})(View);