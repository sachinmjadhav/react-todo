import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  
  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <form className="form-group" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Todo" id="input" className="form-control"
        onChange={this.handleChange} value={this.state.text}/>
      </form>
    )
  }
}

export default AddTodo;