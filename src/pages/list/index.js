import Map from "@components/Map";

const DEFAULT_CENTER = [-7.3797534, 109.2401397];
const DEFAULT_MARKER = [-7.377049640788257, 109.24465090501957];

export default function Home() {
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
                Kejernihan&emsp;: 25,37037 <br />
                Keasaman&emsp;: 21,9028 <br />
                Jarak &emsp;&emsp;&emsp;: 31,586
              </div>
            </Popup>
          </Marker>
        </>
      )}
    </Map>
  );
}
