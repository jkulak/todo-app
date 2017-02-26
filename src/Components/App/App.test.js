import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('app component', () =>{

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
    });

    it('should render a footer with a classname', () => {});

    it('should render its children', () => {});
});
