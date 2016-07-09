var React = require('react');
var validator = require('email-validator');

var EmailField = React.createClass ({
		getInitialState: function() {
			return {valid: true, value: ""};
		},
		onChange: function(event){
			//grabs value from out of html input field
			var val = event.target.value;

			if (!validator.validate(event.target.value)) {
				this.setState({valid: false, value: event.target.value});
			} else {
				this.setState({valid: true, value: event.target.value});
			}
		},
		clear: function(){
		this.setState({value: "", valid: true});

		},

		render: function() {
			var formClass = this.state.valid ? "form-group" : "form-group has-error"
			return (
				<div padding="20" className={formClass}>
					<input className="form-control" onChange={this.onChange} placeholder="email" value={this.state.value} />
				</div>

			);	
		}
	

});

module.exports = EmailField;
