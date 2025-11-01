import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface ModalityCriteriaCardProps {
  sport: string;
  icon: string;
  color: string;
  criteria: string[];
}

const ModalityCriteriaCard = ({ sport, icon, color, criteria }: ModalityCriteriaCardProps) => {
  const Icon = (Icons as any)[icon] as LucideIcon;

  return (
    <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300">
      <div className="p-4 text-white" style={{ backgroundColor: color }}>
        <div className="flex items-center gap-3">
          {Icon && <Icon className="h-8 w-8" />}
          <h3 className="text-2xl font-bold">{sport}</h3>
        </div>
      </div>
      <CardContent className="p-6">
        <ul className="space-y-3">
          {criteria.map((criterion, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{criterion}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ModalityCriteriaCard;
