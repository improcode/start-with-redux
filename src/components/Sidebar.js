import React from 'react'
import { connect } from 'react-redux'
import {close} from '../state/sidebar'

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


const Sidebar = (props) => (
    <div>
        <Drawer
            docked={false}
            width={200}
            open={props.isOpen}
            onRequestChange={props.close}
        >

        </Drawer>
    </div>
)

const mapStateToProps = state => ({
    isOpen: state.sidebar.isSidebarOpen
})

const mapDispatchToProps = dispatch => ({
    close: ()=> dispatch(close())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)