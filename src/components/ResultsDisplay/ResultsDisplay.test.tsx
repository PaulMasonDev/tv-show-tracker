import { render, screen } from "@testing-library/react";
import { ResultsDisplay } from "./ResultsDisplay";
import { TvShowProvider } from "../TvShowContext/TvShowContext";

describe("ResultsDisplay", () => {
  beforeEach(() => {
    render(
      <TvShowProvider>
        <ResultsDisplay />
      </TvShowProvider>
    );
  });
  it("renders the results display", () => {
    const resultsDisplay = screen.getByText(/results display/i);
    expect(resultsDisplay).toBeInTheDocument();
  });
});
