import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface UseCaseCardProps {
  icon: string;
  title: string;
  description: string;
}

const UseCaseCard = ({ icon, title, description }: UseCaseCardProps) => {
  const Icon = (Icons as any)[icon] as LucideIcon;

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardContent className="p-6 space-y-4">
        {Icon && <Icon className="h-10 w-10 text-primary" />}
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default UseCaseCard;
