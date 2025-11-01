import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMap: Record<string, string> = {
    "/": "Home",
    "/associado": "Demo Associado",
    "/admin": "Demo Admin",
    "/analytics": "Dashboard Analytics",
    "/permissions": "Gestão de Permissões",
  };

  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <img
            src={logo}
            alt="Grêmio Fronteira"
            className="h-10 w-10 rounded-full cursor-pointer"
            onClick={() => navigate("/")}
          />
          
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
                    <Home className="h-4 w-4" />
                  </Button>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {pathSegments.map((segment, index) => {
                const path = "/" + pathSegments.slice(0, index + 1).join("/");
                const isLast = index === pathSegments.length - 1;
                return (
                  <div key={path} className="flex items-center">
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage>{pathMap[path] || segment}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Button variant="ghost" size="sm" onClick={() => navigate(path)}>
                            {pathMap[path] || segment}
                          </Button>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </div>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Demonstrações
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={() => navigate("/associado")}>
                Painel do Associado
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/admin")}>
                Painel Admin
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/analytics")}>
                Dashboard Analytics
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/permissions")}>
                Gestão de Permissões
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {location.pathname !== "/" && (
            <Button onClick={() => navigate("/")}>Voltar para Home</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
