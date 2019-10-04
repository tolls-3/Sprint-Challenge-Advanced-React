import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';


it('renders without crashing', () => {
  const wrapped = rtl.render(<App />);
  const heading = wrapped.queryByText(/Womens World/i);
  expect(heading).toBeTruthy();
  expect(heading).toBeVisible();
});