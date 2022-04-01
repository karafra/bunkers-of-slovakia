import { Link } from 'app/components/Link';
import * as React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { themes } from 'styles/theme/themes';
import { NotFoundPage } from '..';

const renderPage = () =>
  renderer.create(
    <MemoryRouter>
      <ThemeProvider theme={themes.light}>
        <HelmetProvider>
          <NotFoundPage />
        </HelmetProvider>
      </ThemeProvider>
    </MemoryRouter>,
  );

describe('<NotFoundPage />', () => {
  it('should match snapshot', () => {
    const notFoundPage = renderPage();
    expect(notFoundPage.toJSON()).toMatchSnapshot();
  });

  it('should should contain Link', () => {
    const notFoundPage = renderPage();
    expect(notFoundPage.root.findByType(Link)).toBeDefined();
  });
});
