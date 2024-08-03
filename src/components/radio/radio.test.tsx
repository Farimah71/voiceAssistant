import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Radio } from "./radio";

describe("Radio Component", () => {
test("renders radio with title", () => {
render(<Radio title="Option 1" id="Option 1" iconCheck="" iconChecked="" />);
expect(screen.getByLabelText("Option 1")).toBeInTheDocument();
});
    
test("renders the checked icon when checked", () => {
render(<Radio title="Option 1" iconChecked={<span>Checked</span>} iconCheck={<span>Unchecked</span>} checked={true} />);
expect(screen.getByText("Checked")).toBeInTheDocument()
})
    
test("renders the unchecked icon when not checked", () => {
render(<Radio title="Option 1" iconChecked={<span>Checked</span>} iconCheck={<span>Unchecked</span>} checked={false} />);
expect(screen.getByText("Unchecked")).toBeInTheDocument();
})

test("applies correct class when checked", () => {
render(<Radio title="Radio" iconCheck="" iconChecked="" checked={true} />);
expect(screen.getByText("Radio")).toHaveClass("text-primary-blue");
});

test("applies correct class when not checked", () => {
render(<Radio title="Radio" iconCheck="" iconChecked="" checked={false} />);
 expect(screen.getByText("Radio")).toHaveClass("text-white");
 });
    
test("passes additional props to input element", () => {
render(<Radio title="Radio" iconCheck="" iconChecked="" data-testid="custom-radio" />);
expect(screen.getByTestId("custom-radio")).toBeInTheDocument();
})
    
test("renders radio with hidden input", () => {
render(<Radio title="Radio" iconCheck="" iconChecked="" data-testid="custom-radio" />);
expect(screen.getByTestId("custom-radio")).toHaveAttribute("hidden");
});
    
test("triggers onChange event when clicked", () => {
const handleChange = jest.fn();
render(<Radio title="Radio" id="Radio" iconCheck="" iconChecked="" onChange={handleChange} />);
fireEvent.click(screen.getByLabelText("Radio"))
expect(handleChange).toHaveBeenCalledTimes(1)
});
});
