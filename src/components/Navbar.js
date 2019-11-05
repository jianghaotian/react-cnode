import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import store from '../store';

export default class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            navItem: store.getState().navItem
        }
    }
    componentDidMount() {
        this.subid = store.subscribe(() => {
            this.setState({
                navItem: store.getState().navItem
            })
        })
    }
    componentWillUnmount(){
        this.subid();
    }

    render() {
        return (
            <div className='navbar'>
                <div className='navbar-inner'>
                    <div className='container'>
                        <Link className='brand' to='/'>
                            <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" />
                        </Link>
                        <form id='search_form' className='navbar-search' action="/search">
                            <input type='text' id='q' name='q' className='search-query span3' value=''/>
                        </form>
                        <ul className='nav pull-right'>
                            {
                                this.state.navItem.map((item, index) => (
                                    <li key={index}><Link to={item.url}>{item.name}</Link></li>
                                ))
                            }
                        </ul>
                        <a className="btn btn-navbar" id="responsive-sidebar-trigger">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
