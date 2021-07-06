import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./SignInForm.module.css";
import ROUTES from "../../constants/routes";

function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [error, setError] = useState(false);

  function handleSignIn(e) {
    e.preventDefault();
    login(username, password).catch(() => setError(true));
  }

  return (
    <form
      className={
        error ? `${styles.sign_in_form} ${styles.error}` : styles.sign_in_form
      }
    >
      <label htmlFor="username">
        Username
        <input
          value={username}
          type="text"
          id="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          value={password}
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <div className={styles.sign_in_form_btns}>
        <button
          className={styles.sign_in_btn}
          type="submit"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <Link to={ROUTES.PAGE_SIGN_UP}>
          <button className={styles.sign_in_btn} type="submit">
            Sign Up
          </button>
        </Link>
      </div>
    </form>
  );
}

export default SignInForm;
