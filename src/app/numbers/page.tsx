export default function NumbersPage() {
  const numbers = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    country: ["USA", "UK", "Canada"][i % 3],
    service: ["Telegram", "WhatsApp", "Google"][i % 3],
    price: (1 + (i % 5) * 0.5).toFixed(2),
  }));

  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <h1 className="mb-6 text-3xl font-bold">Available Numbers</h1>

      <div className="grid gap-4">
        {numbers.map((n) => (
          <div key={n.id} className="rounded-xl bg-zinc-900 p-4">
            <div>
              {n.country} • {n.service}
            </div>
            <div>{n.price} USDC</div>
          </div>
        ))}
      </div>
    </main>
  );
}
