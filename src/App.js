import React, {Component} from 'react';
import {store} from './store'
import Counter from "./components/Counter";
import ToDO from './components/ToDO'
import TextLive from './components/TextLive'

class App extends Component {
    render() {
        return (
            <div>
                <Counter/>
                <ToDO/>
                <TextLive/>
            </div>
        );
    }
}

export default App;
