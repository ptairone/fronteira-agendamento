import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface SportCardProps {
  name: string;
  icon: string;
  color: string;
  textColor: string;
  courts?: number;
  courtsDetail?: string;
  sharedCourts?: boolean;
  sharedWith?: string[];
  showDetails?: boolean;
  onClick?: () => void;
  selected?: boolean;
}

const SportCard = ({ name, icon, color, textColor, courts, courtsDetail, sharedCourts, showDetails, onClick, selected }: SportCardProps) => {
  const Icon = (Icons as any)[icon] as LucideIcon;

  return (
    <Card
      className={`cursor-pointer card-3d group glow-effect ${
        selected ? "ring-2 ring-primary" : ""
      }`}
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center space-y-2 sm:space-y-3">
        {Icon && <Icon className="h-8 w-8 sm:h-12 sm:w-12 group-hover:scale-110 transition-transform duration-300" style={{ color: textColor }} />}
        <h3 className="text-base sm:text-xl font-bold" style={{ color: textColor }}>
          {name}
        </h3>
        {courts !== undefined && (
          <p className="text-sm font-semibold" style={{ color: textColor }}>
            {courts} {courts === 1 ? "quadra" : "quadras"}
          </p>
        )}
        {showDetails && courtsDetail && (
          <p className="text-xs" style={{ color: textColor, opacity: 0.9 }}>
            {courtsDetail}
          </p>
        )}
        {showDetails && sharedCourts && (
          <Badge variant="secondary" className="mt-2 bg-white/20 text-white border-white/30">
            Compartilhadas
          </Badge>
        )}
      </CardContent>
    </Card>
  );
};

export default SportCard;
