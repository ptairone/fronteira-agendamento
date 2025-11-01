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
    <Card className="card-3d gradient-border group overflow-hidden">
      <CardContent className="p-4 sm:p-6 space-y-2 sm:space-y-4">
        <div className="flex items-center justify-between">
          {Icon && <Icon className="h-8 w-8 sm:h-12 sm:w-12 text-primary group-hover:scale-110 transition-transform duration-300" />}
          <Badge variant="secondary" className="text-xs">{badge}</Badge>
        </div>
        <div>
          <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">{name}</h3>
          <p className="text-muted-foreground text-xs sm:text-sm">{description}</p>
        </div>
        <div className="space-y-1 sm:space-y-2 pt-2 border-t">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-xs sm:text-sm">
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
