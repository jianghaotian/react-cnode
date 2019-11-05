import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import store from '../store';

export default class Login extends Component {
    login = () => {
        let action = {
            type: 'login'
        }
        store.dispatch(action);
    }
    render() {
        return (
            <div class='panel'>
                <div class='header'>
                    <ul class='breadcrumb'>
                        <li><Link to='/'>主页</Link><span class='divider'>/</span></li>
                        <li class='active'>登录</li>
                    </ul>
                </div>
                <div class='inner'>
                    <form id='signin_form' class='form-horizontal'>
                        <div class='control-group'>
                            <label class='control-label' for='name'>用户名</label>
                
                            <div class='controls'>
                                <input class='input-xlarge' id='name' size='30' type='text'/>
                            </div>
                        </div>
                        <div class='control-group'>
                            <label class='control-label' for='pass'>密码</label>
                
                            <div class='controls'>
                                <input class='input-xlarge' id='pass' size='30' type='password'/>
                            </div>
                        </div>
                        <div class='form-actions'>
                            <Link class='span-primary' to='/home' style={{color: '#fff',textDecoration: 'none'}} onClick={this.login}>登录</Link>
                            <Link id="forgot_password" to='#'>忘记密码了?</Link>
                        </div>
                    </form>
                </div>
          </div>
        )
    }
}
