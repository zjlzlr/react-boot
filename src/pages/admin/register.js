import React from 'react';
import './css/register.less';
import http from '../../utils/http';
class Register extends React.Component {
	state = {
		agree: 0,
		type: 2,
		account: '',
		password: '',
		msgCode: ''
	}
	handleChange = (event, field) =>  {
		const val = event.target.value;
		const obj = {};
		if (field && val) {
			obj[field] = val
			this.setState(obj);
		}
	}
	register = event => {
		event.preventDefault()
		const data = {
			type: this.state.type,
			account: this.state.account,
			password: this.state.password,
			msgCode: this.state.msgCode
		}
		http.post('/register', data)
    .then(data=> {
			this.props.history.push('/user')
    }, err => {
			console.log(err)
		})
	}
	render() {
		return (
			<div className="row register">
				<header className="register-title">
					吾好科技
        </header>
				<form className="register-content" onSubmit={this.register}>
					<div className="title">注册</div>
					<div className="form-group">
						<input maxLength="11" type="number" onChange={(e) => {this.handleChange(e, 'account')}} className="form-control" placeholder="请输入您的手机号，免费获得上课提醒"/>
					</div>
					<div className="form-group">
					  <div className="input-group">
							<input type="number" onChange={(e) => {this.handleChange(e, 'msgCode')}}  placeholder="请输入短信验证码" className="form-control"/>
							<span className="input-group-addon">点击获取验证码</span>
						</div>
					</div>
					<div className="form-group">
						<input minLength="6" maxLength="11" type="password" onChange={(e) => {this.handleChange(e, 'password')}} className="form-control" placeholder="请设置6-18位密码(字母、数字或符号)"/>
					</div>
					<div className="form-group" style={{overflow: 'hidden'}}>
					  <input type="submit" className="btn btn-success  btn-lg col-md-12 col-sm-12 col-xs-12" value="登 录"/>
					</div>
					<div className="checkbox footer">
						<label>
							<input type="checkbox" value="1" onChange={(e) => {this.handleChange(e, 'agree')}}/> 我已阅读并同意
						</label>
					</div>
				</form>
				<footer className="register-footer">
				  <div>
							Copyright©北京吾好科技有限公司 | 京ICP备17003643号-4<br/>
							京公网安备 11010502032218号
						</div>
				</footer>
			</div>
		);
	}
}
export default Register;