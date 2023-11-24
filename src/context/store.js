"use client";
import { useState, useEffect, createContext } from "react";
import axios from "axios";
const Contex = createContext(null);

const Provider = ({ children }) => {
  const [menus, setMenu] = useState("hidden");
  const [data, setData] = useState();
  const [UserDatass, setUserData] = useState(
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    }
  );

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
        UserDatass,
      }}
    >
      {children}
    </Contex.Provider>
  );
};

export { Contex, Provider };
