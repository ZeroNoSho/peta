import { Contex } from "src/context/store";
import { useContext } from "react";
export default function Legen() {
  const { UserDatass } = useContext(Contex);
  return (
    <div className="blue text-white fixed bottom-8 right-8 w-60 p-4 z-10 bg-white rounded-md">
      <div className="flex my-1">
        <p className="mr-auto">Temperature</p>
        &emsp; {UserDatass[0].Temperature} °C
      </div>
      <div className="flex my-1">
        <p className="mr-auto">Humidity</p>&emsp; {UserDatass[0].Humidity} %
      </div>
    </div>
  );
}
