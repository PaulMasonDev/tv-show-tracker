const baseUrl = "https://api.tvmaze.com/search";

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string;
  };
  webChannel: any;
  dvdCountry: any;
  externals: {
    tvrage: any;
    thetvdb: number;
    imdb: string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode: {
      href: string;
      name: string;
    };
  };
}
const parseShowResults = (showResults: any) => {
  const parsedResults: Show = {
    ...showResults.show,
  };
  return parsedResults;
};

export const getTvShowByQuery = async (query: string) => {
  const response = await fetch(`${baseUrl}/shows?q=${query}`);
  const array = await response.json();
  return array.map((result: any) => parseShowResults(result));
};
