import React, {Component} from 'react';
import {store} from './store'
import Counter from "./components/Counter";
import ToDO from './components/ToDO'

class App extends Component {
    render() {
        return (
            <div>
                <Counter/>
                <ToDO/>
            </div>
        );
    }
}

export default App;
