import { useTvShowContext } from "../TvShowContext/TvShowContext";
import styles from "./ResultsDisplay.module.scss";

export const ResultsDisplay = () => {
  const { resultsDisplay } = useTvShowContext();

  const handleImageClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className={styles["results-wrapper"]} data-testid="results-wrapper">
      <div className={styles["results-content"]}>
        {resultsDisplay.map((result) => {
          const shouldRender = result.image && result.image.medium;

          if (shouldRender) {
            return (
              <div key={result.id} className={styles["result"]}>
                <div
                  className={styles["image-panel"]}
                  onClick={() => handleImageClick(result.officialSite)}
                >
                  <h3>{result.name}</h3>
                  <img
                    src={result.image.medium}
                    width={200}
                    alt={result.name}
                  />
                </div>
                <div className={styles["info-panel"]}></div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
