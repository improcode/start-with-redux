import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'



const LoginByGoogle = (props) => (
    <div>
        <RaisedButton
            label={'Log in by Google'}
            secondary={true}
            onClick={props.onLogInHandler}

        />
    </div>
)


export default LoginByGoogle