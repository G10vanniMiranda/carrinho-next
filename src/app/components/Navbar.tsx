'use client'
import Link from "next/link";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState("hidden");
  const [btnClose, setBtnClose] = useState("");
  const [btnToogleClose, setBtnToogleClose] = useState("");

  function toggleMenu(event: any) {
    event.preventDefault();

    setIsOpen("flex");
    setBtnClose("hidden")
    setBtnToogleClose("block")
  }

  function toggleMenuClose(event: any) {
    event.preventDefault();

    setIsOpen("hidden");
    setBtnClose("block")
    setBtnToogleClose("hidden")
  }
  return (
    <header className="md:bg-[#1D1D1D] h-15 flex items-center justify-center px-2">

      <ul className="gap-5 hidden md:flex">
        <li className="px-2 py-0.5 rounded-sm hover:bg-[#171b52] transition-colors duration-300">
          <Link href="/">Dashboard</Link>
        </li>
        <li className="px-2 py-0.5 rounded-sm hover:bg-[#171b52] transition-colors duration-300">
          <Link href="/carrinho">Meu Carrinho</Link>
        </li>
      </ul>

      <div className={`bg-slate-200 w-[83%] h-screen z-10 ${isOpen}`}>

      </div>

      <IoClose onClick={toggleMenuClose} className={`md:hidden absolute right-5 w-10 h-10 p-2 border text-red-600 z-20 ${btnToogleClose}`} />
      <SlMenu onClick={toggleMenu} className={`md:hidden absolute right-5 w-10 h-10 p-2  ${btnClose}`} />
    </header>
  );
}
