import { render, screen } from "@testing-library/react";
import ColorGenerator from "../components/colorGenerator";
import ColorSwatchView from "../components/colorSwatchView";
import { initalImageData } from "../initialData";

describe("Color Generator", () => {
  test("renders color generator component", () => {
    render(<ColorGenerator />);
    const colorGeneratorComponent = screen.getByTestId("color-generator");
    expect(colorGeneratorComponent).toBeInTheDocument();
  });
});

describe("Color Swatch View", () => {
 test("renders color swatch view", () => {
   render(<ColorSwatchView data={initalImageData} />);
   const colorSwatchViewComponent = screen.getByTestId("color-swatch-view");
   expect(colorSwatchViewComponent).toBeInTheDocument();
 });
});

