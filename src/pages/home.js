import React from 'react';
import { Button } from 'element-react';
class Home extends React.Component{
    render(){
        return (
            <div>
	            <h5>这是home</h5>
	            <i className="glyphicon glyphicon-heart-empty"></i>
	            <div className="row">
				  <div className="col-xs-12 col-sm-6 col-md-8">.col-xs-12 .col-sm-6 .col-md-8</div>
				  <div className="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
				</div>
				<div className="row">
				  <div className="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
				  <div className="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
				  <div className="clearfix visible-xs-block"></div>
				  <div className="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
				</div>
            </div>
        );
    }
}
export default Home;