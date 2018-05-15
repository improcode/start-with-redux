import React from 'react'
import {connect} from 'react-redux'

import {del} from '../state/todos'

const box = {
    display: 'flex',
    justifyContent: 'center',
    background: 'yellow',
    marginTop: '15px',
}

const ToDo = (props) => (
    <div style={box}>
        {
            props.tasks.map(task => (
                <li
                    onClick={props.deleteTask}
                >{task.text}</li>
            ))
        }
    </div>
)

const mapStateToProps = state => ({
    tasks: state.todos
})

const mapDispatchToProps = dispatch => ({
    deleteTask: () => dispatch(del())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)