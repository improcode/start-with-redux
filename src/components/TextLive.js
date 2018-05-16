import React from 'react'
import {connect} from 'react-redux'

import TextField from 'material-ui/TextField'

import {write} from '../state/textlive'



const TextLive = (props) => (

    <div>

        <h2>...</h2>

        <TextField
            name={'writing'}
            value={props.text}
            onChange={props.writeText}
        />

    </div>

)


const mapStateToProps = state => ({
text: state.text
})

const mapDispatchToProps = dispatch => ({
    writeText: (e, txt) => dispatch(write(txt)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextLive)