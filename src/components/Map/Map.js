import dynamic from "next/dynamic";
import Menu from "@components/menu";
import Legen from "@components/legend";
import Menubar from "@components/menubtn";
const DynamicMap = dynamic(() => import("./DynamicMap"), {
  ssr: false,
});

const Map = (props) => {
  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="flex w-auto h-auto"
    >
      <Menu />
      <DynamicMap {...props} className={"z-0"} />
      <Legen />
      <Menubar />
    </div>
  );
};

export default Map;
