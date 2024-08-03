import "@testing-library/jest-dom";
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button Component', () => {
test('renders single state button with title', () => {
render(<Button title="Click Me" />);
expect(screen.getByText('Click Me')).toBeInTheDocument();
});

test('renders double state button with start title when not listening', () => {
render(<Button buttonType="doubleState" titleStart={{ title: 'Start', icon: '' }} isListening={false} />);
expect(screen.getByText('Start')).toBeInTheDocument();
});

test('renders double state button with stop title when listening', () => {
render(<Button buttonType="doubleState" titleStop={{ title: 'Stop', icon: '' }} isListening={true} />);
expect(screen.getByText('Stop')).toBeInTheDocument();
});

test('applies correct class when listening', () => {
render(<Button isListening={true} />);
expect(screen.getByRole('button')).toHaveClass('text-red-400 border-red-400 animate-pulse');
});

test('applies correct class when not listening', () => {
render(<Button isListening={false} />);
expect(screen.getByRole('button')).toHaveClass('text-white');
});

test('applies additional class names', () => {
render(<Button className="extra-class" />);
expect(screen.getByRole('button')).toHaveClass('extra-class');
});

test('passes additional props to button element', () => {
render(<Button data-testid="custom-button" />);
expect(screen.getByTestId('custom-button')).toBeInTheDocument();
});
    
test("triggers onChange event when clicked", () => {
const handleClick = jest.fn();
render(<Button title="Click me" onClick={handleClick} />);
fireEvent.click(screen.getByText("Click me"));
expect(handleClick).toHaveBeenCalledTimes(1)
});
});