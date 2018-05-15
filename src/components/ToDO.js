import React from 'react'
import {connect} from 'react-redux'

import {add, del} from '../state/todos'

const box = {
    display: 'flex',
    justifyContent: 'center',
    background: 'yellow',
    marginTop: '15px',
}

const ToDo = (props) => (
    <div style={box}>
        {
            props.tasks.map((task, i) => (
                <li
                    onClick={() => props.deleteTask(i)}
                >{task.text}</li>
            ))
        }
    </div>
)

const mapStateToProps = state => ({
    tasks: state.todos
})

const mapDispatchToProps = dispatch => ({
    deleteTask: (index) => dispatch(del(index))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)