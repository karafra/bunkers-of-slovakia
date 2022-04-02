import { render } from '@testing-library/react';
import React from 'react';
import PickedTooltip from '../PickedTooltip';

describe('<PickedTooltip />', () => {
  it('Should render tooltip', () => {
    // Given
    const x = 0;
    const y = 0;
    const name1 = 'name1';
    const name2 = 'name2';
    const description = 'description';
    const objects = [
      {
        name: name1,
        description,
      },
      {
        name: name2,
        description,
      },
    ];
    // When
    const rendering = render(<PickedTooltip x={x} y={y} objects={objects} />);
    // Then
    expect(rendering).toMatchSnapshot();
    expect(
      rendering.container.querySelector('.tooltip')?.querySelectorAll('div')
        .length,
    ).toBe(objects.length * 2);
    expect(rendering.container.querySelector('.tooltip')?.innerHTML).toContain(
      description,
    );
    expect(rendering.container.querySelector('.tooltip')?.innerHTML).toContain(
      name1,
    );
    expect(rendering.container.querySelector('.tooltip')?.innerHTML).toContain(
      name2,
    );
  });
  it('Should render tooltip without', () => {
    // Given
    const x = 0;
    const y = 0;
    const name = 'name';
    const description = 'unknown';
    const objects = [
      {
        name,
      },
    ];
    // When
    const rendering = render(<PickedTooltip x={x} y={y} objects={objects} />);
    // Then
    expect(rendering).toMatchSnapshot();
    expect(
      rendering.container.querySelector('.tooltip')?.querySelectorAll('div')
        .length,
    ).toBe(objects.length * 2);
    expect(rendering.container.querySelector('.tooltip')?.innerHTML).toContain(
      description,
    );
    expect(rendering.container.querySelector('.tooltip')?.innerHTML).toContain(
      name,
    );
  });
});
