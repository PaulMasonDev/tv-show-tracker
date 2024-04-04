import {
  getWatchListFromStorage,
  setWatchListInStorage,
} from "../../utils/storage/storage";
import { useTvShowContext } from "../TvShowContext/TvShowContext";
import styles from "./ResultsDisplay.module.scss";

export const ResultsDisplay = () => {
  const { resultsDisplay, watchList, setWatchList } = useTvShowContext();

  const handleImageClick = (url: string) => {
    window.location.href = url;
  };

  const handleWatchList = (id: string) => {
    let newWatchList: string[] = [];

    if (!watchList.includes(id)) {
      newWatchList = [id, ...watchList];
    } else {
      newWatchList = watchList.filter((watchId) => watchId !== id);
    }
    setWatchList(newWatchList);
    setWatchListInStorage(newWatchList);
  };

  return (
    <div className={styles["results-wrapper"]} data-testid="results-wrapper">
      <div className={styles["results-content"]}>
        {resultsDisplay.map((result) => {
          const shouldRender = result.image && result.image.medium;
          const isWatched =
            watchList && watchList.includes(`${result.id}`) ? true : false;

          if (shouldRender) {
            return (
              <div
                key={result.id}
                className={styles["result"]}
                data-testid="result"
              >
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
                <div className={styles["info-panel"]}>
                  <div className={styles["action-bar"]}>
                    <button onClick={() => handleWatchList(`${result.id}`)}>
                      <span
                        style={{
                          opacity: !isWatched ? 0.3 : 1,
                          fontSize: "2rem",
                        }}
                      >
                        👁
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
