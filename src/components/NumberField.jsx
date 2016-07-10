var React = require('react');
var validator = require('validator');

var NumberField = React.createClass ({
	propTypes: {
    placeholder: React.PropTypes.string
  },
	getInitialState: function() {
		return {inputValue: "", valid: true};
	},
	onChange: function(e) {
		let val = e.target.value
		if (validator.isFloat(val) || val == "") {
			this.setState({inputValue: val, valid: true})
		} else {
		this.setState({inputValue: val, valid: false})
		}
	},
	clear: function(){
		this.setState({inputValue: "", valid: true});
	},


	render: function() {
		var warning;
		if (!this.state.valid) {
			warning = (<div className="alert alert-danger">
									That is not a number!
									</div>
								);
		}
		return (
		<div className={this.state.valid ? "row" : "row has-error"}>
			<div className="form-group">
				<input className="form-control"
							onChange={this.onChange}
							placeholder={this.props.placeholder}
							value={this.state.inputValue} />
							<div> {warning} </div>
			</div>
		</div>

		);
	}
});

module.exports = NumberField;