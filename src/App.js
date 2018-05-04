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
            isDone: false
          }
        ]
      }
    })
    this.id = this.id + 1
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
            return <Todo key={todo.id} todo={todo} />
          })}
        </ul>
        <pre>{JSON.stringify(this.state)}</pre>
      </div>
    )
  }
}

export default App
