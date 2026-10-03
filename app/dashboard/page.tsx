"use client";

import { useState } from "react";
import YearSelector from "../../components/molecules/YearSelector";
import StatBox from "../../components/molecules/StatBox";
import BarChartCard from "../../components/organisms/BarChartCard";
import LineChartCard from "../../components/organisms/LineChartCard";
import PieChartCard from "../../components/organisms/PieChartCard";
import { Year, totalSales } from "../../data/sales";

export default function DashboardPage() {
  const [year, setYear] = useState<Year>(2024);

  return (
    <main className="mx-auto max-w-6xl space-y-6 p-4 md:p-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Sales dashboard</h1>
        <YearSelector selected={year} onChange={setYear} />
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        <StatBox label={`Total sales ${year}`} value={`$${totalSales(year).toLocaleString()}`} />
        <StatBox label="Year selected" value={String(year)} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <BarChartCard year={year} />
        <LineChartCard year={year} />
        <PieChartCard year={year} />
      </div>
    </main>
  );
}
