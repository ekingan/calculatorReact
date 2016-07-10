var React = require('react');

var NumberField = require('./NumberField.jsx');
var ResultField = require('./ResultField.jsx');

var LeadCapture = React.createClass ({
	getInitialState: function() {
		return {resultValue: ""}
	},

	onClear: function() {
			this.refs.numberFieldOne.clear();
			this.refs.numberFieldTwo.clear();
			this.setState({calcValue: ""});
	},

	onCalc: function(operator) {
		if (!this.numberFieldOne.state.valid || !this.numberFieldTwo.state.valid) {
			this.setState({calcValue: "Cannot calculate, enter numbers only"});
		} else {
			let firstNum = parseFloat(this.refs.numberFieldOne.state.inputValue);
			let secondNum = parseFloat(this.refs.numberFieldTwo.state.inputValue);
			var result;
		
		switch(operator) {
			case "add":
				result = firstNum + secondNum;
				break;
			case "subtract":
				result = firstNum - secondNum;
				break;
			case "divide":
				if (secondNum == 0) {
					result = "You cannot divide by zero";
				} else {
					result = firstNum / secondNum;
				}	
				break;
			case "multiply":
				result = firstNum * secondNum;
				break;
			default:
				break;

		}
			this.setState({calcValue: result.toString});
		}
			
	}, 

	render: function() {
		return (
			<div className="panel panel-default">
				<div className="panel-body">
					<div className="row">
						<div className="col-sm-6">
							<NumberField ref="numberFieldOne"/>
						</div>
						<div className="col-sm-6">
							<NumberField ref="numberFieldTwo" />
						</div>
					</div>
					<div className="row">
						<div className="col-sm-3">
							<button className="btn btn-primary"
											onClick={()=> this.onCalc("add")}> + Add
							</button> 
						</div>
						<div className="col-sm-3">
							<button className="btn btn-primary"
											onClick={()=>this.onCalc("subtract")}> - Subtract
							</button> 
						</div>
						<div className="col-sm-3">
							<button className="btn btn-primary"
											onClick={()=> this.onCalc("divide")}> / Divide
							</button> 
						</div>
						<div className="col-sm-3">
							<button className="btn btn-primary"
											onClick={()=> this.onCalc("multiply")}> X Multiply
							</button> 
						</div>
					</div>
					<br />
					<div className="row">
						<div className="col-sm-8">
							
								<div paddingTop="20"> 
								 <ResultField resultValue={this.state.calcValue} />
								 </div>
						
						</div>
						<div className="col-sm-4">
							<button className="btn btn-danger"
											onClick={this.onClear}> Clear
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = LeadCapture;