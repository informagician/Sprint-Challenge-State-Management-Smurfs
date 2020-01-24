import React from 'react';
import { connect } from 'react-redux';

const Add = props => {

    return(null);
}

const mapStateToProps = state => {
    return {
        name: state.name,
        age: state.age,
        height: state.height,
        id: state.id
    }
}

export default connect(mapStateToProps,{})(Add);