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
    <Card className="card-3d gradient-border group">
      <CardContent className="p-4 sm:p-6 space-y-2 sm:space-y-4">
        {Icon && <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />}
        <h3 className="text-base sm:text-xl font-semibold">{title}</h3>
        <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default UseCaseCard;
