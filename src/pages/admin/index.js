import React from 'react';
import './css/index.less';
import moment from 'moment';
// const week = ['日', '一', '二', '三', '四', '五', '六'];

class AdminIndex extends React.Component {
	state = {
		today: moment().format('d')
	}
	render() {
		return (
			<div className="row">
			  <div className="admin-index">
					<div className="form-group">
				  	{moment().add('days', 1).format('d')}
					</div>
				</div>
			</div>
		);
	}
}
export default AdminIndex;