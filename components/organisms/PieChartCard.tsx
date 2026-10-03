"use client";

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import Card from "../atoms/Card";
import { Year, categorySales } from "../../data/sales";

const COLORS = ["#0f766e", "#b45309", "#4338ca", "#be123c"];

export default function PieChartCard({ year }: { year: Year }) {
  return (
    <Card title={`Sales by category ${year} (pie)`}>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={categorySales[year]} dataKey="value" nameKey="name" outerRadius={90} label>
              {categorySales[year].map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
