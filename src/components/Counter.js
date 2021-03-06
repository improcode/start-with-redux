import React from 'react';

import {connect} from 'react-redux'
import {inc, dec} from '../state/counter'

import RaisedButton from 'material-ui/RaisedButton'
import Chip from 'material-ui/Chip';


const box = {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    background: '#f1f1f1',
    marginTop: '15px',
    width: '600px',
    padding: '15px'
}

const Counter = (props) => (
    <div style={box}>
        <Chip> {props.counterValue} </Chip>
        <RaisedButton
            label={'-'}
            secondary={true}
            onClick={props.onDecHandler}
        />
        <RaisedButton
            label={'+'}
            primary={true}
            onClick={props.onIncHandler}
        />


    </div>
)

const mapStateToProps = state => ({
    counterValue: state.counter
})

const mapDispatchToProps = dispatch => ({
    onDecHandler: () => dispatch(dec()),
    onIncHandler: () => dispatch(inc())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)