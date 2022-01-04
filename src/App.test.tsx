import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';


describe("App", () => {
  it('renders learn react link', () => {
    const app = render(<App />);
    expect(app).toBeEmptyDOMElement;
  });
})


