import React, {  Component, PropTypes } from 'react';
import TodoTextInput from './TodoTextInput';

class Header  extends Component {
  static propTypes = {
    actions: PropTypes.object,
  }
  render() {
    const onSave = (value) => {
      console.log('=s=s' + value);
      this.props.actions.createtodo(value);
    };
    return (
      <header id="header">
        <h1>TODO</h1>
        <TodoTextInput id="new-todo" onSave = {onSave}
          placeholder="What needs to be done?"
           />
      </header>
    );
  }
}

export default Header;
