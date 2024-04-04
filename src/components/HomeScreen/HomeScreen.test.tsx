import { fireEvent, render, screen } from "@testing-library/react";
import { HomeScreen } from "./HomeScreen";
import { TvShowProvider } from "../TvShowContext/TvShowContext";

jest.mock("../../client-library/tv-maze/tv-maze", () => ({
  getTvShowByQuery: jest.fn(),
}));

describe("HomeScreen", () => {
  beforeEach(() => {
    render(
      <TvShowProvider>
        <HomeScreen />
      </TvShowProvider>
    );
  });
  it("renders the home screen", () => {
    const homeScreen = screen.getByText(/tv show tracker/i);
    expect(homeScreen).toBeInTheDocument();
  });
  it("user types in two character to input and there should be no results", () => {
    const input = screen.getByRole("searchbox");

    fireEvent.change(input, { target: { value: "te" } });

    const result = screen.queryByTestId("result");

    expect(result).toBeNull();
  });
});
