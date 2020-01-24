import React from 'react';
import { connect } from 'react-redux';

const View = props => {

    let data = null;
    if (props.smurfs.length > 0) {
        data = props.smurfs;
    }
    
    return(
        data ? (
            <div>Success</div>
        ) : (
            <div>None</div>
        )
    );
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps,{})(View);