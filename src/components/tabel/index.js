import Button from "@components/buttontable";
import { Contex } from "src/context/store";
import { useContext } from "react";

export default function Table() {
  const { UserDatass, tabel } = useContext(Contex);
  return (
    <div className="bg-white w-11/12 m-auto rounded-lg mt-20 pb-10">
      <div className="wrapper mt-5">
        <table className={`border-collapse table-auto text-sm w-11/12 m-auto`}>
          <thead className="blue2 text-slate-100">
            <tr>
              <th className={`border border-gray-300 font-medium p-4 pb-3  `}>
                No
              </th>
              <th className={`border border-gray-300 font-medium p-4 pb-3  `}>
                id
              </th>
              <th className={`border border-gray-300 font-medium p-4 pb-3  `}>
                time
              </th>
              <th className={`border border-gray-300 font-medium p-4 pb-3   `}>
                Temperature
              </th>
              <th className={`border border-gray-300 font-medium p-4 pb-3   `}>
                Humidity
              </th>
            </tr>
          </thead>
          <tbody>
            {UserDatass?.slice(tabel[0], tabel[1]).map((item, i) => (
              <tr key={item.id} className="text-center">
                <td className={`border border-gray-300 p-4 text-slate-500 `}>
                  <p>{item.no + 1}</p>
                </td>
                <td className={`border border-gray-300 p-4 text-slate-500 `}>
                  <p>{item.id}</p>
                </td>
                <td className={`border border-gray-300 p-4 text-slate-500  `}>
                  <p>{item.year}</p>
                </td>
                <td className={`border border-gray-300 p-4 text-slate-500  `}>
                  <p>{item.Temperature}</p>
                </td>
                <td className={`border border-gray-300 p-4 text-slate-500  `}>
                  <p> {item.Humidity}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button></Button>
    </div>
  );
}
