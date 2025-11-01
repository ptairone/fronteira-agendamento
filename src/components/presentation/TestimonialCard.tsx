import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const TestimonialCard = ({ name, role, content, avatar }: TestimonialCardProps) => {
  return (
    <Card className="h-full card-3d gradient-border group">
      <CardContent className="p-4 sm:p-6 space-y-2 sm:space-y-4">
        <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
        <p className="text-sm sm:text-base text-muted-foreground italic">{content}</p>
        <div className="flex items-center gap-2 sm:gap-3 pt-2 sm:pt-4 border-t">
          <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
            <AvatarFallback className="text-xs sm:text-sm">{avatar}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">{name}</p>
            <p className="text-xs sm:text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
