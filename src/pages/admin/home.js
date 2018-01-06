import React from 'react';
import '../css/home.less';
import '../css/common.less';
import { NavLink } from 'react-router-dom';
const tabs = [
	{ id: '/adminIndex', name: '个人主页' },
	{ id: '/adminCourse', name: '我的课程' },
	{ id: '/adminUser', name: '个人中心' },
	{ id: '/adminJudge', name: '定级测试' }
]
class Home extends React.Component {
	state = {
		selected: ''
	}
	// 头部tab切换
	changeTab = (id) => {
		debugger;
		this.setState({ selected: id })
	}
	// 初始化加载钩子
	componentDidMount() {
		// 获取并设置初始化路由
		let path = this.props.location.pathname
		path = path === '/' ? '/index' : path
		this.setState({ selected: path })
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
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
}
export default Home;