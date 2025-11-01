import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const Icon = (Icons as any)[icon] as LucideIcon;

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center space-y-2 sm:space-y-4">
        {Icon && <Icon className="h-8 w-8 sm:h-12 sm:w-12 text-primary" />}
        <h3 className="text-base sm:text-xl font-semibold">{title}</h3>
        <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
