import Navigation from "../../components/Navigation";
import { useAppContext } from "../../context/DashboardContext";
import styles from "./Favorites.module.css";

function Favorites() {
  const { favorites } = useAppContext();

  function handleRemove(e) {
    e.preventDefault();
  }

  return (
    <main>
      <Navigation />
      <div className={styles.fav_users}>
        {favorites.map((fav) => (
          <div key={fav.id} className={styles.fav_users_item}>
            <span>{fav.id}</span>
            <button className={styles.fav_btn} onClick={handleRemove}>
              -
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Favorites;
