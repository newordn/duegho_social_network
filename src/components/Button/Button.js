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
    }
    handleClick(id)
    {
    this.props.onClick(id);// we are calling high level component onClick method
    }
    componentWillReceiveProps(nextProps)
    {
        this.setState({clickedHighlight:nextProps.clickedHighlight});
    }
    render()
    {
        let higlight = "";
        if(this.state.clickedHighlight)
        higlight="aqua";
        else
        higlight ="";
        let classValues = higlight + " "+ this.props.textStyle+ " " +  this.props.backgroundColor + " " +  this.props.alignment + " " + this.props.width+ " "+ this.props.height;
         return <button id={this.props.id} className={classValues}  onClick={()=>{this.handleClick(this.props.id)}}>{this.props.text}</button>
               
            
    }
    static propTypes=
    {
        textStyle: PropTypes.string,
        alignment: PropTypes.string,
        clickedHighlight: PropTypes.bool,
        width: PropTypes.string,
        onClick: PropTypes.func,
        height:PropTypes.string,
        text: PropTypes.string,
        backgroundColor: PropTypes.string   
    }
    static defaultProps=
    {
            clickedHighlight:false,
            onClick:()=>{},
            setFocus:false,
            width:"width"
    }
}

export default Button;