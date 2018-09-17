import React, { Component } from 'react';
import './Label.css';
import PropTypes from 'prop-types';

// the label of a input component
class Label extends Component {

    render() {
        return (
            <div className="label">
                <label htmlFor={this.props.id} display={this.props.withLabel} className={this.props.labelStyle}>{this.props.label}</label>
            </div>
        )
    }
  static propTypes =
  {
      id: PropTypes.string,
      withLabel: PropTypes.string,
      labelStyle: PropTypes.string
  }
  static defaultProps=
  {
      labelStyle : "label_style"
  }
}

export default Label;