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
    <Card className="h-full">
      <CardContent className="p-6 space-y-4">
        <Quote className="h-8 w-8 text-primary opacity-50" />
        <p className="text-muted-foreground italic">{content}</p>
        <div className="flex items-center gap-3 pt-4 border-t">
          <Avatar>
            <AvatarFallback>{avatar}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
