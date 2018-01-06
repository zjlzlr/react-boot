import React from 'react';
class Login extends React.Component{
    render(){
        return (
            <div>
							<form>
								<div className="form-group">==
										<label for="exampleInputEmail1">Email address</label>
										<input type="email" className="form-control" placeholder="Email"/>
								</div>
							</form>
            </div>
        );
    }
}
export default Login;