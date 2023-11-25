"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faList, faMap } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Contex } from "src/context/store";

export default function Menu() {
  const { menus, setMenu } = useContext(Contex);

  return (
    <div className={`w-96 blue text-slate-100 h-auto ${menus}`}>
      <div>
        <div className="flex flex-row  py-5 cursor-default">
          <p className="ui-font-serif font-semibold text-xl text-center basis-1/6">
            <FontAwesomeIcon icon={faMap} />
          </p>
          <h3 className="ui-font-serif font-semibold text-xl basis-4/6">
            <Link href="/">
              <span className="pr-2">S</span>
              <span className="pr-2">i</span>
              <span className="pr-2">L</span>
              <span className="pr-2">o</span>
              <span className="pr-2">o</span>
              <span className="pr-2">k</span>
            </Link>
          </h3>
          <svg
            onClick={() => setMenu("hidden")}
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
            className="cursor-pointer ui-font-serif font-semibold text-xl text-center basis-1/6 m-auto "
          >
            <path
              onClick={() => setMenu("hidden")}
              fill="#f1f5f9"
              className="cursor-pointer"
              d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
            />
          </svg>
        </div>

        <hr />

        <div className="pt-4">
          <div className="flex flex-row py-4 cursor-pointer">
            <p className="basis-1/6 text-center">
              <FontAwesomeIcon icon={faList} />
            </p>
            <Link href="/" className="basis-5/6">
              Menu
            </Link>
          </div>
          <div className="flex flex-row py-4 cursor-pointer">
            <p className="basis-1/6 text-center">
              <FontAwesomeIcon icon={faCompass} />
            </p>
            <Link href="/list" className="basis-5/6">
              list sensor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
