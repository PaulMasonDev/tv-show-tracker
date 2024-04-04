import { ResultsDisplay } from "../ResultsDisplay/ResultsDisplay";
import { SearchBox } from "../SearchBox/SearchBox";
import { useTvShowContext } from "../TvShowContext/TvShowContext";

import styles from "./HomeScreen.module.scss";

export const HomeScreen = () => {
  const { resultsDisplay } = useTvShowContext();
  return (
    <div className={styles["home-screen"]}>
      <h1>TV Show Tracker</h1>
      <SearchBox />
      {resultsDisplay.length > 0 && <ResultsDisplay />}
    </div>
  );
};
