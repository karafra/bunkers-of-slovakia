import React, { useState } from 'react';
import { StaticMap } from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import { MapView } from '@deck.gl/core';
import IconClusterLayer from './IconClusterLayer';
import HoverTooltip from './HoverTooltip';
import PickedTooltip from './PickedTooltip';
import { PickInfo } from 'deck.gl';

const MAP_VIEW = new MapView({ repeat: true });
const INITIAL_VIEW_STATE = {
  longitude: -35,
  latitude: 36.7,
  zoom: 1.8,
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

  return object.cluster ? (
    <HoverTooltip x={x} y={y} cluster count={object.point_count} />
  ) : (
    <HoverTooltip
      x={x}
      y={y}
      description={object.description}
      name={object.name}
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

  const onHover = () => (hoverInfo as any).objects && setHoverInfo;

  const layer = new IconClusterLayer({
    sizeScale: 40,
    onHover,
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
