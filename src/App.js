import React, { Component } from 'react'
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './container/Home';
import Login from './container/Login';
import Nologin from './container/Nologin';
import Topic from './container/Topic';
import User from './container/User';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Navbar/>
                <div id='main'>
                    <Sidebar/>
                    <div id="content">
                        <Switch>
                            <Route exact path='/' render={() => <Redirect from='/' to='/home'/>}/>

                            <Route path='/home' component={Home}/>

                            <Route path='/getstart'><h1>新手入门</h1></Route>
                            <Route path='/api'><h1>API</h1></Route>
                            <Route path='/about'><h1>关于</h1></Route>
                            <Route path='/signup'><h1>注册</h1></Route>
                            <Route path='/login' component={Login}/>
                            <Route path='/message'><h1>未读消息</h1></Route>
                            <Route path='/setting'><h1>设置</h1></Route>

                            <Route path='/nologin' component={Nologin}/>
                            
                            <Route path='/topic/:id' component={Topic}/>
                            <Route path='/user/:name' component={User}/>
                            

                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}