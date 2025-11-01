import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface StatCardProps {
  icon: string;
  value: string | number;
  label: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatCard = ({ icon, value, label, trend }: StatCardProps) => {
  const Icon = (Icons as any)[icon] as LucideIcon;

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          {Icon && <Icon className="h-8 w-8 text-muted-foreground" />}
          {trend && (
            <span className={`text-sm font-medium ${trend.isPositive ? "text-green-600" : "text-red-600"}`}>
              {trend.isPositive ? "+" : ""}
              {trend.value}%
            </span>
          )}
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-bold">{value}</p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
