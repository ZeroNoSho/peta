"use client";
import { useState, useEffect, createContext } from "react";
import axios from "axios";
const Contex = createContext(null);

const Provider = ({ children }) => {
  const [menus, setMenu] = useState("hidden");
  const [UserDatass, setUserData] = useState([]);
  const [tabel, setTabel] = useState([0, 5]);

  useEffect(() => {
    getData();
  }, []);

  //token
  const getData = async () => {
    axios
      .get(`/api`)
      .then((res) => {
        const hasil = res.data.message["m2m:list"].map((item, i) => {
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
        setUserData(hasil);
        console.log(hasil);
      })
      .catch((err) => {});
  };

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
