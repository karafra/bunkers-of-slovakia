import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { Masthead } from '../Masthead';

const shallowRenderer = createRenderer();

describe('<Masthead />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<Masthead />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
