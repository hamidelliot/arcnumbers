export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">
          Arc<span className="text-blue-500">Numbers</span>
        </h1>

        <button className="rounded-xl bg-white text-black px-5 py-2">
          Connect Wallet
        </button>
      </nav>

      <section className="flex flex-col items-center text-center mt-20 px-6">
        <h2 className="text-5xl font-bold">
          Virtual Numbers Powered by Arc
        </h2>

        <p className="mt-5 text-gray-400 max-w-xl">
          Buy virtual numbers instantly and pay securely with USDC on Arc Network.
        </p>

        <button className="mt-8 bg-blue-600 px-8 py-3 rounded-xl">
          Browse Numbers
        </button>
      </section>

      <section className="grid md:grid-cols-3 gap-5 p-8 mt-10">
        <Card country="USA" service="Telegram" price="1.50 USDC" />
        <Card country="UK" service="WhatsApp" price="2.00 USDC" />
        <Card country="Canada" service="Google" price="1.20 USDC" />
      </section>
    </main>
  );
}

function Card({country, service, price}: {
  country:string;
  service:string;
  price:string;
}) {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl">
      <h3 className="text-xl font-bold">{country}</h3>
      <p className="text-gray-400">{service}</p>
      <p className="mt-3">{price}</p>

      <button className="mt-5 w-full bg-white text-black rounded-xl py-2">
        Buy Now
      </button>
    </div>
  );
}
