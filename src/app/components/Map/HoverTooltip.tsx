import { CSSProperties } from 'styled-components';

export interface HoverTooltipProps {
  x: number;
  y: number;
  count?: number;
  name?: string;
  description?: string;
  cluster?: boolean;
}

const styles: CSSProperties = {
  padding: '10px',
  borderRadius: '5px',
  color: 'black',
  backgroundColor: 'whitesmoke',
  position: 'absolute',
  maxWidth: '10%',
  width: 'fit-content',
  blockSize: 'fit-content',
  overflow: 'scroll',
  boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  overflowX: 'hidden',
};

const HoverTooltip = (props: HoverTooltipProps) => {
  const cluster = props.cluster || false;
  return cluster ? (
    <div style={{ ...styles, left: props.x + 0, top: props.y + 0 }}>
      {props.count} buildings
    </div>
  ) : (
    <div
      className="tooltip"
      style={{
        ...styles,
        left: props.x + 0,
        top: props.y + 0,
      }}
    >
      {props.name}
      {props.description ? ` (${props.description})` : ''}
    </div>
  );
};

export default HoverTooltip;
