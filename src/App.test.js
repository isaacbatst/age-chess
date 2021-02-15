import { render, screen } from '@testing-library/react';
import App from './App';

test('renders game title somewhere', () => {
  render(<App />);
  const linkElement = screen.getByText(/Age Chess/i);
  expect(linkElement).toBeInTheDocument();
});
