import { useContext } from "react";
import { Contex } from "src/context/store";

export default function Menubar() {
  const { setMenu, menus } = useContext(Contex);
  return (
    <div
      className={`fixed top-8 right-8 cursor-pointer p-4 z-10 bg-white rounded-md ${
        menus == "hidden" ? "" : "hidden"
      }`}
      onClick={() => setMenu("block")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
        onClick={() => setMenu("block")}
      >
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
      </svg>
    </div>
  );
}
