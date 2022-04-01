import { CompositeLayerProps } from '@deck.gl/core/lib/composite-layer';
import { PickMode } from '@deck.gl/core/lib/deck';
import Layer, { LayerProps, UpdateStateInfo } from '@deck.gl/core/lib/layer';
import { IconLayerProps } from '@deck.gl/layers';
import { PickInfo } from 'deck.gl';
import { CompositeLayer, IconLayer } from 'deck.gl';
import Supercluster from 'supercluster';

import Data from './assets/data/data.json';
import IconAtlas from './assets/icons/location-icon-atlas.png';
import IconMapping from './assets/icons/location-icon-mapping.json';

type GeometryType = 'point';

interface DataMapping {
  type: string;
  geometry: {
    type: GeometryType;
    coordinates: number;
  };
  properties: {
    name: string;
    description?: string;
  };
}

export interface IconClusterLayerProps
  extends CompositeLayerProps<IconLayer<any>> {
  sizeScale: number;
  id?: string;
}

export default class IconClusterLayer extends CompositeLayer<
  IconLayer<IconClusterLayerProps>,
  IconClusterLayerProps
> {
  shouldUpdateState({ changeFlags }: UpdateStateInfo<IconClusterLayerProps>) {
    return changeFlags.somethingChanged;
  }

  private getIconName(size: number): string {
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
  }

  private getIconSize(size: number): number {
    return Math.min(100, size) / 100 + 1;
  }

  updateState({
    oldProps,
    props,
    changeFlags,
  }: UpdateStateInfo<IconClusterLayerProps>): void {
    const rebuildIndex =
      changeFlags.dataChanged || props.sizeScale !== oldProps.sizeScale;

    if (rebuildIndex) {
      const index = new Supercluster({
        maxZoom: 16,
        radius: props.sizeScale * Math.sqrt(2),
      });
      index.load(
        (Data as unknown as DataMapping[]).map(d => ({
          geometry: { coordinates: d.geometry.coordinates },
          properties: d.properties,
        })),
      );
      this.setState({ index });
    }
    const z = Math.floor(this.context.viewport.zoom);
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
    info: PickInfo<any>;
    mode: PickMode;
    sourceLayer: Layer<any, LayerProps<any>>;
  }): PickInfo<
    IconLayer<IconClusterLayerProps, IconLayerProps<IconClusterLayerProps>>
  > {
    const pickedObject = info.object && info.object.properties;
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
    const { data } = this.state;
    const sizeScale = this.props.sizeScale;

    return new IconLayer(
      this.getSubLayerProps({
        id: `icons-layer${this.props.id || ''}`,
        data,
        iconAtlas: IconAtlas,
        iconMapping: IconMapping,
        sizeScale,
        getPosition: d => d.geometry.coordinates,
        getIcon: d =>
          this.getIconName(d.properties.cluster ? d.properties.point_count : 1),
        getSize: d =>
          this.getIconSize(d.properties.cluster ? d.properties.point_count : 1),
      }),
    );
  }
}
