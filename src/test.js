import React from 'react';
import ReactDOM from 'react-dom/client';

// A simple functional component
const Hello = () => <h1>Hello, world!</h1>;

// Render the component into the root div
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello />);