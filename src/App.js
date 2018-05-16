import React, {Component} from 'react';
import {store} from './store'
import Counter from "./components/Counter";
import ToDO from './components/ToDO'
import TextLive from './components/TextLive'
import UserList from './components/UserList'
import AsyncReduxCounter from './components/AsyncReduxCounter'

class App extends Component {
    render() {
        return (
            <div>
                <Counter/>
                <ToDO/>
                <TextLive/>
                <hr/>
                <UserList/>
                <hr/>
                <AsyncReduxCounter/>
            </div>
        );
    }
}

export default App;
