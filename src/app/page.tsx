export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex justify-between p-6">
        <h1 className="text-3xl font-bold">
          Arc<span className="text-blue-500">Numbers</span>
        </h1>

        <button className="bg-white text-black px-4 py-2 rounded-xl">
          Connect Wallet
        </button>
      </nav>

      <section className="text-center mt-20 px-5">
        <h2 className="text-5xl font-bold">
          Buy Virtual Numbers
        </h2>

        <p className="text-gray-400 mt-5">
          Instant virtual numbers with USDC payment on Arc Network.
        </p>

        <button className="mt-8 bg-blue-600 px-8 py-3 rounded-xl">
          Browse Numbers
        </button>
      </section>

      <section className="grid gap-5 p-6 mt-10">
        <div className="bg-zinc-900 rounded-2xl p-6">
          <h3 className="text-xl">🇺🇸 USA Number</h3>
          <p className="text-gray-400">Telegram</p>
          <p className="mt-3">1.50 USDC</p>

          <button className="mt-4 bg-white text-black px-5 py-2 rounded-xl">
            Buy Now
          </button>
        </div>
      </section>
    </main>
  );
}

