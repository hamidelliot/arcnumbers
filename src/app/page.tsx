"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [wallet, setWallet] = useState("");

  async function connectWallet() {
    if (!window.ethereum) {
      alert("Install MetaMask");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setWallet(accounts[0]);
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <nav className="flex justify-between p-6">
        <h1 className="text-2xl font-bold">
          Arc<span className="text-blue-500">Numbers</span>
        </h1>

        <button
          onClick={connectWallet}
          className="rounded-xl bg-white px-5 py-2 text-black"
        >
          {wallet
            ? wallet.slice(0,6)+"..."
            : "Connect Wallet"}
        </button>
      </nav>


      <section className="text-center mt-20">
        <h2 className="text-5xl font-bold">
          Virtual Numbers Powered by Arc
        </h2>

        <p className="mt-5 text-gray-400">
          Buy numbers with Arc Network
        </p>


        <Link
          href="/numbers"
          className="inline-block mt-8 bg-blue-600 px-8 py-3 rounded-xl"
        >
          Browse Numbers
        </Link>

      </section>

    </main>
  );
}
