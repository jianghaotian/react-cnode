import React, { Component } from 'react'
import store from '../store';

export default class Nologin extends Component {
    componentDidMount() {
        let action = {
            type: 'nologin'
        }
        store.dispatch(action);
    }
    render() {
        this.props.history.push("/");
        return (
            <div>退出成功!</div>
        )
    }
}
