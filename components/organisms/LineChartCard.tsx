"use client";

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Card from "../atoms/Card";
import { MONTHS, Year, monthlySales } from "../../data/sales";

export default function LineChartCard({ year }: { year: Year }) {
  const data = MONTHS.map((month, i) => ({ month, sales: monthlySales[year][i] }));

  return (
    <Card title={`Sales trend ${year} (line)`}>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#b45309" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
