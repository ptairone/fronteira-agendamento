import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface BenefitCardProps {
  icon: string;
  metric: string;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, metric, title, description }: BenefitCardProps) => {
  const Icon = (Icons as any)[icon] as LucideIcon;

  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardContent className="p-4 sm:p-6 space-y-2 sm:space-y-3">
        <div className="flex items-center gap-2 sm:gap-3">
          {Icon && <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />}
          <span className="text-2xl sm:text-3xl font-bold text-primary">{metric}</span>
        </div>
        <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default BenefitCard;
