import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
