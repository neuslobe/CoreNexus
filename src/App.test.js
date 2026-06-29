// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoreNexus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoreNexus/i);
    expect(titleElement).toBeInTheDocument();
});
