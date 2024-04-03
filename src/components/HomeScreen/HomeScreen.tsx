import { useState } from "react";
import { ResultsDisplay } from "../ResultsDisplay/ResultsDisplay";
import { SearchBox } from "../SearchBox/SearchBox";

import styles from "./HomeScreen.module.scss";

export const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles["home-screen"]}>
      <h1>Home Screen</h1>
      <SearchBox />
      <ResultsDisplay />
    </div>
  );
};
