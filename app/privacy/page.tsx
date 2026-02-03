export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy Policy & Cookie Notice</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              When you book with BledBike, we collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Name and contact information (email, phone)</li>
              <li>Booking details (dates, bike preferences)</li>
              <li>Payment information (processed securely through Stripe)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Process your bike rental bookings</li>
              <li>Send booking confirmations and reminders</li>
              <li>Improve our services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Cookies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies to enhance your browsing experience. Our website uses:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h3 className="font-bold text-lg mb-3 text-gray-900">Essential Cookies</h3>
              <p className="text-gray-700 mb-2">
                Required for the website to function properly. These cannot be disabled.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Session management</li>
                <li>Security features</li>
                <li>Cookie consent preferences</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h3 className="font-bold text-lg mb-3 text-gray-900">Analytics Cookies (Optional)</h3>
              <p className="text-gray-700 mb-2">
                Help us understand how visitors use our site.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Google Analytics (anonymized)</li>
                <li>Vercel Analytics</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Your Rights (GDPR)</h2>
            <p className="text-gray-700 mb-4">
              Under GDPR, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate security measures to protect your personal information. 
              Payment data is processed securely through Stripe and never stored on our servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Data Retention</h2>
            <p className="text-gray-700">
              We retain your data for as long as necessary to provide our services and comply 
              with legal obligations. Booking data is typically retained for 7 years for accounting purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              We use the following third-party services:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Stripe:</strong> Payment processing (subject to their privacy policy)</li>
              <li><strong>Vercel:</strong> Website hosting</li>
              <li><strong>Neon:</strong> Database hosting</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For any privacy-related questions or to exercise your rights:
            </p>
            <div className="bg-purple-50 p-6 rounded-lg">
              <p className="text-gray-900 font-semibold mb-2">BledBike</p>
              <p className="text-gray-700">Cesta svobode 15, 4260 Bled, Slovenia</p>
              <p className="text-gray-700">Email: <a href="mailto:privacy@bledbike.com" className="text-purple-600 hover:underline">privacy@bledbike.com</a></p>
              <p className="text-gray-700">Phone: +386 40 123 456</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this privacy policy from time to time. We will notify you of any 
              significant changes by posting the new policy on this page with an updated revision date.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <a 
            href="/"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
