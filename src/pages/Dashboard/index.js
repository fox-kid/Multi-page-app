import Navigation from "../../components/Navigation";
import UserCard from "../../components/UserCard";
import { useAppContext } from "../../context/DashboardContext";

import styles from "./Dashboard.module.css";

function Dashboard() {
  const { loading, error, users } = useAppContext();

  return (
    <main>
      <Navigation />
      <div className={styles.users_container}>
        {loading && <h1>Loading...</h1>}
        {error && <h1>error</h1>}
        {users.length &&
          users.map((user) => (
            <UserCard
              key={user.id}
              username={user.login}
              img={user.avatar_url}
            />
          ))}
      </div>
      <button className={styles.load_more_btn}>Load more</button>
    </main>
  );
}

export default Dashboard;
