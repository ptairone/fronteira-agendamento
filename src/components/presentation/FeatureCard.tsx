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
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
        {Icon && <Icon className="h-12 w-12 text-primary" />}
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
