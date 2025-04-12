import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { diocesesData } from "./data";
import "./App.css";

const center = [53.04548200263121, -1.1891462992946762]; //Midlands
//[51.49652512247721, -0.14001853524653077]; //Westminster Cathedral Piazza

function App() {
  console.log("Ad Maiorem Dei Gloriam");
  return (
    <MapContainer
      center={center}
      zoom={6}
      style={{ width: "100wv", height: "100vh" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=KEkSXTZni1ygdkq0Q875"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {diocesesData.features.map((diocese, index) => {
        const coordinates = diocese.geometry.coordinates[0].map((item) => [
          item[1],
          item[0],
        ]);

        return (
          <Polygon
            key={index}
            pathOptions={{
              fillColor: "#FD8D3C",
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              dashArray: 3,
              color: "white",
            }}
            positions={coordinates}
            eventHandlers={{
              mouseover: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillOpacity: 0.7,
                  weight: 5,
                  dashArray: "",
                  color: "#667",
                  fillColor: "#D45962",
                });
              },
              mouseout: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillOpacity: 0.7,
                  weight: 2,
                  dashArray: "3",
                  color: "white",
                  fillColor: "#FD8D3C",
                });
              },
            }}
          />
        );
      })}
    </MapContainer>
  );
}

export default App;
