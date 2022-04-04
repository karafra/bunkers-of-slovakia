import React from 'react';
import styled from 'styled-components/macro';

export interface PickedTooltipProps {
  x: number;
  y: number;
  objects: {
    name: string;
    description?: string;
  }[];
}

const PickedTooltip = (props: PickedTooltipProps) => {
  return (
    <Wrapper
      style={{
        left: props.x,
        top: props.y,
      }}
      className={"tooltip"}
    >
      {props.objects.map(obj => {
        return (
          <div key={obj.name}>
            <h5>{obj.name}</h5>
            <div>Description: {obj.description || 'unknown'}</div>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: '10px',
  border-radius: '5px',
  color: 'black',
  max-height: '30%',
  background-color: 'whitesmoke',
  position: 'relative',
  min-width: '240px',
  max-width: '10%',
  width: 'fit-content',
  block-size: 'fit-content',
  overflow: 'scroll',
  box-shadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  overflow-x: 'hidden',
  pointer-events: 'all',
  z-index: 9,
  font-size: '12px',
`;

export default PickedTooltip;
