import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero tagline', () => {
  render(<App />);
  const tagline = screen.getByText(/stop learning the old way/i);
  expect(tagline).toBeInTheDocument();
});
