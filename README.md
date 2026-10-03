# Sales Dashboard

A small Next.js 15 dashboard that shows mock sales data for 2022, 2023 and 2024.

## What I built
- Next.js 15 (App Router), TypeScript and Tailwind CSS
- Atomic structure:
  - `components/atoms`: Button, Card
  - `components/molecules`: YearSelector, StatBox
  - `components/organisms`: BarChartCard, LineChartCard, PieChartCard
- Mock data in `data/sales.ts` (monthly sales and sales by category)
- A `/dashboard` page that combines the components. The year selector updates all charts.
- Charts use the Recharts library.

## How to set up
```bash
git clone <your-repo-url>
cd sales-dashboard
npm install
npm run dev
```
Open http://localhost:3000 (it redirects to /dashboard).

## Build
```bash
npm run build
npm start
```

## Possible improvements
- Fetch real data from an API
- Custom sales threshold input
- Buttons to switch between bar, line and pie charts
