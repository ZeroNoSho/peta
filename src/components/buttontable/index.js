import { Contex } from "src/context/store";
import { useContext } from "react";
export default function Button() {
  const { tabel, setTabel, UserDatass } = useContext(Contex);

  return (
    <div className="flex flex-row w-[88%] m-auto mt-10">
      <button
        onClick={() =>
          tabel[0] === 0 ? "" : setTabel([tabel[0] - 5, tabel[1] - 5])
        }
        className="blue text-white basis-1/4 inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      >
        Previous
      </button>
      <p className="basis-1/2 text-center text-sm font-medium text-gray-700 m-auto">
        {tabel[0] + 1} - {tabel[1]}
      </p>
      <button
        onClick={() =>
          tabel[1] >= UserDatass.length
            ? ""
            : setTabel([tabel[1], tabel[1] + 5])
        }
        className="blue text-white basis-1/4 m-auto inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      >
        Next
      </button>
    </div>
  );
}
