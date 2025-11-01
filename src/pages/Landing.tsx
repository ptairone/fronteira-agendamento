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
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, Mail, Smartphone, Info, CheckCircle2, CreditCard, Calendar, ShieldCheck, Code, TestTube, Rocket, MessageCircle, Database, BarChart, Headphones, GraduationCap, TrendingDown, Clock, AlertCircle, ThumbsUp } from "lucide-react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ModalityCriteriaCard from "@/components/presentation/ModalityCriteriaCard";
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
  modalityCriteria,
  investment,
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Modalidades do Clube</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              6 modalidades esportivas com infraestrutura completa
            </p>
          </div>
          
          {/* Destaque da Estrutura Total */}
          <div className="mb-12 p-6 bg-accent/30 rounded-lg border-2 border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Infraestrutura do Clube</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-4xl font-bold text-primary">15</p>
                  <p className="text-muted-foreground">Quadras Totais</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">6</p>
                  <p className="text-muted-foreground">Modalidades</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">3</p>
                  <p className="text-muted-foreground">Quadras Cobertas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sports.map((sport) => (
              <SportCard
                key={sport.id}
                {...sport}
                showDetails={true}
              />
            ))}
          </div>

          {/* Nota sobre Quadras Compartilhadas */}
          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-3">
              <Info className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-2">Sistema Inteligente de Quadras Compartilhadas</h4>
                <p className="text-muted-foreground">
                  As 10 quadras de areia são polivalentes e podem ser usadas para Vôlei, Futevôlei e Beach Tênis. 
                  O sistema gerencia automaticamente a rotatividade e garante que cada modalidade tenha seu espaço 
                  respeitando os critérios de marcação específicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critérios por Modalidade */}
      <section className="py-20 px-4 bg-accent/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold">FLEXIBILIDADE TOTAL</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {modalityCriteria.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              {modalityCriteria.subtitle}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {modalityCriteria.description}
            </p>
          </div>

          {/* Cards de Exemplos por Modalidade */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-6 md:gap-8 mb-12">
            {modalityCriteria.examples.map((example, index) => (
              <ModalityCriteriaCard key={index} {...example} />
            ))}
          </div>

          {/* Benefícios dos Critérios Personalizados */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {modalityCriteria.benefits.map((benefit, index) => (
              <FeatureCard key={index} {...benefit} />
            ))}
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

      {/* Investment and Budget Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold">INVESTIMENTO</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {investment.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {investment.subtitle}
            </p>
          </div>

          {/* Pricing Card - Destaque Principal */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="overflow-hidden border-2 border-primary/20 shadow-lg">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Valor do Projeto</h3>
                <div className="text-6xl font-bold mb-4">{investment.pricing.total}</div>
                <p className="text-lg opacity-90">Desenvolvimento completo do sistema de gestão</p>
              </div>
              
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Entrada */}
                  <div className="text-center p-6 bg-accent/30 rounded-lg border border-primary/10">
                    <CreditCard className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-sm text-muted-foreground mb-2">
                      {investment.pricing.downPayment.percentage}% de Entrada
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {investment.pricing.downPayment.value}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {investment.pricing.downPayment.description}
                    </p>
                  </div>

                  {/* Parcelamento */}
                  <div className="text-center p-6 bg-accent/30 rounded-lg border border-primary/10">
                    <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-sm text-muted-foreground mb-2">
                      Saldo Restante
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {investment.pricing.installments.quantity}x {investment.pricing.installments.value}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {investment.pricing.installments.description}
                    </p>
                  </div>
                </div>

                {/* ROI Benefits */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t">
                  {investment.benefits.map((benefit, index) => {
                    const Icon = (Icons as any)[benefit.icon] as LucideIcon;
                    return (
                      <div key={index} className="text-center">
                        {Icon && <Icon className="h-8 w-8 text-primary mx-auto mb-2" />}
                        <div className="font-bold text-lg mb-1">{benefit.title}</div>
                        <div className="text-xs text-muted-foreground">{benefit.description}</div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">{investment.timeline.title}</h3>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {investment.timeline.phases.map((phase, index) => {
                  const Icon = (Icons as any)[phase.icon] as LucideIcon;
                  return (
                    <Card key={index} className="relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary/60" />
                      <CardContent className="p-6 pt-8">
                        <div className="flex items-center justify-between mb-4">
                          {Icon && <Icon className="h-10 w-10 text-primary" />}
                          <Badge variant="secondary" className="text-lg font-bold">
                            {phase.duration}
                          </Badge>
                        </div>
                        <h4 className="text-xl font-bold mb-2">{phase.name}</h4>
                        <p className="text-muted-foreground">{phase.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <div className="text-center mt-6">
                <Badge variant="outline" className="text-lg px-6 py-2">
                  <Clock className="mr-2 h-4 w-4" />
                  Total: {investment.timeline.total} do contrato ao go-live
                </Badge>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">{investment.included.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {investment.included.items.map((item, index) => (
                <FeatureCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>

          {/* Additional Costs */}
          <div className="max-w-5xl mx-auto mb-16">
            <Card className="border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-900/10">
              <CardContent className="p-8">
                <div className="flex items-start gap-3 mb-6">
                  <Info className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{investment.additionalCosts.title}</h3>
                    <p className="text-muted-foreground mb-6">{investment.additionalCosts.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {investment.additionalCosts.items.map((item, index) => {
                    const Icon = (Icons as any)[item.icon] as LucideIcon;
                    return (
                      <div key={index} className="p-4 bg-background rounded-lg border">
                        <div className="flex items-center gap-3 mb-3">
                          {Icon && <Icon className="h-8 w-8 text-orange-500" />}
                          <div>
                            <div className="font-bold">{item.platform}</div>
                            <div className="text-sm text-muted-foreground">{item.type}</div>
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                          {item.value}
                        </div>
                        <p className="text-xs text-muted-foreground">{item.note}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-muted-foreground">
                    <strong>Observação:</strong> {investment.additionalCosts.observation}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Guarantees */}
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">{investment.guarantee.title}</h3>
                </div>
                <ul className="space-y-3">
                  {investment.guarantee.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Revolucionar a Gestão das Suas Quadras?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato e descubra como o nosso sistema pode transformar a experiência dos seus associados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              Solicitar Proposta Formal
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Mail className="mr-2 h-5 w-5" />
              Agendar Reunião Comercial
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-muted/30 border-t">
        <div className="container mx-auto max-w-7xl text-center text-muted-foreground">
          <p>© 2024 Sistema de Gestão de Quadras. Todos os direitos reservados.</p>
        </div>
      </footer>

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
