import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';

// last name input component
class Name extends Component {
    constructor(props)
    {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state={errorMessage:"",errorBorderColor:"",showError:""};
    }
    onChange()
    {

    }
render()
{
   return <Input label={this.props.label} withLabel={this.props.withLabel} id={this.props.id} name="last_name"
        type="text" placeholder={this.props.placeholder}
       name={this.props.name}
        onChange={this.onChange} errorBorderColor={this.state.errorBorderColor}
        errorMessage={this.state.errorMessage} showError={this.state.showError} />

}
static propTypes = 
{
    label: PropTypes.string,
    labelStyle: PropTypes.string,
    withLabel: PropTypes.string,
    placeholder: PropTypes.string
}
}

export default Name;