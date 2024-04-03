import { render, screen } from "@testing-library/react";
import { HomeScreen } from "./HomeScreen";
import { TvShowProvider } from "../TvShowContext/TvShowContext";

describe("HomeScreen", () => {
  beforeEach(() => {
    render(
      <TvShowProvider>
        <HomeScreen />
      </TvShowProvider>
    );
  });
  it("renders the home screen", () => {
    const homeScreen = screen.getByText(/home screen/i);
    expect(homeScreen).toBeInTheDocument();
  });
});
