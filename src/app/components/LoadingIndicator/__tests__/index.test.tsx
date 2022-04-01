import { render } from '@testing-library/react';
import * as React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { themes } from 'styles/theme/themes';
import { LoadingIndicator } from '../index';

const renderWithTheme = (
  props: Parameters<typeof LoadingIndicator>[number] = {},
  theme?: DefaultTheme,
) =>
  render(
    <ThemeProvider theme={theme || themes.light}>
      <LoadingIndicator {...props} />
    </ThemeProvider>,
  );

describe('<LoadingIndicator />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = renderWithTheme();
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot when props changed', () => {
    const loadingIndicator = renderWithTheme({ small: true });
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });

  it('should have theme', () => {
    const loadingIndicator = renderWithTheme();
    expect(loadingIndicator.container.querySelector('circle')).toHaveStyle(
      `stroke: ${themes.light.primary}`,
    );
  });
});
