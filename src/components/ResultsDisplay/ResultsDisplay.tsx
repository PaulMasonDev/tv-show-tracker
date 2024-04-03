import { useTvShowContext } from "../TvShowContext/TvShowContext";
import styles from "./ResultsDisplay.module.scss";

export const ResultsDisplay = () => {
  const { resultsDisplay } = useTvShowContext();
  return (
    <div className={styles["results-wrapper"]}>
      <h2>Results Display</h2>
      <div className={styles["results-content"]}>
        {resultsDisplay.map((result) => {
          return (
            <div key={result.id} className={styles["result"]}>
              <h3>{result.name}</h3>
              {result.image && (
                <img src={result.image.medium} width={200} alt={result.name} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
