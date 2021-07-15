import { useState } from "react";
import Modal from "../../components/Modal";
import Navigation from "../../components/Navigation";
import { useAppContext } from "../../context/DashboardContext";
import styles from "./Favorites.module.css";

function Favorites() {
  const { favorites } = useAppContext();
  const [showModal, toggleModal] = useState(false);

  function handleRemove() {
    toggleModal((prev) => !prev);
  }

  return (
    <main>
      <Navigation />
      <div className={styles.fav_users}>
        {favorites.map((fav) => (
          <div key={fav.id} className={styles.fav_users_item}>
            <span>{fav.id}</span>
            <button
              className={styles.fav_btn}
              onClick={() => toggleModal((prev) => !prev)}
            >
              Remove from favorites
            </button>
            {showModal && (
              <Modal>
                <div className={styles.remove_from_fav}>
                  <p>Do you really want to remove this user from favorites?</p>
                  <div className={styles.modal_btn_box}>
                    <button
                      className={styles.modal_btn}
                      onClick={() => toggleModal((prev) => !prev)}
                    >
                      Close
                    </button>
                    <button className={styles.modal_btn} onClick={handleRemove}>
                      Remove
                    </button>
                  </div>
                </div>
              </Modal>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Favorites;
