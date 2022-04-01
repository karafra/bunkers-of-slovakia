import { render } from '@testing-library/react';
import * as React from 'react';
import { Logo } from '../Logo';

describe('<Logo />', () => {
  it('should match snapshot', () => {
    const logo = render(<Logo />);
    expect(logo.container.firstChild).toMatchSnapshot();
  });
});
