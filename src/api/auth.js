import axios from "axios";

const AUTH_URL = process.env.REACT_APP_AUTH_URL;

async function signUpUser(user) {
  const response = await axios.post(`${AUTH_URL}/auth/signup`, user, {
    headers: {
      "Content-type": "application/json",
    },
  });

  return response.data;
}

async function signInUser(username, password) {
  const response = await axios.post(
    `${AUTH_URL}/auth/signin`,
    { username, password },
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  return response.data;
}

export { signUpUser, signInUser };
