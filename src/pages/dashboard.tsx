import { StatsCard } from "@/components/dashboard/stats-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, TrendingUp, Target } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useStore } from "@/lib/store";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 700 },
  { name: "Jun", value: 900 },
];

export function Dashboard() {
  const { contacts, deals } = useStore();
  
  const totalValue = deals.reduce((acc, deal) => acc + deal.value, 0);
  const activeDeals = deals.filter(deal => deal.stage !== 'closed').length;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-zinc-500 dark:text-zinc-400">
          Your CRM overview and key metrics
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Contacts"
          value={contacts.length}
          icon={<Users className="h-4 w-4 text-zinc-500" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Active Deals"
          value={activeDeals}
          icon={<Target className="h-4 w-4 text-zinc-500" />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Pipeline Value"
          value={`$${totalValue.toLocaleString()}`}
          icon={<DollarSign className="h-4 w-4 text-zinc-500" />}
          trend={{ value: 15, isPositive: true }}
        />
        <StatsCard
          title="Conversion Rate"
          value="24%"
          icon={<TrendingUp className="h-4 w-4 text-zinc-500" />}
          trend={{ value: 4, isPositive: true }}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#3b82f6"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {deals.slice(0, 5).map((deal) => (
                <div
                  key={deal.id}
                  className="flex items-center justify-between border-b border-zinc-200 pb-4 last:border-0 dark:border-zinc-700"
                >
                  <div>
                    <p className="font-medium">{deal.title}</p>
                    <p className="text-sm text-zinc-500">
                      Stage: {deal.stage}
                    </p>
                  </div>
                  <p className="font-medium">${deal.value.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}