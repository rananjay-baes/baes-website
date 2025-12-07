import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import React from "react";

interface GoldDataPoint {
  date: string;
  price: number;
}

interface GoldData {
  symbol: string;
  name: string;
  currency: string;
  currentPrice: number;
  data: GoldDataPoint[];
}

export default function GoldPriceChart() {
  const [goldData, setGoldData] = useState<GoldData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/gold-data.json")
      .then((res) => res.json())
      .then((data: GoldData) => {
        setGoldData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading gold data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Loading gold price data...</p>
      </div>
    );
  }

  if (!goldData) {
    return (
      <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Failed to load gold price data</p>
      </div>
    );
  }

  // Format data for the chart - show only last 60 months for better visualization
  const chartData = goldData.data.slice(-60).map((point) => ({
    date: new Date(point.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    }),
    price: point.price,
  }));

  // Calculate min and max for better Y-axis scaling
  const prices = chartData.map((d) => d.price);
  const minPrice = Math.floor(Math.min(...prices) / 100) * 100;
  const maxPrice = Math.ceil(Math.max(...prices) / 100) * 100;

  return (
    <div className="w-full">
      <div className="bg-card rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <div className="flex items-baseline justify-between mb-2">
            <h3 className="text-2xl font-bold text-foreground">
              Gold Price History
            </h3>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Current Price</p>
              <p className="text-3xl font-bold text-accent">
                ${goldData.currentPrice.toFixed(2)}
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Historical gold futures prices (GC=F) over the last 5 years
          </p>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="date"
              stroke="hsl(var(--muted-foreground))"
              tick={{ fontSize: 12 }}
              interval="preserveStartEnd"
              minTickGap={50}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              tick={{ fontSize: 12 }}
              domain={[minPrice, maxPrice]}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                color: "hsl(var(--foreground))",
              }}
              formatter={(value: number) => [`$${value.toFixed(2)}`, "Price"]}
              labelStyle={{ color: "hsl(var(--muted-foreground))" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#6FB62E"
              strokeWidth={3}
              dot={false}
              name="Gold Price (USD/oz)"
              activeDot={{ r: 6, fill: "#6FB62E" }}
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-muted/50 rounded-lg p-3">
            <p className="text-xs text-muted-foreground mb-1">5-Year Low</p>
            <p className="text-lg font-bold text-foreground">
              ${Math.min(...prices).toFixed(2)}
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-3">
            <p className="text-xs text-muted-foreground mb-1">5-Year High</p>
            <p className="text-lg font-bold text-foreground">
              ${Math.max(...prices).toFixed(2)}
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-3">
            <p className="text-xs text-muted-foreground mb-1">Average</p>
            <p className="text-lg font-bold text-foreground">
              $
              {(prices.reduce((a, b) => a + b, 0) / prices.length).toFixed(2)}
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-3">
            <p className="text-xs text-muted-foreground mb-1">5-Year Growth</p>
            <p className="text-lg font-bold text-accent">
              +
              {(
                ((prices[prices.length - 1] - prices[0]) / prices[0]) *
                100
              ).toFixed(1)}
              %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
