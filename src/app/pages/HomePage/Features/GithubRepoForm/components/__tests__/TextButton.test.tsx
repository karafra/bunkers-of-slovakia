import { render } from '@testing-library/react';
import * as React from 'react';
import { DefaultTheme } from 'styled-components';
import { themes } from 'styles/theme/themes';
import { TextButton } from '../TextButton';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(<TextButton theme={theme || themes.light} />);

describe('<TextButton />', () => {
  it('should render an <button> tag', () => {
    const button = renderWithTheme();
    expect(button.container.querySelector('button')).toBeInTheDocument();
  });

  it('should have theme', () => {
    const button = renderWithTheme();
    expect(button.container.firstChild).toHaveStyle(
      `color: ${themes.light.primary}`,
    );
  });
});
