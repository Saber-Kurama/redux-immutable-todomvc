import React, {  Component, PropTypes } from 'react';
import TodoItem from './TodoItem';

class MainSection extends Component {
  static propTypes = {
    id: PropTypes.string,
    todos: PropTypes.object,
    actions: PropTypes.object,
    // areAllComplete: PropTypes.string,
  }

  /**
   * 构造函数
   */
  constructor(props) {
    super(props);
    this._onToggleCompleteAll = this._onToggleCompleteAll.bind(this);
  }

  _onToggleCompleteAll() {
    this.props.actions.toggleCompleteAll();
  }

  render() {
    // const todo = {
    //   text: 'saber',
    // };
    console.log(this.props.todos);
    // const allTodos = this.props.allTodos;

    const todos = [];
    this.props.todos.forEach(todo => {
      todos.push(<TodoItem todo = { todo } actions={this.props.actions} />);
      return true;
    });
    // allTodos.map( todo => {
      // todos.push(<TodoItem todo = { todo }/>);
    // });
    return (
      <main id="main">
        <input
          id="toggle-all"
          type="checkbox"
          onChange={this._onToggleCompleteAll}

        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul id="todo-list">
          {todos}
        </ul>
        </main>
    );
  }
}

export default MainSection;
