import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-botton/custom-botton.component';
import {auth ,signInWithGoogle} from '../../firebase/firebase.util'
import './signin.style.scss';
export default function SignIn() {
  const [signIn, setSignIn] = React.useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(signIn.email, signIn.password)
    } catch (error) {
      console.log(error);
    } 
    setSignIn({
      email: '',
      password: '',
    });
  };
  const handleChange =  (event) => {
    const { name, value } = event.target;
    setSignIn({ ...signIn, [name]: value });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={signIn.email}
          required
          onChange={handleChange}
          label="email"
        />
        {/* <label htmlFor="email">Email</label> */}
        <FormInput
          type="password"
          name="password"
          value={signIn.password}
          required
          onChange={handleChange}
          label="password"
        />
        <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>

        </div>
      </form>
    </div>
  );
}
