import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Need to be installed for toHaveTextContent method.
import React from 'react';
import App from './App';

test('Renders an h3', () => {
  const { getByText } = render(<App />);
  const h3 = getByText(/Hello React Testing/);
  expect(h3).toHaveTextContent('Hello React Testing');
});
