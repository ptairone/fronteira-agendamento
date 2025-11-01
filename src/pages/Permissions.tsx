import Navigation from "@/components/Navigation";
import DemoBadge from "@/components/presentation/DemoBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Shield, UserCog, User, Users, UserPlus, Check, X, Lock } from "lucide-react";
import { mockUsers } from "@/data/mockData";

const Permissions = () => {
  const roles = [
    {
      icon: Shield,
      title: "Super Admin",
      description: "Acesso total ao sistema, todas as configurações e modalidades",
      badge: "Acesso Total",
      variant: "destructive" as const,
    },
    {
      icon: UserCog,
      title: "Admin de Modalidade",
      description: "Gerencia apenas sua modalidade específica (ex: Coordenador de Padel)",
      badge: "Acesso Parcial",
      variant: "default" as const,
    },
    {
      icon: User,
      title: "Associado Titular",
      description: "Pode fazer reservas completas dentro das regras estabelecidas",
      badge: "Usuário Padrão",
      variant: "secondary" as const,
    },
    {
      icon: Users,
      title: "Dependente",
      description: "Reservas limitadas, vinculado a um titular",
      badge: "Acesso Limitado",
      variant: "outline" as const,
    },
    {
      icon: UserPlus,
      title: "Visitante",
      description: "Acesso temporário, geralmente com restrições maiores",
      badge: "Temporário",
      variant: "outline" as const,
    },
  ];

  const permissions = [
    { name: "Ver horários disponíveis", super_admin: true, modality_admin: true, associate: true, dependent: true, visitor: true },
    { name: "Fazer reservas", super_admin: true, modality_admin: true, associate: true, dependent: true, visitor: false },
    { name: "Cancelar próprias reservas", super_admin: true, modality_admin: true, associate: true, dependent: false, visitor: false },
    { name: "Cancelar reservas de outros", super_admin: true, modality_admin: true, associate: false, dependent: false, visitor: false },
    { name: "Gerenciar quadras", super_admin: true, modality_admin: true, associate: false, dependent: false, visitor: false },
    { name: "Ver relatórios", super_admin: true, modality_admin: true, associate: false, dependent: false, visitor: false },
    { name: "Configurar regras da modalidade", super_admin: true, modality_admin: true, associate: false, dependent: false, visitor: false },
    { name: "Gerenciar usuários", super_admin: true, modality_admin: false, associate: false, dependent: false, visitor: false },
    { name: "Configurações globais", super_admin: true, modality_admin: false, associate: false, dependent: false, visitor: false },
  ];

  const roleLabels = {
    super_admin: "Super Admin",
    modality_admin: "Admin Modalidade",
    associate: "Associado",
    dependent: "Dependente",
    visitor: "Visitante",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Gestão de Acesso e Permissões</h1>
            <p className="text-muted-foreground mt-2">
              Hierarquia de usuários e controle granular de permissões
            </p>
          </div>
          <DemoBadge />
        </div>

        {/* Hierarquia de Usuários */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Hierarquia de Usuários</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {roles.map((role, index) => {
              const IconComponent = role.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <IconComponent className="h-10 w-10 text-primary" />
                      <Badge variant={role.variant}>{role.badge}</Badge>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{role.title}</h3>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Matriz de Permissões */}
        <Card>
          <CardHeader>
            <CardTitle>Matriz de Permissões</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[250px]">Permissão</TableHead>
                    <TableHead className="text-center">Super Admin</TableHead>
                    <TableHead className="text-center">Admin Modalidade</TableHead>
                    <TableHead className="text-center">Associado</TableHead>
                    <TableHead className="text-center">Dependente</TableHead>
                    <TableHead className="text-center">Visitante</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {permissions.map((permission, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{permission.name}</TableCell>
                      <TableCell className="text-center">
                        {permission.super_admin ? (
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-600 mx-auto" />
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {permission.modality_admin ? (
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-600 mx-auto" />
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {permission.associate ? (
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-600 mx-auto" />
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {permission.dependent ? (
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-600 mx-auto" />
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {permission.visitor ? (
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-600 mx-auto" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Usuários Simulados */}
        <Card>
          <CardHeader>
            <CardTitle>Usuários do Sistema (Simulado)</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Usuário</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Perfil</TableHead>
                  <TableHead>Modalidade</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>{user.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{user.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{user.email}</TableCell>
                    <TableCell>
                      <Badge variant={user.role === "super_admin" ? "destructive" : "secondary"}>
                        {roleLabels[user.role]}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.modality || "-"}</TableCell>
                    <TableCell>
                      <Badge variant={user.status === "active" ? "default" : "outline"}>
                        {user.status === "active" ? "Ativo" : "Inativo"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Editar</Button>
                        <Button size="sm" variant="outline">Desativar</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Seção de Segurança */}
        <Card className="border-primary">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold">Segurança de Nível Empresarial</h3>
                  <Badge variant="default">Certificado</Badge>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p>✓ <strong>Autenticação robusta:</strong> Suporte para email, telefone e Google Sign-In</p>
                  <p>✓ <strong>Row Level Security (RLS):</strong> Dados isolados por usuário e permissões</p>
                  <p>✓ <strong>Criptografia:</strong> Todos os dados sensíveis são criptografados</p>
                  <p>✓ <strong>Logs de auditoria:</strong> Rastreamento completo de ações críticas</p>
                  <p>✓ <strong>Controle granular:</strong> Permissões configuráveis por perfil e modalidade</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Permissions;
