/* istanbul ignore file */
// TODO: Figure out how to fuck with Map.gl testing shit

import { MapView } from '@deck.gl/core';
import DeckGL from '@deck.gl/react';
import { PickInfo } from 'deck.gl';
import React, { useState } from 'react';
import { StaticMap } from 'react-map-gl';
import HoverTooltip from './HoverTooltip';
import IconClusterLayer from './IconClusterLayer';
import PickedTooltip from './PickedTooltip';

const MAP_VIEW = new MapView({ repeat: true });
const INITIAL_VIEW_STATE = {
  longitude: 19.696058,
  latitude: 48.6737532,
  zoom: 7.5,
  maxZoom: 20,
  pitch: 0,
  bearing: 0,
};
const MAP_STYLE =
  'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json';

function renderTooltip(info) {
  const { object, x, y } = info;

  if (info.objects) {
    return <PickedTooltip x={x} y={y} objects={info.objects} />;
  }

  if (!object) {
    return null;
  }
  console.log(info);
  return (
    <HoverTooltip
      x={x}
      y={y}
      description={object.description}
      name={object.name}
      count={object.point_count}
      cluster={object.cluster}
    />
  );
}

export interface MapProps {
  mapStyle?: string;
  renderTooltip?: (info: PickInfo<any>) => JSX.Element | undefined;
  id?: string;
}

const Map = (props: MapProps) => {
  const [hoverInfo, setHoverInfo] = useState<any>({});
  const hideTooltip = () => {
    setHoverInfo({});
  };
  const expandTooltip = (info: PickInfo<any>) => {
    if (info.picked) {
      setHoverInfo(info);
    } else {
      setHoverInfo({});
    }
  };

  const _onHover = (info: any) => {
    console.log(info);
    return !hoverInfo.objects && setHoverInfo;
  };

  const onHover = _onHover;

  const layer = new IconClusterLayer({
    onHover,
    sizeScale: 40,
    id: props.id || 'icon-cluster',
    pickable: true,
  } as any);
  return (
    <DeckGL
      layers={[layer]}
      views={[MAP_VIEW]}
      initialViewState={INITIAL_VIEW_STATE}
      controller={{ dragRotate: false }}
      onViewStateChange={hideTooltip}
      onClick={expandTooltip}
    >
      <StaticMap
        reuseMaps
        mapStyle={props.mapStyle || MAP_STYLE}
        preventStyleDiffing={true}
      />

      {props.renderTooltip
        ? props.renderTooltip(hoverInfo)
        : renderTooltip(hoverInfo)}
    </DeckGL>
  );
};

export default Map;
