import React from 'react'

class Todo extends React.Component {
  removeTodo = id => e => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos })
  }

  toggleTodo = id => e => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone
      }
      return todo
    })
    this.setState({ todos })
  }

  editTodo = id => e => {
    console.log(id)
  }

  render() {
    const { todo } = this.props
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.isDone}
          onClick={this.toggleTodo(todo.id)}
        />
        <span
          style={todo.isDone ? { textDecoration: 'line-through' } : {}}
          onClick={this.editTodo(todo.id)}
        >
          {todo.text}
        </span>
        <button type="button" onClick={this.removeTodo(todo.id)}>
          x
        </button>
      </li>
    )
  }
}

export default Todo
