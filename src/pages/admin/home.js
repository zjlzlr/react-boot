import React from 'react';
class Home extends React.Component{
    render(){
        return (
            <div>
                <h5>这是user Home</h5>
                {this.props.children}
            </div>
        );
    }
}
export default Home;