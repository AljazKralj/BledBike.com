# 🚴 BledBike - Mountain Bike & E-Bike Rentals

Modern Next.js website for bike rentals and guided tours in Bled, Slovenia.

## 🚀 Quick Start

```bash
# Install dependencies (if not already done)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Hosting:** Vercel
- **Database:** Neon (Postgres) - Coming soon

## 📁 Project Structure

```
bledbike/
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   └── favicon.ico
├── public/                 # Static assets
├── PROJECT_PLAN.md         # Feature roadmap
└── README.md
```

## ✨ Features

### Current (MVP)
- ✅ Responsive homepage
- ✅ Service showcase (rentals + tours)
- ✅ Pricing cards
- ✅ Location info
- ✅ SEO optimized
- ✅ Modern gradient design

### Coming Soon
- 🔄 Booking system with calendar
- 🔄 Payment integration (Stripe)
- 🔄 Admin dashboard
- 🔄 Inventory management
- 🔄 Email notifications
- 🔄 User reviews
- 🔄 Multi-language support

## 🎨 Design

Inspired by threerivers.si with a focus on:
- Clean, outdoor aesthetic
- Purple/blue gradient accents
- Action-focused CTAs
- Mobile-first responsive design

## 📊 Services

### Bike Rentals
- Mountain Bikes: €30/day
- E-Bikes: €50/day
- Kids/Family: €20/day

### Guided Tours
- Lake Bled Panorama: €35/person
- Vintgar Gorge Adventure: €45/person

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

Or use Vercel CLI:
```bash
npm install -g vercel
vercel --prod
```

### Environment Variables (for future DB integration)
```env
DATABASE_URL=your_neon_postgres_url
STRIPE_SECRET_KEY=your_stripe_key
```

## 📝 TODO

See [PROJECT_PLAN.md](./PROJECT_PLAN.md) for detailed feature roadmap.

## 📧 Contact

- Email: info@bledbike.com
- Phone: +386 40 123 456
- Address: Cesta svobode 15, 4260 Bled, Slovenia

---

Built with ❤️ in Slovenia
