import React,{Component} from 'react';
import Input from '../Input/Input';

// the email input
class Email extends Component
{
	constructor(props)
	{
		super(props);
		this.state={};
		this.onChange= this.onChange.bind(this);
		this.regEx = new RegExp("^[a-z0-9_\.-]+@[\da-z\.-]+[\.][a-z\.]{2,6}$");
	
	}
	// checking if the email is well wrote
	onChange(value)
	{
		if(value!=null)
		{
			if(!this.regEx.test(value))
			{
				this.setState({errorMessage:"Doit être une adress valide.",
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
			<Input id={this.props.id} label={this.props.label} withLabel={this.props.withLabel} name={this.props.name} style="form__input form__input_margin"
		type="text" placeholder={this.props.placeholder} 
		name={this.props.name}
		onChange={this.onChange} errorBorderColor={this.state.errorBorderColor}
		errorMessage={this.state.errorMessage} showError={this.state.showError}/>
	);
	 }
}

export default Email;