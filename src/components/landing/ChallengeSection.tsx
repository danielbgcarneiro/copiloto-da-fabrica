import React from "react";
import { Package, Users, Calendar, BarChart3, XCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const ChallengeSection: React.FC = () => {
  const challenges = [
    { 
      icon: Package, 
      title: "Backlog parado e clientes esquecidos.", 
      color: "from-red-500 to-red-600", 
      bgColor: "bg-red-500/10", 
      borderColor: "border-red-500/30" 
    },
    { 
      icon: Users, 
      title: "Time e gestão desalinhados.", 
      color: "from-orange-500 to-orange-600", 
      bgColor: "bg-orange-500/10", 
      borderColor: "border-orange-500/30" 
    },
    { 
      icon: Calendar, 
      title: "Zero previsibilidade de metas.", 
      color: "from-yellow-500 to-yellow-600", 
      bgColor: "bg-yellow-500/10", 
      borderColor: "border-yellow-500/30" 
    },
    { 
      icon: BarChart3, 
      title: "Crescimento travado por falta de cadência.", 
      color: "from-red-600 to-red-700", 
      bgColor: "bg-red-600/10", 
      borderColor: "border-red-600/30" 
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-red-950 via-slate-900 to-slate-950 relative">
      {/* Danger Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(239, 68, 68, 0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(239, 68, 68, 0.1) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(239, 68, 68, 0.1) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(239, 68, 68, 0.1) 75%)
          `,
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px'
        }}></div>
      </div>

      <div className="relative container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-8 border-2 border-red-500/30">
            <XCircle className="w-10 h-10 text-red-400" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            <span className="text-red-400">Hoje, sua empresa pode estar</span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-red-300 to-orange-400 bg-clip-text text-transparent">
              perdendo vendas todos os dias
            </span>
            <br />
            <span className="text-white">sem perceber.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((item, index) => {
            const IconComponent = item.icon;
            
            return (
              <Card key={index} className={`${item.bgColor} border-2 ${item.borderColor} p-8 text-center hover:scale-105 transition-all duration-300 backdrop-blur-sm group`}>
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <p className="text-lg font-semibold text-white leading-tight">{item.title}</p>
              </Card>
            );
          })}
        </div>

        {/* Impact Statement */}
        <div className="mt-20 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold text-red-400 mb-4">
              ⚠️ ALERTA CRÍTICO
            </p>
            <p className="text-xl text-slate-300 font-medium">
              Cada dia sem uma operação comercial estruturada representa 
              <span className="text-red-400 font-bold"> receita perdida</span> e 
              <span className="text-red-400 font-bold"> oportunidades desperdiçadas</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;