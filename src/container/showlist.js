import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';

class Showlist extends Component{
    disabled = {
        'pointer-events': 'none',
        'cursor': 'default',
        'color': '#80BD01'
    }
    leftSymbol = () => {
        if (this.props.page == 1) {
            return <li style={this.disabled}><a>«</a></li>
        } else {
            return <li><NavLink to={`/home/${this.props.tab}/1`}>«</NavLink></li>
        }
    }
    rightSymbol = () => {
        if (this.props.page == this.props.max) {
            return <li style={this.disabled}><a>»</a></li>
        } else {
            return <li><NavLink to={`/home/${this.props.tab}/${this.props.max}`}>»</NavLink></li>
        }
    }
    leftPoint = () => {
        if (this.props.page > 3) {
            return <li style={this.disabled}><a>...</a></li>
        } else {
            return ''
        }
    }
    rightPoint = () => {
        if (this.props.page < this.props.max - 2) {
            return <li style={this.disabled}><a>...</a></li>
        } else {
            return ''
        }
    }
    render() {
        return (
            <div className="panel">
                <div className="header">
                        <NavLink to="/home/all" className="topic-tab" activeClassName="current-tab">全部</NavLink>
                        <NavLink to="/home/good" className="topic-tab" activeClassName="current-tab">精华</NavLink>
                        <NavLink to="/home/share" className="topic-tab" activeClassName="current-tab">分享</NavLink>
                        <NavLink to="/home/ask" className="topic-tab" activeClassName="current-tab">问答</NavLink>
                        <NavLink to="/home/job" className="topic-tab" activeClassName="current-tab">招聘</NavLink>
                        <NavLink to="/home/dev" className="topic-tab" activeClassName="current-tab">客户端测试</NavLink>
                </div>
                <div className="inner no-padding">
                    <div id="topic_list">
                        {
                            this.props.data.map((item => {
                                let spanItem = '';
                                if (item.top == true) {
                                    spanItem = <span className='put_top'>置顶</span>
                                } else if (item.good == true) {
                                    spanItem = <span className='put_good'>精华</span>
                                } else if (item.tab == 'share') {
                                    spanItem = <span className='topiclist-tab'>分享</span>
                                } else {
                                    spanItem = <span className='topiclist-tab'>问答</span>
                                }
                                return (
                                    <div className='cell' key={item.id}>
                                        <Link className="user_avatar pull-left" to={`/user/${item.author.loginname}`}>
                                            <img src={item.author.avatar_url} title={item.author.loginname} />
                                        </Link>

                                        <span className="reply_count pull-left">
                                            <span className="count_of_replies" title="回复数">{item.reply_count}</span>
                                            <span className="count_seperator"> / </span>
                                            <span className="count_of_visits" title='点击数'>{item.visit_count}</span>
                                        </span>
                                        <a className='last_time pull-right' href="#">
                                            <img className="user_small_avatar" src="https://avatars2.githubusercontent.com/u/20636097?v=4&amp;s=120" />
                                            <span className="last_active_time">1 小时前</span>
                                        </a>

                                        <div className="topic_title_wrapper">
                                            {spanItem}
                                            <Link className='topic_title' to={`/topic/${item.id}`} title={item.title} style={{marginLeft: '5px'}}>
                                                {item.title}
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }))
                        }
                    </div>
                    <div class='pagination'>
                        <ul>
                            {this.leftSymbol()}
                            {this.leftPoint()}
                            <li><NavLink to={`/home/${this.props.tab}/${this.props.listNum.nOne}`} activeStyle={this.disabled}>{this.props.listNum.nOne}</NavLink></li>
                            <li><NavLink to={`/home/${this.props.tab}/${this.props.listNum.nTwo}`} activeStyle={this.disabled}>{this.props.listNum.nTwo}</NavLink></li>
                            <li><NavLink to={`/home/${this.props.tab}/${this.props.listNum.nThree}`} activeStyle={this.disabled}>{this.props.listNum.nThree}</NavLink></li>
                            <li><NavLink to={`/home/${this.props.tab}/${this.props.listNum.nFour}`} activeStyle={this.disabled}>{this.props.listNum.nFour}</NavLink></li>
                            <li><NavLink to={`/home/${this.props.tab}/${this.props.listNum.nFive}`} activeStyle={this.disabled}>{this.props.listNum.nFive}</NavLink></li>
                            {this.rightPoint()}
                            {this.rightSymbol()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default function showlist(tab, max){
    class Hoc extends Component{
        constructor() {
            super();
            this.state = {
                data: []
            }
        }
        componentDidMount() {
            let url = `https://cnodejs.org/api/v1/topics?page=${this.props.match.params.page}&tab=${tab}`;
            fetch(url)
                .then((res)=>res.json())
                .then((res)=>{
                    // console.log(res);
                    this.setState({
                        data: res.data
                    })
                })
        }
        render() {
            let listNum = {
                nOne: 1,
                nTwo: 2,
                nThree: 3,
                nFour: 4,
                nFive: 5
            }
            if (parseInt(this.props.match.params.page) < 4) {
                listNum = {
                    nOne: 1,
                    nTwo: 2,
                    nThree: 3,
                    nFour: 4,
                    nFive: 5
                }
            } else if (parseInt(this.props.match.params.page) > max - 3) {
                listNum = {
                    nOne: max - 4,
                    nTwo: max - 3,
                    nThree: max - 2,
                    nFour: max - 1,
                    nFive: max  
                }
            } else {
                listNum = {
                    nOne: parseInt(this.props.match.params.page) - 2,
                    nTwo: parseInt(this.props.match.params.page) - 1,
                    nThree: parseInt(this.props.match.params.page),
                    nFour: parseInt(this.props.match.params.page) + 1,
                    nFive: parseInt(this.props.match.params.page) + 2
                }
            }
            return (
                <Showlist {...this.props} data={this.state.data} page={this.props.match.params.page} tab={tab} max={max} listNum={listNum}/>
            )
        }
    }
    return Hoc;
}
