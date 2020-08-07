import React from 'react';
import SignIn from '../../components/sign-in/signin.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './sign-in-and-sign-up.style.scss';
export default function SignInAndSignUp() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}
