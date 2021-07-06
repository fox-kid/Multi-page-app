import SignUpForm from "../../components/SignUpForm";
import styles from "./SignUp.module.css";

function SignUp() {
  return (
    <div className={styles.sign_up_container}>
      <SignUpForm />
    </div>
  );
}

export default SignUp;
