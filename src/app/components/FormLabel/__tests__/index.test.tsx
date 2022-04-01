import { render } from '@testing-library/react';
import * as React from 'react';
import { DefaultTheme } from 'styled-components';
import { themes } from 'styles/theme/themes';
import { FormLabel } from '../index';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(<FormLabel theme={theme || themes.light} />);

describe('<FormLabel />', () => {
  it('should render an <label> tag', () => {
    const label = renderWithTheme();
    expect(label.container.querySelector('label')).toBeInTheDocument();
  });

  it('should have theme', () => {
    const a = renderWithTheme();
    expect(a.container.firstChild).toHaveStyle(
      `color: ${themes.light.textSecondary}`,
    );
  });
});
