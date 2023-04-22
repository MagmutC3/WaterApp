import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import { MapContainer, TileLayer } from "react-leaflet";
import osm from "./osm-providers";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";

const BasicMap = () => {
    const history = useNavigate ();
    const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();

    return (
            <div className="row">
                        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                            <TileLayer
                                url={osm.maptiler.url}
                                attribution={osm.maptiler.attribution}
                            />
                        </MapContainer>
                        <button onClick={() => history(-1)}>Go Back</button>
            </div>
    );
};

export default BasicMap;