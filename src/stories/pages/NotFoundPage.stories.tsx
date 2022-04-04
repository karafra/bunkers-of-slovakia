import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BrowserRouter, Route } from 'react-router-dom';
import { NotFoundPage as Component } from '../../app/pages/NotFoundPage';
import { HelmetProvider } from 'react-helmet-async';

export default {
  title: 'Pages/NotFoundPage',
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = args => (
  <HelmetProvider>
    <BrowserRouter>
      <Route>
        <Component />
      </Route>
    </BrowserRouter>
  </HelmetProvider>
);

export const NotFoundPage = Template.bind({});
