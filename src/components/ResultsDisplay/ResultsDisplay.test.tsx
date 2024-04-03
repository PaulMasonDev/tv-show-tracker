import { render, screen } from "@testing-library/react";
import { ResultsDisplay } from "./ResultsDisplay";

describe("ResultsDisplay", () => {
  beforeEach(() => {
    render(<ResultsDisplay />);
  });
  it("renders the results display", () => {
    const resultsDisplay = screen.getByText(/results display/i);
    expect(resultsDisplay).toBeInTheDocument();
  });
});
