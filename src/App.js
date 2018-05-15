import React, {Component} from 'react';
import {store} from './store'
import Counter from "./components/Counter";

class App extends Component {
    render() {
        return (
            <div>
                <Counter/>
            </div>
        );
    }
}

export default App;
