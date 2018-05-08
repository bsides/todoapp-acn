import React from 'react'
import Header from './Header'
import Todo from './Todo'

class App extends React.Component {
  state = { todos: [] }
  id = 0

  handleChange = event => {
    this.setState({ inputText: event.target.value })
    // NEVER: this.state.text = e.target.value
  }

  handleSubmit = event => {
    event.preventDefault()
    event.target.reset()
    this.addTodo()
  }

  addTodo = async () => {
    await this.setState(previousState => {
      return {
        todos: [
          ...previousState.todos,
          {
            id: this.id,
            text: this.state.inputText,
            isDone: false,
            isEditing: false
          }
        ]
      }
    })
    this.id = this.id + 1
  }

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

  aboutToEdit = id => e => {
    const todos = this.state.todos.map(todo => {
      const result =
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      return result
    })
    this.setState({ todos })
  }

  editTodo = (id, text) => {
    const todos = this.state.todos.map(
      todo => (todo.id === id ? { ...todo, text, isEditing: false } : todo)
    )
    this.setState({ todos })
  }

  render() {
    return (
      <div>
        <Header title="Todo App" />
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
        </form>
        <ul>
          {this.state.todos.map(todo => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                toggleTodo={this.toggleTodo}
                editTodo={this.editTodo}
                removeTodo={this.removeTodo}
                isEditing={todo.isEditing}
                aboutToEdit={this.aboutToEdit}
              />
            )
          })}
        </ul>
        <pre>{JSON.stringify(this.state)}</pre>
      </div>
    )
  }
}

export default App
