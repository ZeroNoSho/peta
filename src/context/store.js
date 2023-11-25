"use client";
import useSWR from "swr";
import { useState, createContext } from "react";
const Contex = createContext(null);

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Provider = ({ children }) => {
  const [menus, setMenu] = useState("hidden");
  const [tabel, setTabel] = useState([0, 25]);

  const { data, error } = useSWR("/api", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden  opacity-75 flex flex-col items-center justify-center">
        <div className="loader  rounded-full border-4 border-t-4  h-12 w-12 mb-4"></div>
        <h2 className="text-center text-xl font-semibold">Loading...</h2>
        <p className="w-1/3 text-center ">
          This may take a few seconds, please don't close this page.
        </p>
      </div>
    );

  const UserDatass = data?.message["m2m:list"].map((item, i) => {
    const { ct, con, rn } = item["m2m:cin"];
    const tahun = ct.substring(0, 4);
    const jam = ct.substring(9, 11);
    const menit = ct.substring(11, 13);
    const bulan = ct.substring(4, 6);
    const tanggal = ct.substring(6, 8);
    const obj = JSON.parse(con);
    const Temperature = obj["Temperature 1"];
    const Humidity = obj["Humidity 1"];
    return {
      no: i,
      id: rn,
      year: `${tahun}-${bulan}-${tanggal}/${jam}:${menit}`,
      Temperature,
      Humidity,
    };
  });

  return (
    <Contex.Provider
      value={{
        menus,
        setMenu,
        UserDatass,
        tabel,
        setTabel,
      }}
    >
      {children}
    </Contex.Provider>
  );
};

export { Contex, Provider };
