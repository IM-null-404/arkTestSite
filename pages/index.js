import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Homepage from "./Homepage";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <div className="flex relative flex-col">
        <Homepage />
      </div>
    </>
  );
}
