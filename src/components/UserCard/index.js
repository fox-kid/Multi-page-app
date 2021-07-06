import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserInfo } from "../../api/users";
import styles from "./UserCard.module.css";

function UserCard({ username, img }) {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserInfo(username)
      .then((data) => setUserData(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.user_card}>
      <img src={img} alt={`${username}_photo`}></img>
      <span className={styles.user_name}>{username}</span>
      {loading && <h1>Loading...</h1>}
      {error && <h1>error</h1>}
      <span className={styles.user_follower_count}>
        Followers: {userData.followers}
      </span>
      <span>Following: {userData.following}</span>
      <Link to={`/user/${username}`}>
        <button className={styles.user_page_btn}>User page</button>
      </Link>
    </div>
  );
}

export default UserCard;
