import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteTodo, editTodo} from '../actions/toDoActions';

export class ListTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemValue: ''
        }
        this.onClickDellete = this.onClickDellete.bind(this);
        this.onClickItem = this.onClickItem.bind(this);
    }
    onClickDellete(index) {
        //this.setState({ itemValue: e.target.value });
        this.props.deleteTodo(index);
    }

    onClickItem(index, item) {
      //this.setState({ itemValue: e.target.value });
      console.log('this.props.editTodo(index, item)', this.props.editTodo(index, item))
      this.props.editTodo(index, item);
    }

  render() {
    console.log('this.props.items', this.props.items);
    return (
        <ul className="list-group">
            { this.props.items.map((item, index) => {
            return(
              <li className="list-group-item " key={index}>
                <div>
                    <span className="glyphicon glyphicon-ok icon" aria-hidden="true"></span>
                    { item.value }
                    <button type="button" onClick={() => this.onClickDellete(index)} className="close">&times;</button>
                    <button type="button" onClick={() => this.onClickItem(index, item)} className="close">Edit </button>
                </div>
              </li>
            )
          }) }
        </ul>
        
    )
  }
}

const mapStateToProps = state => {
    const { toDoReducer } = state;
    return { toDoReducer };
  }; 
  export default connect(
    mapStateToProps,
    { deleteTodo, editTodo }
  )(ListTodo);
