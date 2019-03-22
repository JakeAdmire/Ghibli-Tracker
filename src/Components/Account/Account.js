import React, { Component } from 'react';

export class Account extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='email'>Email:</label>
        <input type='text' name='email' value={this.state.email} onChange={this.handleChange} />
        <label htmlFor='password'>Password:</label>
        <input type='text' name='password' value={this.state.password} onChange={this.handleChange} />
        <button>Log In</button>
        <button>Sign Up</button>
      </form>
    )
  }
}