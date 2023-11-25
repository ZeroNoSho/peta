import Menu from "@components/menu";
import LineChart from "@components/linebar";
import Menubar from "@components/menubtn";
import Table from "@components/tabel";
import { Contex } from "src/context/store";
import { useState, useEffect, useContext } from "react";

export default function Home() {
  const skipped = (ctx, value) => {
    ctx.p0.skip || ctx.p1.skip ? value : undefined;
  };

  const down = (ctx, value) => {
    return ctx.p0.parsed.y < 26 ? value : undefined;
  };

  const down2 = (ctx, value) => {
    return ctx.p0.parsed.y >= 80 && ctx.p0.parsed.y <= 90 ? value : undefined;
  };

  const { UserDatass } = useContext(Contex);

  const [userData, setUserData] = useState({
    labels: UserDatass && UserDatass?.slice(0, 100).map((data) => data.year),
    datasets: [
      {
        label: "Temperature",
        data:
          UserDatass &&
          UserDatass?.slice(0, 100).map((data) => data.Temperature),
        borderWidth: 2,
      },
    ],
  });
  const [userData2, setUserData2] = useState({
    labels: UserDatass && UserDatass?.slice(0, 100).map((data) => data.year),
    datasets: [
      {
        label: "Humidity",
        data:
          UserDatass && UserDatass?.slice(0, 100).map((data) => data.Humidity),
        borderColor: "rgb(11, 111, 80)",
        backgroundColor: "rgb(11, 111, 80)",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    setUserData({
      labels: UserDatass && UserDatass?.slice(0, 100).map((data) => data.year),
      datasets: [
        {
          label: "Temperature ",
          data:
            UserDatass &&
            UserDatass?.slice(0, 100).map((data) => data.Temperature),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",

          pointBorderColor: (context) => {
            return context.parsed.y < 26 ? "green" : "rgb(255, 99, 132)";
          },
          pointBackgroundColor: (context) => {
            return context.parsed.y < 26 ? "green" : "rgb(255, 99, 132)";
          },
          pointRadius: 2,
          borderWidth: 2,
          segment: {
            borderColor: (ctx) => down(ctx, "rgb(11, 111, 80)"),
          },

          spanGaps: true,
        },
        {
          label: `kurang dari 26 °C`,
          borderColor: "rgb(11, 111, 80)",
          backgroundColor: "rgb(11, 111, 80)",
        },
      ],
    });
    setUserData2({
      labels: UserDatass && UserDatass?.slice(0, 100).map((data) => data.year),
      datasets: [
        {
          label: "Humidity",
          data:
            UserDatass &&
            UserDatass?.slice(0, 100).map((data) => data.Humidity),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          pointBorderColor: (context) => {
            return context.raw >= 80 && context.raw <= 90
              ? "green"
              : "rgb(255, 99, 132) ";
          },
          pointBackgroundColor: (context) => {
            return context.raw >= 80 && context.raw <= 90
              ? "green"
              : "rgb(255, 99, 132) ";
          },
          pointRadius: 2,
          borderWidth: 2,
          segment: {
            borderColor: (ctx) => down2(ctx, "rgb(11, 111, 80)"),
          },
          spanGaps: true,
        },
        {
          label: " 80% ~ 90%",
          borderColor: "rgb(11, 111, 80)",
          backgroundColor: "rgb(11, 111, 80)",
        },
      ],
    });
  }, [UserDatass]);

  return (
    <div style={{ width: "100%" }} className="w-auto h-auto flex">
      <Menu></Menu>
      <div className="w-full">
        <div className="mt-10 w-[75%] m-auto max-[800px]:w-[100%]">
          <img className="mx-auto" src="logo.png" alt="Picture of the author" />
        </div>
        <div className="mb-10 w-[75%] m-auto max-[800px]:w-[100%] ">
          <p className="text-3xl font-semibold pt-5 text-center text-current text-gray-500">
            Dashboard Monitoring <br />
            <span>Suhu Dan Kelembapan</span>
          </p>
        </div>
        <div className="flex flex-row w-[75%] m-auto max-[800px]:w-[100%]  max-[700px]:block">
          <div className="basis-1/2 mr-auto">
            <div>
              <p className="text-center">Driver: xxxxxx</p>
              <p className="text-center"> No Pol Kendaraan: R 1231 PL</p>
              <p className="text-center">Bahan yang di angkut: Stoberi</p>
            </div>
          </div>
          <div className="basis-1/2  ml-auto  max-[700px]:mt-10">
            <p className="text-center">Berat: 10kg</p>
            <p className="text-center">Asal Keberangkatan: Purbalinga</p>
            <p className="text-center">Tujuan Keberangkatan: Cilacap</p>
          </div>
        </div>

        <div className="w-[75%] m-auto max-[800px]:w-[100%] max-[800px]:w-[100%]">
          <div className="w-auto h-auto mt-10">
            <LineChart chartData={userData} />
          </div>
          <div className="w-auto h-auto mt-20">
            <LineChart chartData={userData2} />
          </div>
        </div>
        <p className="text-center mt-10 text-slate-500">
          Jumlah Semua Tabel: {UserDatass.length}
        </p>
        <Table></Table>
      </div>

      <Menubar></Menubar>
    </div>
  );
}
