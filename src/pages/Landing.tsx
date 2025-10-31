import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserCircle, Shield } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import heroBg from "@/assets/hero-bg.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={logo} 
            alt="Grêmio Fronteira Logo" 
            className="h-32 w-32 md:h-40 md:w-40 rounded-full shadow-lg"
          />
        </div>

        {/* Title */}
        <h1 className="mb-4 text-center text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-in">
          Sistema de Agendamentos
        </h1>
        <p className="mb-12 text-center text-xl md:text-2xl text-white/90 animate-fade-in font-light">
          Grêmio Fronteira
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md animate-fade-in">
          <Button
            onClick={() => navigate("/associado")}
            size="lg"
            className="flex-1 h-16 text-lg font-semibold bg-white hover:bg-white/90 text-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <UserCircle className="mr-2 h-6 w-6" />
            Sou Associado
          </Button>

          <Button
            onClick={() => navigate("/admin")}
            size="lg"
            className="flex-1 h-16 text-lg font-semibold bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Shield className="mr-2 h-6 w-6" />
            Sou Admin
          </Button>
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center text-white/70 text-sm">
          <p>Gerencie suas quadras e horários com facilidade</p>
        </div>
      </div>

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
      `}</style>
    </div>
  );
};

export default Landing;
