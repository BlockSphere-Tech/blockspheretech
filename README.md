# Cryptara

Enterprise blockchain infrastructure website — inspired by [GetBlock](https://getblock.io/).

- **Frontend:** Next.js (App Router) + Tailwind CSS
- **Backend:** Node.js + Express API

## Quick start

```bash
# Install dependencies
npm run install:all

# Terminal 1 — API (http://localhost:4000)
npm run dev:backend

# Terminal 2 — Web (http://localhost:3000)
npm run dev:frontend
```

## Languages

English, 中文, and Español — switcher in the header/footer. Preference is saved in `localStorage`. Pass `?lang=en|zh|es` to API routes.

## API

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/locales` | Available languages |
| GET | `/api/site?lang=` | Brand, stats, compliance |
| GET | `/api/products?lang=` | Product catalog |
| GET | `/api/networks` | Supported chains |
| GET | `/api/use-cases?lang=` | Customer use cases |
| GET | `/api/faq?lang=` | FAQ entries |
| GET | `/api/pricing/estimate?lang=` | Pricing calculator |
| POST | `/api/contact?lang=` | Contact form |

Frontend env: `frontend/.env.local`

```
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```
