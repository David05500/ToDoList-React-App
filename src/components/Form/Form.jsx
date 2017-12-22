import React, { Component } from "react";
import Input from "./Input";
import Priority from "./Priority";

class Form extends Component {
	constructor(props) {
		super(props);

		this.submit = this.submit.bind(this);

		this.state = {
			fields: props.fields.slice(),
			fieldsPriority: props.fieldsPriority.slice()
		};
	};

	submit(e) {
		e.preventDefault();


		let fields = this.state.fields.concat(this.state.fieldsPriority);	
		
		let data = fields.reduce((data, field) => {
			data[field.name] = field.value;
			return data;
		}, {});

		this.props.onSubmit(data);
	}

	change( e, i) {
		let fields = this.state.fields.slice();
		fields[i].value = e.target.value;
		this.setState({ fields: fields });
	}

	changePriority( e, i) {
		let fields = this.state.fieldsPriority.slice();
		fields[i].value = e.target.value;
		this.setState({ fieldsPriority: fields });
	}


	render() {

		const { className, button } = this.props;
		return (

			<form onSubmit={ this.submit } className={ "form" + (className ? " " + className : "") } >
				{ this.state.fields.map(({ name, label, value, className }, i) => (
					<Input
					onChange={ (e) => this.change(e, i) }
					value={ value }
					key={ i }
					name={ name }
					label={ label }
					className={ className }
					/>

				))}

				{ this.state.fieldsPriority.map(({ name, label, value, className }, i) => (
					<Priority
					onChange={ (e) => this.changePriority(e, i) }
					value={ value }
					key={ i }
					name={ name }
					label={ label }
					className={ className }
					/>

				))}
				<button className="btn btn-success">{ button }</button>

			</form>
		)
	}


}

export default Form;