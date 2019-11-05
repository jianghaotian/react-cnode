import React from 'react';

export default function Sidebar(){
    return (
        <div id='sidebar'>
            <div className='panel'>
                <div className='inner'>
                    <p>CNode：Node.js专业中文社区</p>
                    <div>
                        您可以<a href='/signin'> 登录 </a>或<a href='/signup'> 注册 </a>, 也可以
                        <a href="/auth/github">
                            <span className="span-info">
                                通过 GitHub 登录
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <div className='panel'>
                <div className='inner ads'>
                    <a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank" className="banner sponsor_outlink" data-label="alinode">
                        <img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" />
                    </a>
                    <div className="sep10"></div>
                    <a href="https://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&utm_medium=content_pic_pc_540_130&utm_campaign=huodong&utm_content=gift&ytag=cnodejs" target="_blank" className="banner sponsor_outlink" data-label="ucloud-banner">
                        <img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" />
                    </a>
                    <div className="sep10"></div>
                    <a href="https://www.qiniu.com/events/cdn-package?code=cnode" target="_blank" className="banner sponsor_outlink" data-label="qiniu-sidebar">
                        <img src="//static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-" />
                    </a>
                </div>
            </div>

            <div className='panel'>
                <div className='header'>
                    <span className='col_fade'>无人回复的话题</span>
                </div>
                <div className='inner'>
                    <ul className="unstyled">
                        <li>
                            <div><a className='dark topic_title' href="/topic/5db706e2865a9844a301e5a0" title="nodejs的dns解析源码分析">nodejs的dns解析源码分析</a></div>
                        </li>
                        <li>
                            <div><a className='dark topic_title' href="/topic/5db705e9865a9844a301e593" title="libuv之线程池以及线程间通信源码解析">libuv之线程池以及线程间通信源码解析</a></div>
                        </li>
                        <li>
                            <div><a className='dark topic_title' href="/topic/5db7053cece3813ad9ba4d25" title="nodejs的http.createServer过程解析">nodejs的http.createServer过程解析</a></div>
                        </li>
                        <li>
                            <div><a className='dark topic_title' href="/topic/5db6b07f865a9844a301e451" title="Mysql模块连接异常.">Mysql模块连接异常.</a></div>
                        </li>
                        <li>
                            <div><a className='dark topic_title' href="/topic/5db47075ece3813ad9ba45df" title="2019  TypesScript + Nodejs + Express + Mongoose 实现 RESTful API 实战教程 最新教程 持续更新中">2019  TypesScript + Nodejs + Express + Mongoose 实现 RESTful API 实战教程 最新教程 持续更新中</a></div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='panel'>
                <div className='header'>
                    <span className='col_fade'>积分榜</span>&nbsp;
                    <a className='dark' href='/users/top100'>TOP 100 &gt;&gt;</a>
                </div>
                <div className='inner'>
                    <ol>
                        <li>
                            <span className='top_score'>21745</span>
                            <span className="user_name"><a href="/user/i5ting">i5ting</a></span>
                        </li>
                        <li>
                            <span className='top_score'>15670</span>
                            <span className="user_name"><a href="/user/alsotang">alsotang</a></span>
                        </li>
                        <li>
                            <span className='top_score'>9350</span>
                            <span className="user_name"><a href="/user/leapon">leapon</a></span>
                        </li>
                        <li>
                            <span className='top_score'>9085</span>
                            <span className="user_name"><a href="/user/atian25">atian25</a></span>
                        </li>
                        <li>
                            <span className='top_score'>8780</span>
                            <span className="user_name"><a href="/user/jiyinyiyong">jiyinyiyong</a></span>
                        </li>
                        <li>
                            <span className='top_score'>7325</span>
                            <span className="user_name"><a href="/user/yakczh">yakczh</a></span>
                        </li>
                        <li>
                            <span className='top_score'>6815</span>
                            <span className="user_name"><a href="/user/im-here">im-here</a></span>
                        </li>
                        <li>
                            <span className='top_score'>6095</span>
                            <span className="user_name"><a href="/user/DevinXian">DevinXian</a></span>
                        </li>
                        <li>
                            <span className='top_score'>5815</span>
                            <span className="user_name"><a href="/user/chapgaga">chapgaga</a></span>
                        </li>
                        <li>
                            <span className='top_score'>5350</span>
                            <span className="user_name"><a href="/user/magicdawn">magicdawn</a></span>
                        </li>
                    </ol>
                </div>
            </div>
    

            <div className='panel'>
                <div className='header'>
                    <span className='col_fade'>友情社区</span>
                </div>
                <div className='inner'>
                    <ol className="friendship-community">
                        <li>
                            <a href="https://ruby-china.org/" target="_blank">
                                <img src="//static2.cnodejs.org/public/images/ruby-china-20150529.png" />
                            </a>
                        </li>
                        <div className="sep10"></div>
                        <li>
                            <a href="http://golangtc.com/" target="_blank">
                                <img src="//static2.cnodejs.org/public/images/golangtc-logo.png" />
                            </a>
                        </li>
                        <div className="sep10"></div>
                        <li>
                            <a href="http://phphub.org/" target="_blank">
                                <img src="//static2.cnodejs.org/public/images/phphub-logo.png" />
                            </a>
                        </li>
                        <div className="sep10"></div>
                        <li>
                            <a href="https://testerhome.com/" target="_blank">
                                <img src="//static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK" />
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
            <div className='panel'>
                <div className='header'>
                    <span className='col_fade'>客户端二维码</span>
                </div>
                <div className='inner cnode-app-download'>
                    <img width='200' src="//static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU" />
                    <br />
                    <a href="https://github.com/soliury/noder-react-native" target="_blank">客户端源码地址</a>
                </div>
            </div>
        </div>
    )
}
