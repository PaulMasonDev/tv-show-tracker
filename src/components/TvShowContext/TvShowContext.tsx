import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getTvShowByQuery, Show } from "../../client-library/tv-maze/tv-maze";
import {
  getWatchListFromStorage,
  setWatchListInStorage,
} from "../../utils/storage/storage";

type TVResult = Show;

interface TvShowContextType {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  resultsDisplay: TVResult[];
  setResultsDisplay: Dispatch<SetStateAction<TVResult[]>>;
  watchList: string[];
  setWatchList: Dispatch<SetStateAction<string[]>>;
}

export const TvShowContext = createContext<TvShowContextType | undefined>(
  undefined
);

interface TvShowProviderProperties {
  children: ReactNode;
}

export const TvShowProvider = ({ children }: TvShowProviderProperties) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [resultsDisplay, setResultsDisplay] = useState<TVResult[]>([]);
  const [watchList, setWatchList] = useState<string[]>([]);

  useEffect(() => {
    const value = getWatchListFromStorage();
    if (value) setWatchList(value);
  }, []);

  useEffect(() => {
    const getTvShowByQueryEffect = async () => {
      const tvResults = await getTvShowByQuery(searchTerm);
      setResultsDisplay(tvResults);
    };
    if (searchTerm.length > 2) {
      getTvShowByQueryEffect();
    } else {
      setResultsDisplay([]);
    }
  }, [searchTerm]);

  const contextValue = useMemo(
    () => ({
      searchTerm,
      setSearchTerm,
      resultsDisplay,
      setResultsDisplay,
      watchList,
      setWatchList,
    }),
    [
      searchTerm,
      setSearchTerm,
      resultsDisplay,
      setResultsDisplay,
      watchList,
      setWatchList,
    ]
  );

  return (
    <TvShowContext.Provider value={contextValue}>
      {children}
    </TvShowContext.Provider>
  );
};

export const useTvShowContext = () => {
  const context = useContext(TvShowContext);

  if (context === undefined) {
    throw new Error("useTvShowContext must be used with a TvShowProvider");
  }

  return context;
};
