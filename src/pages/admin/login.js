import React from 'react';
import './css/login.less';
import { Link } from 'react-router-dom';
import http from '../../utils/http';
class Login extends React.Component {
	state = {
		type: 1,
		account: '',
		password: ''
	}
	login = event => {
		event.preventDefault()
		const data = {
			type: this.state.type,
			account: this.state.account,
			password: this.state.password
		}
		http.post('/login', data)
    .then(data=> {
			this.props.history.push('/user')
    }, err => {
			console.log(err)
		})
	}
	handleChange = (event, field) =>  {
		const val = event.target.value;
		const obj = {};
		if (field && val) {
			obj[field] = val
			this.setState(obj);
		}
  }
	componentDidMount () {
		this.setState({account: '', password: ''});
	}
	render() {
		return (
			<div className="row">
			  {/* 阻止type='password'自动填充 */}
		  	<input style={{display: 'none'}}/>
				<input style={{display: 'none'}}/>
				<div className="login-top">
				  <img src="https://magicears.com.cn/img/logo.png"/>
				</div>
				<div className="login-wrapper">
				  <div className="login-content">
						<form className="login-field col-md-offset-8 col-xs-offset-2 col-sm-offset-4"  onSubmit={this.login}>
							<div className="login-title">
							  <span className="title">登录吾好科技</span>
								<Link to="/register" className="register">立即注册 >></Link>
							</div>
							<div className="form-group">
								<div className="input-group">
									<span className="input-group-addon"><i className="glyphicon glyphicon-phone"></i></span>
									<input type="text" onChange={(e) => {this.handleChange(e, 'account')}} className="form-control"/>
								</div>
							</div>
							<div className="form-group">
							  <div className="input-group">
									<span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
									<input type="password" onChange={(e) => {this.handleChange(e, 'password')}} className="form-control"/>
								</div>
							</div>
							<div className="login-title">
							  <span>下次自动登录</span>
								<Link to="/account" className="register">忘记密码?</Link>
							</div>
							<div className="form-group">
						    <input type="submit" className="btn btn-success col-md-12" value="登 录"/>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
export default Login;