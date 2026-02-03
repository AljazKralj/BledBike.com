import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CookieConsent from "./components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BledBike | Mountain Bike & E-Bike Rentals in Bled Slovenia",
  description: "Rent premium mountain bikes and e-bikes in Lake Bled, Slovenia. Guided tours through the Julian Alps. Perfect for families, beginners, and experienced cyclists.",
  keywords: "bled bike rental, e-bike bled, mountain bike bled slovenia, cycling lake bled, bike tours slovenia",
  openGraph: {
    title: "BledBike - Mountain Bike & E-Bike Rentals",
    description: "Explore Lake Bled and the Julian Alps on two wheels",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Header */}
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-purple-900">
              🚴 BledBike
            </Link>
            
            <div className="hidden md:flex gap-8">
              <Link href="#rentals" className="text-gray-700 hover:text-purple-600 font-medium transition">
                Rentals
              </Link>
              <Link href="#tours" className="text-gray-700 hover:text-purple-600 font-medium transition">
                Tours
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-purple-600 font-medium transition">
                About
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-purple-600 font-medium transition">
                Contact
              </Link>
            </div>

            <Link 
              href="#book" 
              className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition"
            >
              Book Now
            </Link>
          </nav>
        </header>

        {/* Add padding to account for fixed header */}
        <div className="pt-16">
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">🚴 BledBike</h3>
              <p className="text-gray-400">
                Premium bike rentals and guided tours in the heart of Slovenia&apos;s Julian Alps.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#rentals" className="hover:text-white transition">Rentals</Link></li>
                <li><Link href="#tours" className="hover:text-white transition">Tours</Link></li>
                <li><Link href="#about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +386 40 123 456</li>
                <li>✉️ info@bledbike.com</li>
                <li>📍 Cesta svobode 15, Bled</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com/bledbike" className="text-2xl hover:text-purple-400 transition">📷</a>
                <a href="https://facebook.com/bledbike" className="text-2xl hover:text-purple-400 transition">📘</a>
                <a href="https://tripadvisor.com" className="text-2xl hover:text-purple-400 transition">✈️</a>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} BledBike. All rights reserved.</p>
          </div>
        </footer>

        {/* Cookie Consent Banner */}
        <CookieConsent />
      </body>
    </html>
  );
}
