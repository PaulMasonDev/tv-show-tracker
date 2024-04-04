export const getWatchListFromStorage = (): string[] | null => {
  return getLocalStorageAndParse("watchList");
};

export const setWatchListInStorage = (value: any) => {
  localStorage.setItem("watchList", JSON.stringify(value));
};

const getLocalStorageAndParse = (key: string) => {
  const localStorageValue = getLocalStorageValue(key);
  if (localStorageValue) {
    return JSON.parse(localStorageValue);
  }
  return localStorageValue;
};

const getLocalStorageValue = (key: string) => {
  return localStorage.getItem(key);
};
