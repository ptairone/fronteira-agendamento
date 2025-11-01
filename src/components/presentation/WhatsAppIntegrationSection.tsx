import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar, Bell, Zap, Users, TrendingUp, Settings } from "lucide-react";

interface WhatsAppIntegrationProps {
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  steps: Array<{
    number: number;
    title: string;
    description: string;
    icon: string;
  }>;
  benefits: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  exampleMessage: string;
}

const iconMap: any = {
  Calendar,
  Bell,
  MessageSquare,
  Zap,
  Users,
  TrendingUp,
  Settings,
};

const WhatsAppIntegrationSection = ({
  title,
  subtitle,
  badge,
  description,
  steps,
  benefits,
  exampleMessage,
}: WhatsAppIntegrationProps) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-600 hover:bg-green-700">{badge}</Badge>
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Card principal de destaque */}
        <Card className="mb-12 border-green-200 dark:border-green-800 shadow-xl">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-full">
                <MessageSquare className="h-16 w-16 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3">Notificações Automáticas nos Grupos</h3>
                <p className="text-muted-foreground text-lg">{description}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Como funciona - 3 passos */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Como Funciona</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step) => {
              const StepIcon = iconMap[step.icon];
              return (
                <Card key={step.number} className="relative hover:shadow-lg transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    <StepIcon className="h-12 w-12 text-green-600 mx-auto mb-4 mt-2" />
                    <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Exemplo de mensagem */}
        <Card className="mb-12 bg-gradient-to-br from-green-600 to-emerald-600 text-white border-0">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Exemplo de Notificação</h3>
                <p className="text-green-50 mb-4">
                  Veja como ficará a mensagem automática enviada ao grupo:
                </p>
              </div>
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6 font-mono text-sm whitespace-pre-line">
                  {exampleMessage}
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Benefícios */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Benefícios da Integração</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const BenefitIcon = iconMap[benefit.icon];
              return (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardContent className="p-6 flex gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg h-fit">
                      <BenefitIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            <MessageSquare className="mr-2 h-5 w-5" />
            Solicitar Demonstração da Integração WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppIntegrationSection;
