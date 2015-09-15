import React, {  Component, PropTypes } from 'react';

const ENTER_KEY_CODE = 13;

class TodoTextInput extends Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onSave: PropTypes.function,
  }

  static defaultProps = {
    value: '',
  }
  /**
   * 构造函数
   */
  constructor(props) {
    super(props);
    this.state = {
      value: (props && props.value) || '',
    };

    this._onChange = this._onChange.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
  }

  /**
   * change事件
   */
  _onChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

 /**
  * 回车事件
  */
  _onKeyDown(event) {
    if ( event.keyCode === ENTER_KEY_CODE ) {
      this._save();
    }
  }

  _save() {
    this.props.onSave(this.state.value);
    this.setState({
      value: '',
    });
  }

  render() {
    return (
      <input
        className={this.props.className}
        id={this.props.id}
        placeholder={this.props.placeholder}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value = {this.state.value}
      />
    );
  }
}

export default TodoTextInput;
