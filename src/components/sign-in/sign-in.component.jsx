import React from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component'
import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
  }
  handleSubmit = e =>{
    e.preventDefault();
    this.setState({email: '', password:''});
  }
  handleChange =e =>{
    const { value, name }= e.target;
    this.setState({[name]: value })
  }

  render(){
    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            type ='email' 
            value={this.state.email} 
            handleChange={this.handleChange}
            label='email'
            required />
          <FormInput 
            name='password'
            type='password'
            label='password'
            value={this.state.password} 
            handleChange={this.handleChange}
            required 
          />
          <Button type='submit' value='Submit Form'>Sign In </Button>
        </form>
      </div>
    )
  }

};
export default SignIn;