"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Tooltip, CircleMarker } from "react-leaflet";
import { useState } from "react";
import nodeList from "@/utils/nodelist.json";


export default function NodesMap() {
  const [coord, setCoord] = useState([51.505, -0.09]);

  const tileUrl = 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}' + (window && window.devicePixelRatio > 1 ? '@2x.png' : '.png');

  return (
    <div>
      <MapContainer style={{ height: "550px", width: "2096px" }} center={coord} zoom={2} scrollWheelZoom={false} zoomControl={false}>
            <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url={tileUrl}
            subdomains={["a", "b", "c", "d"]}
            maxZoom={20}
            minZoom={0}
            />
            {nodeList.map((node) => (
                <CircleMarker fillColor="#deffdb" color="#c8fac3" radius={5} weight={1} key={node.city} center={[node.lat, node.lon]}>
                    <Tooltip>{node.city}</Tooltip>
                </CircleMarker>
            ))}
        </MapContainer>
    </div>
  );
}