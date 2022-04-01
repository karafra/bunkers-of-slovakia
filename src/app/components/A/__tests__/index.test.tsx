import { render } from '@testing-library/react';
import * as React from 'react';
import { DefaultTheme } from 'styled-components';
import { themes } from 'styles/theme/themes';
import { A } from '../index';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(<A theme={theme || themes.light} />);

describe('<A />', () => {
  it('should render an <a> tag', () => {
    const a = renderWithTheme();
    expect(a.container.querySelector('a')).toBeInTheDocument();
  });

  it('should have theme', () => {
    const a = renderWithTheme();
    expect(a.container.firstChild).toHaveStyle(
      `color: ${themes.light.primary}`,
    );
  });
});
