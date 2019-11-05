import React, { Component } from 'react'
import {Route, Redirect, Switch, NavLink} from 'react-router-dom';
import showlist from './showlist'

export default class Home extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/home' render={() => <Redirect from='/home' to='/home/all/1'/>}/>
                <Route exact path='/home/all' render={() => <Redirect from='/home/all' to='/home/all/1'/>}/>
                <Route exact path='/home/good' render={() => <Redirect from='/home/good' to='/home/good/1'/>}/>
                <Route exact path='/home/share' render={() => <Redirect from='/home/share' to='/home/share/1'/>}/>
                <Route exact path='/home/ask' render={() => <Redirect from='/home/ask' to='/home/ask/1'/>}/>
                <Route exact path='/home/job' render={() => <Redirect from='/home/job' to='/home/job/1'/>}/>
                <Route exact path='/home/dev' render={() => <Redirect from='/home/dev' to='/home/dev/1'/>}/>

                <Route path='/home/all/:page' component={showlist('all', 49)}/>
                <Route path='/home/good/:page' component={showlist('good', 18)}/>
                <Route path='/home/share/:page' component={showlist('share', 24)}/>
                <Route path='/home/ask/:page' component={showlist('ask', 25)}/>
                <Route path='/home/job/:page' component={showlist('job', 9)}/>
                <Route path='/home/dev/:page' component={showlist('dev', 30)}/>

                
            </Switch>
        )
    }
}
