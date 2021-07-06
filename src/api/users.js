import axios from "axios";

const USERS_URL = "https://api.github.com";
// const USER_INFO_URL = "https://api.github.com";

async function getUsers() {
  const response = await axios.get(
    `${USERS_URL}/search/users?q=followers:%3E=1000&per_page=20`
  );

  return response.data;
}

async function getUserInfo({ id }) {
  const response = await axios.get(`https://api.github.com/users/${id}`);

  return response.data;
}

async function getOrgs({ id }) {
  const response = await axios.get(`https://api.github.com/users/${id}/orgs`);

  return response.data;
}

async function getRepos({ id }) {
  const response = await axios.get(`https://api.github.com/users/${id}/repos`);

  return response.data;
}

export { getUsers, getUserInfo, getOrgs, getRepos };
