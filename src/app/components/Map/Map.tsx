import { MapView } from '@deck.gl/core';
import DeckGl from '@deck.gl/react';
import { PickInfo } from 'deck.gl';
import React, { useState } from 'react';
import { StaticMap } from 'react-map-gl';
import HoverTooltip from './HoverTooltip';
import IconClusterLayer from './IconClusterLayer';
import PickedTooltip from './PickedTooltip';

const INITIAL_VIEW_STATE = {
  latitude: 48.6737532,
  longitude: 19.696058,
  zoom: 7.5,
  minZoom: 7,
  maxZoom: 20,
  pitch: 0,
  bearing: 0,
};

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

const Map = () => {
  const [hoverInfo, setHoverInfo] = useState({});

  const hideTooltip = () => {
    setHoverInfo({});
  };
  const expandTooltip = (info: PickInfo<any>) => {
    if (info.picked) {
      setHoverInfo(info);
    } else {
      hideTooltip();
    }
  };

  return (
    <>
      <DeckGl
        layers={[
          new IconClusterLayer({
            sizeScale: 40,
            onHover: !(hoverInfo as any).objects
              ? setHoverInfo
              : console.log('called'),
          } as any),
        ]}
        views={[new MapView({ repeat: true })]}
        controller={{ dragRotate: false }}
        initialViewState={INITIAL_VIEW_STATE}
        onViewStateChange={hideTooltip}
        onClick={expandTooltip}
      >
        <StaticMap
          reuseMaps
          mapStyle={
            'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json'
          }
          preventStyleDiffing
        />
        {renderTooltip(hoverInfo)}
      </DeckGl>
    </>
  );
};

export default Map;
