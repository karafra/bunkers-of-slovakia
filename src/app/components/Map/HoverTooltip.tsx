import { CSSProperties } from 'styled-components';

export interface HoverTooltipProps {
  x: number;
  y: number;
  count?: number;
  name?: string;
  description?: string;
  cluster?: boolean;
}
/*
pointer-events: none; 
position: absolute;
z-index: 9; font-size:
12px; padding: 8px;
background: #000;
color: #fff;
min-width: 160px;
max-height: 240px;
overflow-y: hidden;
*/

const styles: CSSProperties = {
  padding: '10px',
  borderRadius: '5px',
  color: 'black',
  backgroundColor: 'whitesmoke',
  position: 'absolute',
  minWidth: '240px',
  maxWidth: '10%',
  width: 'fit-content',
  blockSize: 'fit-content',
  overflow: 'scroll',
  boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  overflowX: 'hidden',
  pointerEvents: 'none',
};

const HoverTooltip = (props: HoverTooltipProps) => {
  const cluster = props.cluster || false;
  return cluster ? (
    <div style={{ ...styles, left: props.x, top: props.y }}>
      {props.count} buildings
    </div>
  ) : (
    <div
      className="tooltip"
      style={{
        ...styles,
        left: props.x,
        top: props.y,
      }}
    >
      {props.name}
      {props.description ? ` (${props.description})` : ''}
    </div>
  );
};

export default HoverTooltip;
