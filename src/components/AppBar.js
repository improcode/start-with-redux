import React from 'react'
import {connect} from 'react-redux'
import MuiAppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import {logOut} from '../state/auth'
import {open as sidebarOpen} from '../state/sidebar'

const AppBar = (props) => (
    <div>
        <MuiAppBar
            iconElementRight={<IconButton><NavigationClose/></IconButton>}
            onRightIconButtonClick={props.loggingOut}
            onLeftIconButtonClick={props.sidebarOpen}
        />
    </div>
)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    loggingOut: () => dispatch(logOut()),
    sidebarOpen: () => dispatch(sidebarOpen())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppBar)