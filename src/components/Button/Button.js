import React,{Component} from 'react';
import './Button.css';
import PropTypes from 'prop-types';
class Button extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {clickedHighlight:this.props.clickedHighlight};
        this.handleClick = this.handleClick.bind(this);  
        this.handleBlur = this.handleBlur.bind(this);  
    }
    handleClick()
    {
        this.setState({clickedHighlight:true});
    }
    handleBlur()
    {
        this.setState({ clickedHighlight: false });
    }
    render()
    {
        let higlight = "";
        if(this.state.clickedHighlight)
        higlight="aqua";
        else
        higlight ="";
        let classValues = higlight + " "+ this.props.textStyle+ " " +  this.props.backgroundColor + " " +  this.props.alignment + " " + this.props.width+ " "+ this.props.height;
        return(
            <button className={classValues} onBlur={this.handleBlur} onClick={this.handleClick}>{this.props.text}</button>
        );
    }
    static propTypes=
    {
        textStyle: PropTypes.string,
        alignment: PropTypes.string,
        clickedHighlight: PropTypes.bool,
        width: PropTypes.string  
    }
    static defaultProps=
    {
            clickedHighlight:false,
    }
}

export default Button;