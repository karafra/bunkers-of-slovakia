import { IconLayer, CompositeLayer, PickInfo } from 'deck.gl';
import Supercluster from 'supercluster';
import { CompositeLayerProps } from '@deck.gl/core/lib/composite-layer';
import Layer, { LayerProps, UpdateStateInfo } from '@deck.gl/core/lib/layer';
import { IconLayerProps } from '@deck.gl/layers';
import { PickMode } from '@deck.gl/core/lib/deck';

import Data from './assets/data/data.json';
import IconMapping from './assets/icons/location-icon-mapping.json';
import IconAtlas from './assets/icons/location-icon-atlas.png';

const getIconName = (size: number) => {
  if (size === 0) {
    return '';
  }
  if (size < 10) {
    return `marker-${size}`;
  }
  if (size < 100) {
    return `marker-${Math.floor(size / 10)}0`;
  }
  return 'marker-100';
};

function getIconSize(size) {
  return Math.min(100, size) / 100 + 1;
}

export default class IconClusterLayer extends CompositeLayer<IconLayer<any>> {
  shouldUpdateState({
    changeFlags,
  }: UpdateStateInfo<
    CompositeLayerProps<IconLayer<any, IconLayerProps<any>>>
  >) {
    return changeFlags.somethingChanged;
  }

  updateState({
    oldProps,
    props,
    context,
    changeFlags,
  }: UpdateStateInfo<
    CompositeLayerProps<IconLayer<any, IconLayerProps<any>>>
  >): void {
    const rebuildIndex =
      changeFlags.dataChanged ||
      (props as any).sizeScale !== (oldProps as any).sizeScale;
    if (rebuildIndex) {
      const index = new Supercluster({
        maxZoom: 16,
        radius: (this.props as any).sizeScale * Math.sqrt(2),
      });
      index.load(
        (Data as any[]).map(d => ({
          geometry: { coordinates: d.geometry.coordinates },
          properties: d.properties,
        })),
      );
      this.setState({ index });
    }
    const z = Math.floor(context.viewport.zoom);
    if (rebuildIndex || z !== this.state.z) {
      this.setState({
        data: this.state.index.getClusters([-180, -85, 180, 85], z),
        z,
      });
    }
  }
  getPickingInfo({
    info,
    mode,
  }: {
    info: PickInfo<IconLayer<any, IconLayerProps<any>>>;
    mode: PickMode;
    sourceLayer: Layer<any, LayerProps<any>>;
  }): PickInfo<IconLayer<any, IconLayerProps<any>>> {
    const pickedObject = info.object && (info.object as any).properties;
    if (pickedObject) {
      if (pickedObject.cluster && mode !== 'hover') {
        (info as any).objects = this.state.index
          .getLeaves(pickedObject.cluster_id, 25)
          .map(f => f.properties);
      }
      info.object = pickedObject;
    }
    return info;
  }

  renderLayers() {
    const { sizeScale, onHover } = this.props as any;
    const { data } = this.state;
    return new IconLayer({
      ...this.getSubLayerProps({
        onHover,
        id: 'icon',
        data,
        iconAtlas: IconAtlas,
        sizeMinPixels: 6,
        iconMapping: IconMapping,
        sizeScale,
        getPosition: d => d.geometry.coordinates,
        getIcon: d =>
          getIconName(d.properties.cluster ? d.properties.point_count : 1),
        getSize: d =>
          getIconSize(d.properties.cluster ? d.properties.point_count : 1),
      }),
      pickable: true,
    });
  }
}
