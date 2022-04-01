import { render } from '@testing-library/react';
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { DefaultTheme } from 'styled-components';
import { themes } from 'styles/theme/themes';
import { Link } from '../index';

const renderWithTheme = (theme?: DefaultTheme) => {
  return render(
    <MemoryRouter>
      <Link to="/test" theme={theme || themes.light}>
        HeaderLink
      </Link>
    </MemoryRouter>,
  );
};

describe('<Link />', () => {
  it('should match snapshot', () => {
    const link = renderWithTheme();
    expect(link.container.firstChild).toMatchSnapshot();
  });

  it('should have theme', () => {
    const link = renderWithTheme();
    expect(link.container.firstChild).toHaveStyle(
      `color: ${themes.light.primary}`,
    );
  });

  it('should have a class attribute', () => {
    const link = renderWithTheme();
    expect(link.queryByText('HeaderLink')).toHaveAttribute('class');
  });
});
