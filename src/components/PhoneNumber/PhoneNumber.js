import React, { Component } from 'react';
import Input from '../Input/Input';
import './PhoneNumber.css';
import Label from '../Label/Label';
import PropTypes from 'prop-types';
// the phoneNumber input component
class PhoneNumber extends Component {

    render()
    {
        return(
            <div className="number_container">
             <Label id={this.props.id} withLabel="inline" label={this.props.label}/>
            <div className="number">
                <div className="number_select ">
                    <img src="/imgs/flag@3x.png" className="number_country_flag" alt="country code" />
                    <select name="countryCode"><option value="237" >237</option></select>
                </div>
                    <div className="number_number">
                        <Input  id={this.props.id} name="number" type="tel" placeholder={this.props.placeholder}  />
                    </div>
                </div>
                </div>
            )
        }
        static propTypes=
        {
            id: PropTypes.string,
            placeholder: PropTypes.string,
            label: PropTypes.string
        }
    }

    export default PhoneNumber;