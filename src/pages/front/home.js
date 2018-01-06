import React from 'react';
import '../css/home.less';
import { Link, NavLink } from 'react-router-dom';
const tabs = [
	{id: '/index', name: '主页'},
	{id: '/course', name: '课程体系'},
	{id: '/teacher', name: '师资力量'},
	{id: '/download', name: '上课软件'}
]
class Home extends React.Component {
	state = {
		selected: ''
	}
	// 头部tab切换
	changeTab = (id) => {
		this.setState({selected: id})
	}
	// 初始化加载钩子
	componentDidMount () {
		// 获取并设置初始化路由
		let path = this.props.location.pathname
		path = path === '/' ? '/index' : path
		this.setState({selected: path})
	}
	render() {
		return (
			<div>
				<div className="row font-home-header">
				  <div className="col-md-3 col-sm-3">
					  <a href="/"><img alt="点我" src="//static.mmears.com/user/images/logo.png" height="50"></img></a>
					</div>
					<div className="col-md-6 col-sm-9 col-xs-0">
				    {tabs.map(item => (
							<NavLink
								to={item.id}
								activeClassName='active'
								key={item.id}
							>{item.name}</NavLink>
					  ))}
					</div>
          <div className="col-md-1 buy">
					  <button type="button" className="btn btn-success">立即购课</button>
          </div>
					<div className="col-md-2">
					  <Link to="/login">登录</Link>
						<Link to="/register">注册</Link>
					</div>
				</div>
				<div>
				  {this.props.children}
				</div>
			</div>
		);
	}
}
export default Home;