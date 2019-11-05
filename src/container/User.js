import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class User extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                recent_topics: [],
                recent_replies: []
            }
        }
    }
    componentDidMount() {
        let url = `https://cnodejs.org/api/v1/user/${this.props.match.params.name}`;
        fetch(url)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data: res.data
                })
            })
    }
    render() {
        return (
            <div>
                <div class='panel'>
                    <div class='header'>
                        <ul class='breadcrumb'>
                            <li><Link to='/'>主页</Link><span class='divider'>/</span></li>
                        </ul>
                    </div>
                    <div class='inner userinfo'>
                        <div class='user_big_avatar'>
                            <img src={this.state.data.avatar_url} class="user_avatar" title={this.state.data.loginname}/>
                        </div>
                        <a class='dark'>{this.state.data.loginname}</a>

                        <div class='user_profile'>
                            <ul class='unstyled'>
                                <span class='big'>{this.state.data.score}</span> 积分
                                <li>
                                    <i class="fa fa-lg fa-fw fa-github"></i>
                                    <a class='dark' href={`https://github.com/${this.state.data.githubUsername}`} target='_blank'>
                                    @{this.state.data.githubUsername}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <p class='col_fade'>注册时间 2 年前</p>
                    </div>
                </div>
                <div class='panel'>
                    <div class='header'>
                        <span class='col_fade'>最近创建的话题</span>
                    </div>
                    {
                        this.state.data.recent_topics.map((item, index) => {
                            if (index > 4) {
                                return ''
                            } else {
                                return (
                                    <div class='cell' key={index}>
                                        <Link class="user_avatar pull-left" to={`/user/${item.author.loginname}`}>
                                            <img src={item.author.avatar_url} title={item.author.loginname}/>
                                        </Link>
                                        <span class="reply_count pull-left">
                                            <span class="count_of_replies" title="回复数"> 2 </span>
                                            <span class="count_seperator"> / </span>
                                            <span class="count_of_visits" title='点击数'> 2599 </span>
                                        </span>
                                        <a class='last_time pull-right'>
                                            <img class="user_small_avatar" src="https://avatars0.githubusercontent.com/u/11203929?v=4&amp;s=120"/>
                                            <span class="last_active_time">6 个月前</span>
                                        </a>
                                        <div class="topic_title_wrapper">
                                            <Link class='topic_title' to={`/topic/${item.id}`} title={item.title}>
                                                {item.title}
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    <div class='cell more'>
                        <a class='dark'>查看更多»</a>
                    </div>
                </div>

                <div class='panel'>
                    <div class='header'>
                        <span class='col_fade'>最近参与的话题</span>
                    </div>
                    {
                        this.state.data.recent_replies.map((item, index) => {
                            if (index > 4) {
                                return ''
                            } else {
                                return (
                                    <div class='cell' key={index}>
                                        <Link class="user_avatar pull-left" to={`/user/${item.author.loginname}`}>
                                            <img src={item.author.avatar_url} title={item.author.loginname}/>
                                        </Link>
                                        <span class="reply_count pull-left">
                                            <span class="count_of_replies" title="回复数"> 1 </span>
                                            <span class="count_seperator"> / </span>
                                            <span class="count_of_visits" title='点击数'> 571 </span>
                                        </span>
                                        <a class='last_time pull-right'>
                                            <img class="user_small_avatar" src="https://avatars0.githubusercontent.com/u/11203929?v=4&amp;s=120"/>
                                            <span class="last_active_time">1 天前</span>
                                        </a>
                                        <div class="topic_title_wrapper">
                                            <Link class='topic_title' to={`/topic/${item.id}`} title={item.title}>
                                            {item.title}
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    <div class='cell more'>
                        <a class='dark'>查看更多»</a>
                    </div>
                </div>
            </div>
        )
    }
}
