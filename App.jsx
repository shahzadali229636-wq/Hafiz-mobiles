export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
      <header className="bg-black text-white py-6 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-5xl font-extrabold tracking-wide text-yellow-400">
              HAFIZ MOBILES
            </h1>
            <p className="text-gray-300 mt-2 text-lg">
              All Mobile Accessories Available Here
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-right">
            <p className="text-xl font-bold">📞 0323-6029636</p>
            <p className="text-sm text-gray-300">EasyPaisa & JazzCash Available</p>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-6xl font-black leading-tight">
            Premium Mobile Accessories Shop
          </h2>

          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Covers, Glass Protectors, Chargers, Handsfree, Cables,
            Power Banks aur tamam mobile accessories dastiyab hain.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-2xl text-lg font-bold shadow-lg">
              WhatsApp Order
            </button>

            <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg">
              Contact Now
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop"
            alt="Mobile Shop"
            className="rounded-2xl w-full h-[420px] object-cover"
          />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Products
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Mobile Covers',
              'Chargers & Cables',
              'Handsfree',
              'Glass Protectors',
            ].map((title, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl overflow-hidden shadow-xl p-8 text-center"
              >
                <h3 className="text-2xl font-bold">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-10">
            Available Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-lg">
            <div className="bg-white/10 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">EasyPaisa</h3>
              <p>Money Transfer & Bills Payment Available</p>
            </div>

            <div className="bg-white/10 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">JazzCash</h3>
              <p>Fast Payment & Mobile Load Service</p>
            </div>

            <div className="bg-white/10 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Accessories</h3>
              <p>All Mobile Accessories Available Here</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-400 py-6 text-center text-sm">
        © 2026 Hafiz Mobiles — All Rights Reserved
      </footer>
    </div>
  )
}
