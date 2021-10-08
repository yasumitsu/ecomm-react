import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/signup/signup.component';
import './signin-signup.styles.scss';

const SignInSignUp = () => {
	return (
		<div className="signin-signup">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default SignInSignUp;
