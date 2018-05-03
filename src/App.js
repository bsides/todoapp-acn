import React from 'react'

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

  addTodo = () => {
    this.setState(previousState => {
      return {
        todos: [
          ...previousState.todos,
          {
            id: this.id,
            text: this.state.inputText
          }
        ]
      }
    })
    this.id = this.id + 1
  }

  render() {
    return (
      <div>
        <h1>Todo app</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
        </form>
        <ul>
          {this.state.todos.map(item => {
            return <li key={item.id}>{item.text}</li>
          })}
        </ul>
        <pre>{JSON.stringify(this.state)}</pre>
      </div>
    )
  }
}

export default App
