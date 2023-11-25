"use client";
import useSWR from "swr";
import { useState, createContext } from "react";
const Contex = createContext(null);

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Provider = ({ children }) => {
  const [menus, setMenu] = useState("hidden");
  const [tabel, setTabel] = useState([0, 5]);

  const { data } = useSWR("/api", fetcher);

  const UserDatass = data?.message["m2m:list"].map((item, i) => {
    const { ct, con, rn } = item["m2m:cin"];
    const jam = ct.substring(9, 11);
    const menit = ct.substring(11, 13);
    const obj = JSON.parse(con);
    const Temperature = obj["Temperature 1"];
    const Humidity = obj["Humidity 1"];
    return {
      no: i,
      id: rn,
      year: `${jam}:${menit}`,
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
