import SignInForm from "../../components/SignInForm";
import styles from "./SignIn.module.css";

function SignIn({ location }) {
  const { state } = location;

  return (
    <div className={styles.sign_in_container}>
      {state?.success && <h3>Sign Up was successful</h3>} <SignInForm />
    </div>
  );
}

export default SignIn;
