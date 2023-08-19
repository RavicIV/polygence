import { render, screen } from '@testing-library/react';
const App = require('./App');
// import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const saveButton = screen.getByText(/SAVE/i);
  expect(saveButton).toBeInTheDocument();
});
