import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

class YandexMap extends React.Component {
  render() {
    return (
    <YMaps
        enterprise
        query={{ apikey: 'c28eb37a-b0c8-44bd-b589-29629cb89fa2', }}
    >
      <div id="map-basics" style={{ height: '50vh', width: '50vw', margin: '0 auto' }}>
        <Map state={this.props.mapState} width={600} height={400}>
          <Placemark geometry={this.props.mapState.center} />
        </Map>
      </div>
    </YMaps>
    );
  }
}
export default YandexMap;