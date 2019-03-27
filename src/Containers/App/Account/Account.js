import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../../actions';

export class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      loggedIn: false,
      errorMessage: '',
      toggleSignUp: false
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const formData = this.state;
    formData.email = formData.email.toLowerCase();
    if (value === 'Log In') {
      this.validateUser('/api/users', formData);
    }
    if (value === 'Sign Up') {
      this.createUser('/api/users/new', formData);
    }
  }

  async validateUser(url = '', loginData = {}) {
    try {
      const results = await this.fetchUser(url, loginData);
      this.props.loginUser(results.data.id, results.data.name);
      this.setState({loggedIn: true})
    } catch(error) {
      this.setState({errorMessage: 'Sorry, you entered an incorrect email or password'})
      }
  }

  async createUser(url = '', signupData = {}) {
    try {
      const results = await this.fetchUser(url, signupData);
      this.props.loginUser(results.id, signupData.name); 
    } catch(error) {
      throw new Error('user already exists');
    }
  }

  async fetchUser(url, data) {
    try {
      const response = await fetch(`http://localhost:3000${url}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data), 
      })
      const results = await response.json();
      return results;
    } catch(error) {
      throw new Error('Request unsuccessful')
    }
  }

  render() {
    return (
      <div className='Account'>
        {
          !this.state.toggleSignUp ? 
            <form>
              <div>
                <button onClick={() => this.setState({toggleSignUp: true})}>Sign In</button>
                <button className='disabled'>Create Account</button>
              </div>
              <label htmlFor='name'>Name:</label>
              <input placeholder='Kim..' type='text' name='name' value={this.state.name} onChange={this.handleChange} required/>
              <label htmlFor='email'>Email:</label>
              <input placeholder='ex. kim@mail.com..' type='text' name='email' value={this.state.email} onChange={this.handleChange} required/>
              <label htmlFor='password'>Password:</label>
              <input placeholder='ex. floomples..' type='text' name='password' value={this.state.password} onChange={this.handleChange} required/>
              <button className='submit' value="Sign Up" onClick={this.handleSubmit}>SIGN UP</button>
            </form> :
            <form >
              <div>
                <button className='disabled'>Sign In</button>
                <button onClick={() => this.setState({toggleSignUp: false})}>Create Account</button>
              </div>
              <label htmlFor='email'>Email:</label>
              <input placeholder='ex. kim@mail.com..' type='text' name='email' value={this.state.email} onChange={this.handleChange} required/>
              <label htmlFor='password'>Password:</label>
              <input placeholder='ex. floomples..' type='text' name='password' value={this.state.password} onChange={this.handleChange} required/>
              <button className='submit' value="Log In" onClick={this.handleSubmit}>LOG IN</button>
            </form>  
        }
        {
          this.state.loggedIn && <Redirect to='/' />
        }
        {
          this.state.errorMessage ? (
            <div>{this.state.errorMessage}</div>
          ) : (
            <div>Please sign in or create an account</div>
          )
        }
      
      </div>
    )
  }
}


export const mapDispatchToProps = (dispatch) => ({
  loginUser: (id, name) => dispatch(loginUser(id, name)),
})

export default connect(null, mapDispatchToProps)(Account);

Account.propTypes = {
    loginUser: PropTypes.func
}