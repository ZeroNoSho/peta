import Menu from "@components/menu";
import LineChart from "@components/linebar";
import Menubar from "@components/menubtn";
import Table from "@components/tabel";
import { UserData } from "./Data";
import { useState } from "react";

export default function Home() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Suhu",
        data: UserData.map((data) => data.userGain),
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
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Humidity",
        data: UserData.map((data) => data.userGain),
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
  const [userData3, setUserData3] = useState(false);
  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="w-auto h-auto flex"
    >
      <Menu></Menu>
      <div className="w-full">
        <div className="mb-10">
          <p className="text-3xl font-semibold pt-10 text-center text-current text-gray-500">
            Dashboard
          </p>
        </div>
        <div className="flex flex-row">
          <div className="w-auto h-auto basis-1/4 m-auto">
            <LineChart chartData={userData} />
          </div>
          <div className="w-auto h-auto basis-1/4 m-auto">
            <LineChart chartData={userData2} />
          </div>
        </div>
        <Table></Table>
      </div>

      <Menubar></Menubar>
    </div>
  );
}
