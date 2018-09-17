import React,{Component} from 'react';
import Input from '../Input/Input';
import PropTypes from 'prop-types';
// the password input
class Password extends Component
{
	constructor(props)
	{
		super(props);
		this.state={};
		this.onChange= this.onChange.bind(this);
		this.regEx = new RegExp("^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))(?=.{8,})");
		
	}
	// checking if the password is well wrote
	onChange(value)
	{
		if(value!=null)
		{
			if(!this.regEx.test(value))
			{
				this.setState({errorMessage:"Doit contenir au minimum 8 caractères dont au moins une minisucle, une majuscule et un chiffre.",
					errorBorderColor:"input__border_error-color",showError:"inline"});
			}
			else
			{
				this.setState({errorMessage:"",
					errorBorderColor:"input__border_success-color",showError:"none"});
			}
		}		
	}

	 render()
	 {
		return(
			<Input label={this.props.label}  withLabel={this.props.withLabel} id={this.props.password} name="password" width={this.props.width}
				type="text" name={this.props.name} placeholder={this.props.placeholder} 
		onChange={this.onChange} errorBorderColor={this.state.errorBorderColor}
		errorMessage={this.state.errorMessage} showError={this.state.showError}/>
	);
	 }
	static propTypes=
	{
		password : PropTypes.string,
		label: PropTypes.string,
		withLabel: PropTypes.string
	}
	static defaultProps=
	{
		id:"",
			placeholder: "Mot de passe"

	}
}

export default Password;