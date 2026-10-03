export type Year = 2022 | 2023 | 2024;

export const YEARS: Year[] = [2022, 2023, 2024];

export const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

// Mock monthly sales (in USD)
export const monthlySales: Record<Year, number[]> = {
  2022: [12000, 13500, 12800, 14200, 15100, 14800, 16000, 15500, 16700, 17200, 18900, 21000],
  2023: [15000, 16200, 15800, 17500, 18300, 18000, 19600, 19100, 20400, 21000, 23500, 26000],
  2024: [18500, 19800, 19200, 21400, 22600, 22100, 24000, 23500, 25200, 26100, 28900, 32000],
};

// Mock sales by category (in USD)
export const categorySales: Record<Year, { name: string; value: number }[]> = {
  2022: [
    { name: "Electronics", value: 62000 },
    { name: "Clothing", value: 41000 },
    { name: "Home", value: 33000 },
    { name: "Sports", value: 21000 },
  ],
  2023: [
    { name: "Electronics", value: 78000 },
    { name: "Clothing", value: 49000 },
    { name: "Home", value: 41000 },
    { name: "Sports", value: 28000 },
  ],
  2024: [
    { name: "Electronics", value: 95000 },
    { name: "Clothing", value: 58000 },
    { name: "Home", value: 50000 },
    { name: "Sports", value: 36000 },
  ],
};

export const totalSales = (year: Year) =>
  monthlySales[year].reduce((sum, n) => sum + n, 0);
