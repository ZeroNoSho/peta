import Menu from "@components/menu";
import LineChart from "@components/linebar";
import Menubar from "@components/menubtn";
import Table from "@components/tabel";
import { Contex } from "src/context/store";
import { useState, useEffect, useContext } from "react";

export default function Home() {
  const { UserDatass } = useContext(Contex);

  const [userData, setUserData] = useState({
    labels: UserDatass && UserDatass?.map((data) => data.year),
    datasets: [
      {
        label: "Temperature",
        data: UserDatass && UserDatass?.map((data) => data.Temperature),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 2,
      },
    ],
  });
  const [userData2, setUserData2] = useState({
    labels: UserDatass && UserDatass?.map((data) => data.year),
    datasets: [
      {
        label: "Humidity",
        data: UserDatass && UserDatass?.map((data) => data.Humidity),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    setUserData({
      labels: UserDatass && UserDatass?.map((data) => data.year),
      datasets: [
        {
          label: "Temperature",
          data: UserDatass && UserDatass?.map((data) => data.Temperature),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderWidth: 2,
        },
      ],
    });
    setUserData2({
      labels: UserDatass && UserDatass?.map((data) => data.year),
      datasets: [
        {
          label: "Humidity",
          data: UserDatass && UserDatass?.map((data) => data.Humidity),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
          borderWidth: 2,
        },
      ],
    });
  }, [UserDatass]);

  return (
    <div style={{ width: "100%" }} className="w-auto h-auto flex">
      <Menu></Menu>
      <div className="w-full">
        <div className="mb-10">
          <p className="text-3xl font-semibold pt-10 text-center text-current text-gray-500">
            Dashboard
          </p>
        </div>
        <div className="flex flex-row max-[700px]:block">
          <div className="w-auto h-auto basis-1/4 m-auto">
            <LineChart chartData={userData} />
          </div>
          <div className="w-auto h-auto basis-1/4 m-auto ">
            <LineChart chartData={userData2} />
          </div>
        </div>
        <Table></Table>
      </div>

      <Menubar></Menubar>
    </div>
  );
}
