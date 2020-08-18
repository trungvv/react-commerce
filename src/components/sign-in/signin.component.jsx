import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-botton/custom-botton.component';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';
import './signin.style.scss';
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const {emailSignInStart} = this.props;

    emailSignInStart(email, password);
    // this.setState({
    //   email: '',
    //   password: '',
    // });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { googleSignInStart } = this.props;
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            required
            onChange={this.handleChange}
            label="email"
          />
          {/* <label htmlFor="email">Email</label> */}
          <FormInput
            type="password"
            name="password"
            value={password}
            required
            onChange={this.handleChange}
            label="password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispathToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email,password) => dispatch(emailSignInStart(email,password)),
});

export default connect(null, mapDispathToProps)(SignIn);
