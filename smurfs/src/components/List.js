import React from 'react';
import { connect } from 'react-redux';
import { fetchActivity } from '../actions';
import View from './View';

const List = props => {

    let data = null;
    if (props.smurfs.length > 0) {
        data = props.smurfs;
        console.log(data);
    }

    return(
        <div>
            <button onClick={props.fetchActivity}>Get Smurfs</button>
        {data ? (
            data.map(item => 
                <View data={item} key={item.id} />
            )
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

export default connect(mapStateToProps,{fetchActivity})(List);