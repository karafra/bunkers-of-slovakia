import { render } from '@testing-library/react';
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Nav } from '../Nav';

describe('<Nav />', () => {
  it('should match the snapshot', () => {
    const logo = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );
    expect(logo.container.firstChild).toMatchSnapshot();
  });
});
