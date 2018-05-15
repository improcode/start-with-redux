import React from 'react'
import {connect} from 'react-redux'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import {add, del, newTaskTextChanged} from '../state/todos'

const box = {
    // display: 'flex',
    // justifyContent: 'center',
    background: '#f1f1f1',
    marginTop: '30px',
    margin: 'auto',
    width: '600px',
    padding: '15px'
}

const ToDo = (props) => (
    <div style={box}>
        <TextField
            fullWidth={true}
            name={'new-task'}
            value={props.newTaskText}
            onChange={props.onNewTaskTextChanged}
        />

        <RaisedButton
            label={'Add task'}
            onClick={props.onAddTaskClick}
        />

        <ul>
            {
                props.tasks.map((task, i) => (
                    <li
                        onClick={() => props.deleteTask(i)}
                    >
                        {task.text}
                    </li>
                ))
            }
        </ul>
    </div>
)

const mapStateToProps = state => ({
    tasks: state.todos.tasks,
    newTaskText: state.todos.newTaskText
})

const mapDispatchToProps = dispatch => ({
    deleteTask: (index) => dispatch(del(index)),
    onNewTaskTextChanged: (event, value) => dispatch(newTaskTextChanged(value)),
    onAddTaskClick: () => dispatch(add())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)