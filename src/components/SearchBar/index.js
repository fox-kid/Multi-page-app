import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useAppContext } from "../../context/DashboardContext";

function SearchBar({ setFiltered }) {
  const [search, setSearch] = useState("");
  const { users } = useAppContext();

  let filteredUser;

  async function updateSearch() {
    filteredUser = users.filter((user) => user.login.includes(search));
    setSearch(search);
    setFiltered(filteredUser);
  }

  return (
    <div className={styles.search_container}>
      <label htmlFor="search">Search by username:</label>
      <input
        id="search"
        value={search}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button className={styles.search_btn} onClick={updateSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
