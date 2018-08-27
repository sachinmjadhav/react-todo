import React, { Component } from 'react';
import './App.css';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, text: 'Buy Eggs'},
        {id: 2, text: 'Do Something'}
      ]
    };
  }

	deleteTodo = (id) => {
		const todos = this.state.todos.filter(todo => todo.id !== id);
		this.setState({
			todos
		})
	}

	addTodo = (todo) => {
		todo.id = Math.random();
    let todos = [...this.state.todos, todo];
		this.setState({
			todos
		})
	}

  render() {
    return (
      <div className="App">
        <h1 className="mb-4">TODO LIST</h1>
				<AddTodo addTodo={this.addTodo}/>
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
