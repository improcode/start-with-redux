import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../state/randomUsers'

import RaisedButton from 'material-ui/RaisedButton';

const UserList = (props) => (



    <div>
        <button
            onClick={props.onReloadClick}
        >
            {props.usersList.length === 0 ? 'Load' : 'Reload'}
        </button>
        {
            props.isDataLoading ?
                'Loading...'
                :
                props.usersList.map(
                    user => <div>
                        {user.name.first}
                    </div>
                )
        }
    </div>
)

const mapStateToProps = state => ({
        isDataLoading: state.randomUsers.isDataLoading,
        usersList: state.randomUsers.usersList
    }
)

const mapDispatchToProps = dispatch => ({

    onReloadClick: () => dispatch(fetchUsers())
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(UserList)