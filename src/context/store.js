"use client";
import { useState, useEffect, createContext } from "react";
import axios from "axios";
const Contex = createContext(null);

const Provider = ({ children }) => {
  const [menus, setMenu] = useState("hidden");
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  //token
  const getData = async () => {
    axios
      .get(`http://localhost:3000/api`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  };

  return (
    <Contex.Provider
      value={{
        menus,
        setMenu,
        data,
      }}
    >
      {children}
    </Contex.Provider>
  );
};

export { Contex, Provider };
