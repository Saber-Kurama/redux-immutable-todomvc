import React, {  Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import Header from './Header';
import MainSection from './MainSection';
import { connect } from 'react-redux';
import * as AppAction from '../actions/Todo';

const todos = (state) => {
  console.log(state);
  return {
    todos: state.todos || [{id: '001', text: 'saber', complete: false}, {id: '00w', text: 'saber12xxddxczxczx', complete: false}],
  };
};

@connect(todos)
class TodoApp extends Component {
  static propTypes = {
    todos: PropTypes.array,
    dispatch: PropTypes.function,
  }
  componentWillMount() {
    this.actions = bindActionCreators(AppAction, this.props.dispatch);
  }
  render() {
    // const allTodos = [{id: '001', text: 'saber', complete: false}, {id: '00w', text: 'saber12xxddxczxczx', complete: false}];
    console.log(this.actions);
    return (
      <div>
        <Header actions = {this.actions} />
        <MainSection  todos={this.props.todos} actions={this.actions}/>
      </div>
    );
  }
}

export default TodoApp;
