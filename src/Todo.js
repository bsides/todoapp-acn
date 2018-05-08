import React from 'react'

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.id = props.todo.id
    this.state = { inputText: props.todo.text }
  }

  handleChange = event => {
    this.setState({ inputText: event.target.value })
    // NEVER: this.state.text = e.target.value
  }

  handleSave = e => {
    const text = this.state.inputText
    if (e.which === 13) {
      this.props.editTodo(this.id, text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  render() {
    const { todo, toggleTodo, removeTodo, isEditing, aboutToEdit } = this.props
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.isDone}
          onClick={toggleTodo(todo.id)}
        />
        {isEditing ? (
          <input
            type="text"
            onChange={this.handleChange}
            onKeyDown={this.handleSave}
            defaultValue={todo.text}
          />
        ) : (
          <span
            style={todo.isDone ? { textDecoration: 'line-through' } : {}}
            onClick={aboutToEdit(todo.id)}
          >
            {todo.text}
          </span>
        )}
        <button type="button" onClick={removeTodo(todo.id)}>
          x
        </button>
      </li>
    )
  }
}

export default Todo
