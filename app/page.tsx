import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-purple-800/50 z-10" />
        <div className="absolute inset-0 bg-[url('/Your-adventure-starts-here1-1024x724.jpeg')] bg-cover bg-center" />
        
        <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-lg">
            Explore Bled on Two Wheels
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-light">
            Mountain Bikes • E-Bikes • Guided Tours
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
            From the heart of Lake Bled & the Julian Alps
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="#rentals" 
              className="bg-white text-purple-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-100 transition-all transform hover:scale-105"
            >
              Rent a Bike
            </Link>
            <Link 
              href="#tours" 
              className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 border-2 border-white"
            >
              Book a Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-wider text-purple-600 font-semibold mb-4">Who we are</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Welcome to BledBike
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            Experience the beauty of Lake Bled and the Julian Alps on our premium mountain bikes and e-bikes. 
            Whether you&apos;re a seasoned cyclist or a casual explorer, we have the perfect ride waiting for you.
          </p>
        </div>
      </section>

      {/* Rentals */}
      <section id="rentals" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Choose Your Ride
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mountain Bike */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <span className="text-8xl">🚵</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Mountain Bike</h3>
                <p className="text-gray-600 mb-6">
                  High-quality hardtail and full-suspension bikes perfect for Bled&apos;s trails.
                </p>
                <div className="text-3xl font-bold text-purple-600 mb-6">
                  €30<span className="text-lg font-normal text-gray-500">/day</span>
                </div>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li>✓ Premium suspension</li>
                  <li>✓ Helmet included</li>
                  <li>✓ Lock & repair kit</li>
                  <li>✓ Trail recommendations</li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                  Book Now
                </button>
              </div>
            </div>

            {/* E-Bike */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border-4 border-purple-600">
              <div className="bg-purple-600 text-white text-center py-2 font-semibold">
                MOST POPULAR
              </div>
              <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-8xl">⚡</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">E-Bike</h3>
                <p className="text-gray-600 mb-6">
                  Electric-assist bikes for effortless hill climbs and extended adventures.
                </p>
                <div className="text-3xl font-bold text-purple-600 mb-6">
                  €50<span className="text-lg font-normal text-gray-500">/day</span>
                </div>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li>✓ 80km+ range</li>
                  <li>✓ Premium Bosch motor</li>
                  <li>✓ All safety equipment</li>
                  <li>✓ GPS navigation included</li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                  Book Now
                </button>
              </div>
            </div>

            {/* Kids Bike */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <span className="text-8xl">👨‍👩‍👧‍👦</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Family Package</h3>
                <p className="text-gray-600 mb-6">
                  Kids bikes and tag-alongs for family adventures around the lake.
                </p>
                <div className="text-3xl font-bold text-purple-600 mb-6">
                  €20<span className="text-lg font-normal text-gray-500">/day</span>
                </div>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li>✓ Ages 4-12</li>
                  <li>✓ Safety-first design</li>
                  <li>✓ Child helmets included</li>
                  <li>✓ Family route maps</li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guided Tours */}
      <section id="tours" className="py-20 px-4 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Guided Adventures
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Lake Bled Loop */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition">
              <div className="text-5xl mb-4">🏔️</div>
              <h3 className="text-3xl font-bold mb-4">Lake Bled Panorama</h3>
              <p className="text-lg mb-6 opacity-90">
                Scenic 15km loop around Lake Bled with photo stops at the best viewpoints. Perfect for all skill levels.
              </p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold">€35</span>
                <span className="text-lg opacity-75">/person</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li>⏱ 2-3 hours</li>
                <li>🚴 Easy difficulty</li>
                <li>👥 Groups 2-8</li>
                <li>📸 Photo opportunities</li>
              </ul>
              <button className="w-full bg-white text-purple-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Book Tour
              </button>
            </div>

            {/* Vintgar Gorge */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition">
              <div className="text-5xl mb-4">💧</div>
              <h3 className="text-3xl font-bold mb-4">Vintgar Gorge Adventure</h3>
              <p className="text-lg mb-6 opacity-90">
                Bike to the stunning Vintgar Gorge with guided walkthrough of the canyon. Includes gorge entry ticket.
              </p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold">€45</span>
                <span className="text-lg opacity-75">/person</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li>⏱ 4 hours</li>
                <li>🚴 Moderate difficulty</li>
                <li>👥 Groups 2-10</li>
                <li>🎫 Entry ticket included</li>
              </ul>
              <button className="w-full bg-white text-purple-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Book Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Why Choose BledBike?
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-2">Expert Guides</h3>
              <p className="text-gray-600">Years of local trail knowledge</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Premium Bikes</h3>
              <p className="text-gray-600">Top brands, maintained daily</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2">Perfect Location</h3>
              <p className="text-gray-600">5 min walk from Lake Bled</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Fully Insured</h3>
              <p className="text-gray-600">All equipment & riders covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-wider text-purple-600 font-semibold mb-4">Location</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Find Us in Bled
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Located steps from Lake Bled, right in the heart of Slovenia&apos;s outdoor paradise.
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-bold text-lg mb-4 text-gray-900">📍 Address</h4>
                <p className="text-gray-600">
                  Cesta svobode 15<br />
                  4260 Bled<br />
                  Slovenia
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4 text-gray-900">⏰ Hours</h4>
                <p className="text-gray-600">
                  Daily: 8:00 AM - 8:00 PM<br />
                  Peak Season (June-Sept)<br />
                  Winter: By appointment
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <a 
              href="tel:+38640123456" 
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition mr-4"
            >
              📞 +386 40 123 456
            </a>
            <a 
              href="mailto:info@bledbike.com" 
              className="inline-block bg-white text-purple-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition border-2 border-purple-600"
            >
              ✉️ info@bledbike.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
