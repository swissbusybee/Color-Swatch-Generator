import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app title", () => {
  render(<App />);
  const appTitle = screen.getByText("Color Swatch Generator");
  expect(appTitle).toBeInTheDocument();
});
