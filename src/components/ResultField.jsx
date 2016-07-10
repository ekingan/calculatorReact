var React = require('react');

var ResultField = React.createClass ({
	 propTypes: {
    resultValue: React.PropTypes.string
  },
	render: function() {
		return (
			
				<div>
					<input className="form-control"
									placeholder="Results of Calculation"
									value={this.props.resultValue ? this.props.resultValue : ""}
									readOnly />
				</div>
			


			);
	}
		
	

});

module.exports = ResultField;