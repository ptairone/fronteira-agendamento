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
      <div className="p-1.5 sm:p-4 text-white" style={{ backgroundColor: color }}>
        <div className="flex items-center gap-1 sm:gap-3">
          {Icon && <Icon className="h-4 w-4 sm:h-8 sm:w-8" />}
          <h3 className="text-sm font-semibold sm:text-2xl sm:font-bold">{sport}</h3>
        </div>
      </div>
      <CardContent className="p-2 sm:p-6">
        <ul className="space-y-1 sm:space-y-3">
          {criteria.map((criterion, idx) => (
            <li key={idx} className="flex items-start gap-1">
              <CheckCircle2 className="h-3 w-3 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-[10px] leading-snug sm:text-sm text-muted-foreground">{criterion}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ModalityCriteriaCard;
