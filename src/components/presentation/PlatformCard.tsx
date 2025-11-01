import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface PlatformCardProps {
  name: string;
  icon: string;
  description: string;
  badge: string;
  features: string[];
}

const PlatformCard = ({ name, icon, description, badge, features }: PlatformCardProps) => {
  const Icon = (Icons as any)[icon] as LucideIcon;

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          {Icon && <Icon className="h-12 w-12 text-primary" />}
          <Badge variant="secondary">{badge}</Badge>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        <div className="space-y-2 pt-2 border-t">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <span className="text-primary">✓</span>
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PlatformCard;
