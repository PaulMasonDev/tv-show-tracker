import styles from "./SearchBox.module.scss";
import { useTvShowContext } from "../TvShowContext/TvShowContext";

export const SearchBox = () => {
  const { searchTerm, setSearchTerm } = useTvShowContext();

  return (
    <>
      <h2>Search Box</h2>
      <input
        className={styles["search-input"]}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </>
  );
};
