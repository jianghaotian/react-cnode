import {combineReducers} from 'redux';

let noLogin = [
    {name: '首页', url: '/home'},
    {name: '新手入门', url: '/getstart'},
    {name: 'API', url: '/api'},
    {name: '关于', url: '/about'},
    {name: '注册', url: '/signup'},
    {name: '登录', url: '/login'},
];
let yeLogin = [
    {name: '首页', url: '/home'},
    {name: '未读消息', url: '/message'},
    {name: '新手入门', url: '/getstart'},
    {name: 'API', url: '/api'},
    {name: '关于', url: '/about'},
    {name: '设置', url: '/setting'},
    {name: '退出', url: '/nologin'},
];

function navItem (state=noLogin, action) {
    switch (action.type) {
        case 'login':
            return yeLogin;
        case 'nologin':
            return noLogin;
        default:
            return state;
    }
}

let reducer = combineReducers({
    navItem
})
export default reducer;