import { CSSProperties } from 'styled-components';
import styled from 'styled-components/macro';

export interface HoverTooltipProps {
  x: number;
  y: number;
  count?: number;
  name?: string;
  description?: string;
  cluster?: boolean;
}

const HoverTooltip = (props: HoverTooltipProps) => {
  const cluster = props.cluster || false;
  return (
    <Wrapper style={{ left: props.x, top: props.y }} className={'tooltip'}>
      {cluster ? (
        `${props.count} buildings`
      ) : (
        <div>
          {props.name}
          {props.description ? ` (${props.description})` : ''}
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: '10px',
  border-radius: '5px',
  color: 'black',
  background-color: 'whitesmoke',
  position: 'absolute',
  min-width: '240px',
  max-width: '10%',
  width: 'fit-content',
  block-size: 'fit-content',
  overflow: 'scroll',
  box-shadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  overflow-x: 'hidden',
  pointer-events: 'none',
`;

export default HoverTooltip;
