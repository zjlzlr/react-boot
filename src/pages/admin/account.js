import React from 'react';
class Account extends React.Component{
    render(){
        return (
            <div>
                <h5>这是user Account,忘记密码页</h5>
                {this.props.children}
            </div>
        );
    }
}
export default Account;