"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Card from "../atoms/Card";
import { MONTHS, Year, monthlySales } from "../../data/sales";

export default function BarChartCard({ year }: { year: Year }) {
  const data = MONTHS.map((month, i) => ({ month, sales: monthlySales[year][i] }));

  return (
    <Card title={`Monthly sales ${year} (bar)`}>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#0f766e" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
