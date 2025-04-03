import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Home from "./Home";
import NavBar from "./components/NavBar";

export default function Index() {
  return (
    <>
      <div className="flex relative flex-col">
        <Home />
      </div>
    </>
  );
}
