import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-260, 0, 3],
        center: [-28, 50],
        scale: 1000
      }}
      style={{width:"100%", height: "100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#020024"
        stroke="white"
        strokeWidth={2}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-123.062364, 49.230931 ]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Vancouver"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
