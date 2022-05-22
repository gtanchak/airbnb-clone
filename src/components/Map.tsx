import { useState } from "react";
import ReactMapGL from "react-map-gl";
import { MAP_STYLE } from "../constants";

const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });
  return (
    <ReactMapGL
      mapStyle={MAP_STYLE}
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
    />
  );
};

export default Map;
