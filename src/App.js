import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ListTodo from './components/ListTodo';
import FormSubmit from './components/FormSubmit';
import { connect } from 'react-redux';
import { listTodo } from './actions/toDoActions';


// var todoItems = [];
// todoItems.push({ index: 1, value: "learn react", done: false });
// todoItems.push({ index: 2, value: "Go shopping", done: true });
// todoItems.push({ index: 3, value: "buy flowers", done: true });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }

  componentDidMount() {
    this.props.listTodo();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { toDoReducer } = nextProps;
    //console.log('toDoReducer', toDoReducer.data);
    return { data: toDoReducer.data };
  } 


  render() {    
    const { data } = this.state;
    //console.log('this.state', this.state);
    //console.log('this.props', this.props);
    //const { toDoReducer } = this.props;
    return (
      <div id="main">
        <Header/>
        <ListTodo items={data}/>
        <FormSubmit />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { toDoReducer } = state;
  return { toDoReducer };
};
export default connect(
  mapStateToProps,
  { listTodo }
)(App);
