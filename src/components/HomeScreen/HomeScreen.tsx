import { ResultsDisplay } from "../ResultsDisplay/ResultsDisplay";
import { SearchBox } from "../SearchBox/SearchBox";

import styles from "./HomeScreen.module.scss";

export const HomeScreen = () => {
  return (
    <div className={styles["home-screen"]}>
      <h1>TV Show Tracker</h1>
      <SearchBox />
      <ResultsDisplay />
    </div>
  );
};
