import React, {  Component, PropTypes } from 'react';
import TodoTextInput from './TodoTextInput';

class TodoItem extends Component {
  static propTypes = {
    id: PropTypes.string,
    todo: PropTypes.object.isRequired,
    actions: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this._onToggleComplete = this._onToggleComplete.bind(this);
  }

  _onToggleComplete() {
    // toggleComplete
    console.log(this.props.actions);
    this.props.actions.toggleComplete(this.props.todo);
  }
  render() {
    const todo = this.props.todo;
    console.log(todo.get('text'));
    return (
      <li className="just-edited">
        <div ref="todoOuterWrap" className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={todo.get('complete')}
                 onChange={this._onToggleComplete} />

            <label> {todo.get('text')}</label>
            <button className="destroy"></button>
        </div>
        <TodoTextInput className="edit" value={todo.get('text')} />
      </li>
    );
  }
}

export default TodoItem;
