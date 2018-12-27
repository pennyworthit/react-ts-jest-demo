import * as React from 'react';

import enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';

import HelloWorld from '../HelloWorld';

enzyme.configure({
  adapter: new enzymeAdapterReact16(),
});

it('<HelloWorld />', () => {
  const hw = shallow(<HelloWorld color="white" />);
  expect(hw.contains(<h1>Hello World!</h1>)).toBeTruthy();
});
