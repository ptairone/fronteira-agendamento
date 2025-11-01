import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface SportCardProps {
  name: string;
  icon: string;
  color: string;
  textColor: string;
  courts?: number;
  onClick?: () => void;
  selected?: boolean;
}

const SportCard = ({ name, icon, color, textColor, courts, onClick, selected }: SportCardProps) => {
  const Icon = (Icons as any)[icon] as LucideIcon;

  return (
    <Card
      className={`cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 ${
        selected ? "ring-2 ring-primary" : ""
      }`}
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
        {Icon && <Icon className="h-12 w-12" style={{ color: textColor }} />}
        <h3 className="text-xl font-bold" style={{ color: textColor }}>
          {name}
        </h3>
        {courts !== undefined && (
          <p className="text-sm" style={{ color: textColor }}>
            {courts} {courts === 1 ? "quadra" : "quadras"}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default SportCard;
