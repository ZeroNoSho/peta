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
          {UserDatass &&
            UserDatass?.slice(0, 10).map((e) => (
              <Marker position={[e.location.latitude, e.location.longitude]}>
                <Popup>
                  <div>
                    Temperature&emsp;: {e.Temperature} <br />
                    Humidity&emsp;: {e.Humidity} <br />
                  </div>
                </Popup>
              </Marker>
            ))}
        </>
      )}
    </Map>
  );
}
