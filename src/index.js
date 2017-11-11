import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Map extends Component {
  componentDidMount() {
    const {mapZoom, mapCenter, mapId} = this.props;

    const map = new window.google.maps.Map(this.refs[this.props.mapId], {
      zoom: mapZoom,
      center: mapCenter
    });
  }

  render() {

    return (
      <div style={this.props.mapStyle} ref={this.props.mapId}>
        
      </div>
    );
  }
}

Map.defaultProps = {
  mapZoom: 4,
  mapCenter: {lat: -8.7463596, lng: 115.1679037 },
  mapId: "reactJsGoogleMap",
  mapClassName: '',
  mapStyle: {}
}

Map.PropTypes = {
  mapZoom: PropTypes.number,
  mapCenter: PropTypes.object,
  mapId: PropTypes.string,
  mapClassName: PropTypes.string,
  mapStyle: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default Map;
