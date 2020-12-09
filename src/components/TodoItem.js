import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.complete ? 'line-through' : 'none',
      backgroundColor: '#f4f4f4',
      padding: '10px 5px',
      borderBottom: '1px solid',
    };
  };

  render() {
    const { id, title, complete } = this.props.todo;
    return (
      <div>
        <input
          type='checkbox'
          defaultChecked={complete}
          onChange={this.props.markComplete.bind(this, id)}
        />
        <div style={this.getStyle()}>{title}</div>
        <input
          onClick={this.props.delTodo.bind(this, id)}
          type='button'
          className='btn'
          style={btnStyle}
          value='X'
        />
      </div>
    );
  }
}

const btnStyle = {
  backgroundColor: 'red',
};

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};
