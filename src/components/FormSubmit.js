import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, addToEditTodo } from '../actions/toDoActions';



export class FormSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemValue: ''
        }
        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeText(e) {
        this.setState({ itemValue: e.target.value });
        //this.setState({ itemValue: e.target.value });
        this.props.addToEditTodo( 1 ,{ index:1 , value: this.state.itemValue, done: false });
       
    }
    
    
    onSubmit(event) {
        event.preventDefault();
        let item = { newItemValue: this.state.itemValue };
        this.props.addTodo(item);
        //console.log('item', item);

        this.setState({ itemValue: '' });
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const { toDoReducer } = nextProps;
        console.log('toDoReducer.editValue', toDoReducer.editData.value);
        return {
            //itemValue: toDoReducer.editData.value
        }
    }

  render() {
    //console.log('this.props.items', this.props.editTodo(index, item));
    return (
        <form ref="form" className="form-inline" onSubmit={this.onSubmit}>
            <input type="text" ref="itemName" value={this.state.itemValue} className="form-control" placeholder="thêm công việc..." onChange={this.onChangeText}/>
            <button type="submit" className="btn btn-default" >Thêm</button>
            
        </form> 
    )
  }
}

const mapStateToProps = state => {
    const { toDoReducer } = state;
    return { toDoReducer };
  }; 

  export default connect(
    mapStateToProps,
    { addTodo, addToEditTodo }
)(FormSubmit);
