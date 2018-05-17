import React, {Component} from 'react';
import {store} from './store'
import Counter from "./components/Counter";
import ToDO from './components/ToDO'
import TextLive from './components/TextLive'
import UserList from './components/UserList'
import AsyncReduxCounter from './components/AsyncReduxCounter'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AppBar from './components/AppBar'
import Sidebar from './components/Sidebar'

class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <Sidebar/>
                <AppBar/>
                <Route exact path={'/'} component={AsyncReduxCounter}/>
                <Route path={'/counter'} component={Counter}/>
                <Route path={'/todo'} component={ToDO}/>
                <Route path={'/text'} component={TextLive}/>
                <Route path={'/userlist'} component={UserList}/>
                <Route path={'/all'} render={()=>(<div><AsyncReduxCounter/><Counter/><ToDO/><UserList/></div>)}/>
            </div>
            </Router>

        );
    }
}

export default App;
