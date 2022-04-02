import React from 'react';
import { CSSProperties } from 'styled-components';

const styles: CSSProperties = {
  padding: '10px',
  borderRadius: '5px',
  color: 'black',
  maxHeight: '30%',
  backgroundColor: 'whitesmoke',
  position: 'relative',
  minWidth: '240px',
  maxWidth: '10%',
  width: 'fit-content',
  blockSize: 'fit-content',
  overflow: 'scroll',
  boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  overflowX: 'hidden',
  pointerEvents: 'all',
  zIndex: 9,
  fontSize: '12px',
};

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
    <div
      className="tooltip interactive"
      style={{
        ...styles,
        left: props.x,
        top: props.y,
      }}
    >
      {props.objects.map(obj => {
        return (
          <div key={obj.name}>
            <h5>{obj.name}</h5>
            <div>Description: {obj.description || 'unknown'}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PickedTooltip;
