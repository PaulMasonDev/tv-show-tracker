import { render, screen } from "@testing-library/react";
import { SearchBox } from "./SearchBox";
import { TvShowProvider } from "../TvShowContext/TvShowContext";

describe("SearchBox", () => {
  beforeEach(() => {
    render(
      <TvShowProvider>
        <SearchBox />
      </TvShowProvider>
    );
  });
  it("renders the home screen", () => {
    const searchBox = screen.getByText(/search box/i);
    expect(searchBox).toBeInTheDocument();
  });
});
