import Map from "@components/Map";
import { Contex } from "src/context/store";
import { useContext } from "react";

export default function Home() {
  const { UserDatass } = useContext(Contex);

  const DEFAULT_CENTER = [
    UserDatass[0].location.latitude,
    UserDatass[0].location.longitude,
  ];
  const DEFAULT_MARKER = [
    UserDatass[0].location.latitude,
    UserDatass[0].location.longitude,
  ];
  return (
    <Map className={"w-auto h-auto"} center={DEFAULT_CENTER} zoom={16}>
      {({ TileLayer, Marker, Popup }) => (
        <>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={DEFAULT_MARKER}>
            <Popup>
              <div>
                Kejernihan&emsp;: {UserDatass[0].Temperature} <br />
                Keasaman&emsp;: {UserDatass[0].Humidity} <br />
              </div>
            </Popup>
          </Marker>
        </>
      )}
    </Map>
  );
}
