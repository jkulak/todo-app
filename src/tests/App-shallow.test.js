import React from 'react';
import { shallow } from 'enzyme';
import App from '../Components/App';

//

it('renders without crashing', () => {
  shallow(<App />);
});
