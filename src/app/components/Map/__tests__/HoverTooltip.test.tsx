import React from 'react';
import { render } from '@testing-library/react';
import HoverTooltip from '../HoverTooltip';

describe('<HoverTooltip />', () => {
  it('should render tooltip cluster', () => {
    // Given
    const x = 0;
    const y = 0;
    const count = 25;
    // When
    const rendering = render(
      <HoverTooltip cluster x={x} y={y} count={count} />,
    );
    // Then
    expect(rendering).toMatchSnapshot();
    expect(rendering.container.querySelector('div')?.style.left).toBe(`${x}px`);
    expect(rendering.container.querySelector('div')?.style.top).toBe(`${y}px`);
  });

  describe('should render tooltip', () => {
    it('cluster with description', () => {
      // Given
      const x = 0;
      const y = 0;
      const name = 'name';
      const description = 'description';
      // When
      const rendering = render(
        <HoverTooltip x={x} y={y} name={name} description={description} />,
      );
      // Then
      expect(rendering).toMatchSnapshot();
      expect(rendering.container.querySelector('div')?.style.left).toBe(
        `${x}px`,
      );
      expect(rendering.container.querySelector('div')?.style.top).toBe(
        `${y}px`,
      );
      expect(rendering.container.querySelector('div')?.innerHTML).toContain(
        name,
      );
      expect(rendering.container.querySelector('div')?.innerHTML).toContain(
        description,
      );
    });
    it('cluster without description', () => {
      // Given
      const x = 0;
      const y = 0;
      const name = 'name';
      // When
      const rendering = render(<HoverTooltip x={x} y={y} name={name} />);
      // Then
      expect(rendering).toMatchSnapshot();
      expect(rendering.container.querySelector('div')?.style.left).toBe(
        `${x}px`,
      );
      expect(rendering.container.querySelector('div')?.style.top).toBe(
        `${y}px`,
      );
      expect(rendering.container.querySelector('div')?.innerHTML).toContain(
        name,
      );
      expect(rendering.container.querySelector('div')?.innerHTML).toContain('');
    });
  });
});
