import React from 'react';
import './css/home.css';
const tabs = [
	{id: 1, url: '/#/index', name: '主页'},
	{id: 2, url: '/#/course', name: '课程体系'},
	{id: 3, url: '/#/teacher', name: '师资力量'},
	{id: 4, url: '/#/download', name: '上课软件'}
]
class Home extends React.Component {
	state = {
		selected: 1
	}
	changeTab = (id) => {
		this.setState({selected: id})
	}
	render() {
		return (
			<div>
				<div className="row font-home-header">
				  <div className="col-md-1 col-md-offset-2">
					  <a href="/"><img alt="点我" src="//static.mmears.com/user/images/logo.png" height="50"></img></a>
					</div>
					<div className="col-md-6">
				    {tabs.map(item => (
					    <a href={item.url} key={item.id} onClick={() => this.changeTab(item.id)}>{item.name}</a>
					  ))}
					</div>
          <div className="col-md-3 buy">
					  <button type="button" className="btn btn-primary">立即购课</button>
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