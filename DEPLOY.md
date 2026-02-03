# 🚀 Deployment Guide

## Deploy to Vercel (Recommended)

### Option 1: GitHub + Vercel (Easiest)

1. **Push to GitHub:**
   ```bash
   cd bledbike
   git init
   git add .
   git commit -m "Initial commit: BledBike MVP"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/bledbike.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repo
   - Vercel auto-detects Next.js config
   - Click "Deploy"
   
   ✅ Live in ~2 minutes!

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd bledbike
vercel --prod
```

### Custom Domain Setup

1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add `bledbike.com`
4. Update DNS records (Vercel provides instructions):
   ```
   A     @     76.76.21.21
   CNAME www   cname.vercel-dns.com
   ```

## Environment Variables (Future)

When you add database/payment features:

1. Create `.env.local`:
   ```env
   DATABASE_URL=postgresql://...neon.tech/...
   STRIPE_SECRET_KEY=sk_...
   STRIPE_PUBLISHABLE_KEY=pk_...
   ```

2. Add to Vercel:
   - Project Settings → Environment Variables
   - Add each variable
   - Redeploy

## Database Setup (Neon)

### 1. Create Neon Account
- Go to [neon.tech](https://neon.tech)
- Sign up (free tier available)
- Create new project: "bledbike"

### 2. Get Connection String
```bash
postgresql://username:password@ep-xxx.region.aws.neon.tech/bledbike?sslmode=require
```

### 3. Install Prisma (for DB management)
```bash
cd bledbike
npm install prisma @prisma/client
npx prisma init
```

### 4. Update `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Bike {
  id          String   @id @default(cuid())
  name        String
  type        String   // "mountain" | "ebike" | "kids"
  price       Int      // in cents
  available   Boolean  @default(true)
  createdAt   DateTime @default(now())
}

model Booking {
  id          String   @id @default(cuid())
  bikeId      String
  customerName String
  customerEmail String
  startDate   DateTime
  endDate     DateTime
  totalPrice  Int
  status      String   @default("pending")
  createdAt   DateTime @default(now())
}
```

### 5. Run Migration
```bash
npx prisma migrate dev --name init
npx prisma generate
```

## Performance Tips

1. **Images:** Use Next.js `<Image>` component (already set up)
2. **Fonts:** Inter font already optimized
3. **Caching:** Vercel handles automatically
4. **Analytics:** Add Vercel Analytics:
   ```bash
   npm install @vercel/analytics
   ```

## SEO Checklist

- [x] Meta titles & descriptions
- [x] OpenGraph tags
- [ ] Sitemap.xml (add when content grows)
- [ ] robots.txt
- [ ] Google Search Console verification
- [ ] Schema.org markup for local business

## Monitoring

- **Vercel Dashboard:** Auto-monitors performance
- **Google Analytics:** Add tracking code
- **Sentry:** Error tracking (optional)

## Cost Estimate

- **Vercel Hobby:** FREE (perfect for MVP)
- **Neon Free Tier:** FREE (0.5GB storage)
- **Custom Domain:** ~€10/year

Total: **€10/year** for production site! 🎉

---

Need help? Check:
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Neon Docs](https://neon.tech/docs)
