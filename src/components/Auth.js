import React from 'react'
import {connect} from 'react-redux'
import LoginByGoogle from "../Auth/LoginByGoogle";
import {loginByGoogle} from "../state/auth";

const Auth = (props) => (
    <div>
        {
            props.isUserLoggedIn ?
                props.children
                :
                <LoginByGoogle
                    onLogInHandler={props.loginByGoogle}
                />
        }
    </div>
)

const mapStateToProps = state => ({
    isUserLoggedIn: state.auth.isUserLoggedIn
})

const mapDispatchToProps = dispatch => ({
    loginByGoogle: () => dispatch(loginByGoogle())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)