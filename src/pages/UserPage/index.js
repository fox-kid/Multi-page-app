import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getOrgs, getRepos, getUserInfo } from "../../api/users";
import Navigation from "../../components/Navigation";
import { useAppContext } from "../../context/DashboardContext";
import styles from "./UserPage.module.css";

function UserPage() {
  const { favorites, setFavorites } = useAppContext();
  const username = useParams();

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [orgs, setOrgs] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    setLoading(true);
    getUserInfo(username)
      .then((data) => setUserData(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    getOrgs(username).then((data) => setOrgs(data));
  }, []);

  let maxOrgs;

  if (Array.isArray(orgs)) {
    const size = 3;
    maxOrgs = orgs.slice(0, size);
  }

  useEffect(() => {
    getRepos(username).then((data) => setRepos(data));
  }, []);

  let maxRepos;
  if (Array.isArray(repos)) {
    const size = 10;
    maxRepos = repos.slice(0, size);
  }

  const indexItem = favorites.indexOf(username);

  function toggleFavorites(e) {
    e.preventDefault();

    const newFavorites = favorites.filter((item) => item != username);

    indexItem === -1
      ? setFavorites([...favorites, username])
      : setFavorites(newFavorites);
  }

  return (
    <main>
      <Navigation />
      <div className={styles.user_page_container}>
        {loading && <h1>Loading...</h1>}
        {error && <h1>error</h1>}
        {userData && (
          <>
            <div className={styles.user_profile_left}>
              <img
                src={userData.avatar_url}
                alt={`${userData.login}_photo`}
              ></img>
              <button className={styles.fav_btn} onClick={toggleFavorites}>
                +
              </button>
              <span className={styles.user_name}>{userData.login}</span>
              <span className={styles.user_bio}>
                {userData.bio !== null ? userData.bio : null}
              </span>
              <span className={styles.user_followers}>
                Followers: {userData.followers}
              </span>
              <span>Following: {userData.following}</span>
            </div>
            <div className={styles.user_profile_right}>
              {maxOrgs && (
                <div className={styles.orgs}>
                  <h4>Organisations:</h4>
                  {maxOrgs.map((org) => (
                    <Link
                      key={org.login}
                      to={{ pathname: `${org.url}` }}
                      target="_blank"
                    >
                      <img src={org.avatar_url} alt={org.login}></img>
                    </Link>
                  ))}
                </div>
              )}
              {maxRepos && (
                <div className={styles.repos}>
                  <h4>Repositories:</h4>
                  <div className={styles.repos_section}>
                    {maxRepos.map((repo) => (
                      <div key={repo.name} className={styles.repos_item}>
                        <Link
                          to={{ pathname: `${repo.html_url}` }}
                          target="_blank"
                        >
                          <h5>{repo.name}</h5>
                        </Link>
                        <p>{repo.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default UserPage;
