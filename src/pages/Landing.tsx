import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeatureCard from "@/components/presentation/FeatureCard";
import SportCard from "@/components/presentation/SportCard";
import BenefitCard from "@/components/presentation/BenefitCard";
import UseCaseCard from "@/components/presentation/UseCaseCard";
import TestimonialCard from "@/components/presentation/TestimonialCard";
import PlatformCard from "@/components/presentation/PlatformCard";
import WhatsAppIntegrationSection from "@/components/presentation/WhatsAppIntegrationSection";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Mail, Smartphone } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import heroBg from "@/assets/hero-bg.jpg";
import {
  features,
  sports,
  benefits,
  useCases,
  testimonials,
  associateFeatures,
  adminFeatures,
  stats,
  platforms,
  whatsappIntegration,
} from "@/data/mockData";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full overflow-hidden bg-background">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
          <div className="mb-8 animate-fade-in">
            <img
              src={logo}
              alt="Grêmio Fronteira Logo"
              className="h-32 w-32 md:h-40 md:w-40 rounded-full shadow-lg"
            />
          </div>

          <h1 className="mb-4 text-center text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-in max-w-4xl">
            Sistema Completo de Gestão de Quadras Esportivas
          </h1>
          
          <p className="mb-8 text-center text-xl md:text-2xl text-white/90 animate-fade-in max-w-3xl">
            Gerencie múltiplas modalidades com <strong>aplicativos nativos iOS e Android</strong> ou pelo <strong>navegador web</strong>. Sistema completo com <strong>notificações automáticas no WhatsApp</strong> para máxima praticidade no dia a dia.
          </p>

          {/* Estatísticas em Destaque */}
          <div className="mb-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl w-full animate-fade-in">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-white">{stats.totalCourts}+</p>
                <p className="text-white/80">Quadras Gerenciadas</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-white">{stats.totalModalities}+</p>
                <p className="text-white/80">Modalidades</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-white">{stats.availability}</p>
                <p className="text-white/80">Disponibilidade</p>
              </CardContent>
            </Card>
          </div>

          <Button
            size="lg"
            onClick={() => document.getElementById("demos")?.scrollIntoView({ behavior: "smooth" })}
            className="animate-fade-in text-lg px-8 py-6 h-auto"
          >
            Explorar Demonstração Interativa
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Visão Geral */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Escolher Nosso Sistema?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma solução completa que transforma a gestão de quadras esportivas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Disponibilidade Multiplataforma */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Acesse de Qualquer Lugar, Em Qualquer Dispositivo</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sistema totalmente multiplataforma para máxima praticidade no dia a dia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {platforms.map((platform) => (
              <PlatformCard key={platform.id} {...platform} />
            ))}
          </div>
          
          {/* Card de destaque - Sincronização */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Smartphone className="h-8 w-8 text-primary" />
                <span className="text-3xl font-bold">⟷</span>
                <Smartphone className="h-8 w-8 text-primary rotate-90" />
                <span className="text-3xl font-bold">⟷</span>
                <Smartphone className="h-8 w-8 text-primary rotate-180" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Sincronização em Tempo Real</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Suas reservas e dados sincronizam automaticamente entre todos os dispositivos. 
                Reserve no celular, confira no computador - tudo sempre atualizado!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl mb-2">✅</div>
                  <p className="text-sm text-muted-foreground">Acesso 24/7</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <p className="text-sm text-muted-foreground">Apps Nativos</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔔</div>
                  <p className="text-sm text-muted-foreground">Notificações Push</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📶</div>
                  <p className="text-sm text-muted-foreground">Funciona Offline</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌐</div>
                  <p className="text-sm text-muted-foreground">Acesso Web</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Modalidades Suportadas */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Modalidades Suportadas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sistema flexível e expansível para qualquer tipo de esporte
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {sports.map((sport) => (
              <SportCard
                key={sport.id}
                name={sport.name}
                icon={sport.icon}
                color={sport.color}
                textColor={sport.textColor}
                courts={sport.courts}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              ✨ <strong>Sistema Expansível:</strong> Adicione novas modalidades conforme necessário
            </p>
          </div>
        </div>
      </section>

      {/* Funcionalidades por Perfil */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Funcionalidades por Perfil</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recursos específicos para associados e administradores
            </p>
          </div>
          
          <Tabs defaultValue="associates" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="associates">Para Associados</TabsTrigger>
              <TabsTrigger value="admins">Para Administradores</TabsTrigger>
            </TabsList>
            
            <TabsContent value="associates">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {associateFeatures.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="admins">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {adminFeatures.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Integração WhatsApp */}
      <WhatsAppIntegrationSection {...whatsappIntegration} />

      {/* Demonstração Interativa */}
      <section id="demos" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Demonstração Interativa</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore todas as funcionalidades do sistema em ação
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-all cursor-pointer" onClick={() => navigate("/associado")}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="h-20 w-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <h3 className="text-2xl font-bold">Painel do Associado</h3>
                <p className="text-muted-foreground">
                  Veja como os associados fazem reservas de forma intuitiva
                </p>
                <Button className="w-full">
                  Ver Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all cursor-pointer" onClick={() => navigate("/admin")}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="h-20 w-20 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="text-4xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-bold">Painel Admin</h3>
                <p className="text-muted-foreground">
                  Explore as ferramentas de gestão e configuração completas
                </p>
                <Button variant="secondary" className="w-full">
                  Ver Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all cursor-pointer" onClick={() => navigate("/analytics")}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="h-20 w-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-4xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold">Dashboard Analytics</h3>
                <p className="text-muted-foreground">
                  Veja insights profissionais e relatórios detalhados
                </p>
                <Button variant="outline" className="w-full">
                  Ver Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios Comprovados</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Resultados reais que transformam a gestão esportiva
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos de Uso</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solução perfeita para diversos tipos de organizações
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} {...useCase} />
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Depoimentos de gestores satisfeitos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer com CTAs */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Pronto para Transformar Sua Gestão de Quadras?
          </h2>
          <p className="text-xl opacity-90">
            Entre em contato conosco para uma demonstração personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto">
              <Mail className="mr-2 h-5 w-5" />
              Solicitar Orçamento
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Phone className="mr-2 h-5 w-5" />
              Agendar Demo Personalizada
            </Button>
          </div>
          <div className="pt-8 border-t border-white/20">
            <p className="text-sm opacity-75">
              © 2025 Sistema de Gestão de Quadras. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in:nth-child(2) {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animate-fade-in:nth-child(3) {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animate-fade-in:nth-child(4) {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animate-fade-in:nth-child(5) {
          animation-delay: 0.8s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Landing;
