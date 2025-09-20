import React from "react";
import { ClipboardList, TrendingUp, Zap, CheckCircle } from "lucide-react";

const SolutionSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      
      <div className="relative container mx-auto max-w-7xl text-center">
        <div className="mb-20">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-emerald-500/20 rounded-full mb-8 border-2 border-emerald-500/30">
            <CheckCircle className="w-12 h-12 text-emerald-400" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Clareza, execução e automação:
            </span>
            <br />
            <span className="text-white">
              o tripé que transforma seu comercial
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              em 90 dias.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-5xl mx-auto font-medium leading-relaxed">
            A consultoria <span className="text-blue-400 font-bold">Copiloto da Fábrica</span> une 
            <span className="text-emerald-400 font-semibold"> método, disciplina e tecnologia</span> para 
            industrializar a área de vendas da sua empresa.
          </p>
        </div>
        
        {/* Tripé Visual Profissional */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/30">
            
            {/* Three Pillars */}
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              
              {/* Pilar 1 - Clareza */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl scale-150 group-hover:scale-175 transition-transform duration-500"></div>
                  <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-amber-300/30 group-hover:scale-110 transition-transform duration-300">
                    <ClipboardList className="w-16 h-16 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-black text-amber-400 mb-4">CLAREZA</h3>
                <p className="text-slate-300 text-lg font-medium leading-relaxed">
                  Metodologia CLARO para diagnóstico estruturado e alinhamento total entre gestão e time comercial.
                </p>
              </div>

              {/* Pilar 2 - Execução */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl scale-150 group-hover:scale-175 transition-transform duration-500"></div>
                  <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-blue-300/30 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-16 h-16 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-black text-blue-400 mb-4">EXECUÇÃO</h3>
                <p className="text-slate-300 text-lg font-medium leading-relaxed">
                  Disciplina prática que transforma insights em resultados imediatos através de cadência estruturada.
                </p>
              </div>

              {/* Pilar 3 - Automação */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl scale-150 group-hover:scale-175 transition-transform duration-500"></div>
                  <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-emerald-300/30 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-16 h-16 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-black text-emerald-400 mb-4">AUTOMAÇÃO</h3>
                <p className="text-slate-300 text-lg font-medium leading-relaxed">
                  Sistema Copiloto + automação inteligente de mensagens para escalar resultados sem esforço manual.
                </p>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="relative h-24">
              <svg viewBox="0 0 600 100" className="w-full h-full">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
                
                {/* Connecting Lines */}
                <path d="M 100 50 Q 300 20 500 50" stroke="url(#connectionGradient)" strokeWidth="3" fill="none" strokeDasharray="8,4" opacity="0.8" />
                <path d="M 100 50 Q 300 80 500 50" stroke="url(#connectionGradient)" strokeWidth="3" fill="none" strokeDasharray="8,4" opacity="0.8" />
                
                {/* Center Hub */}
                <circle cx="300" cy="50" r="20" fill="white" stroke="url(#connectionGradient)" strokeWidth="3" />
                <text x="300" y="56" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">90D</text>
              </svg>
            </div>

            {/* Bottom Statement */}
            <div className="text-center mt-12">
              <p className="text-2xl md:text-3xl font-bold text-white">
                <span className="text-amber-400">CLAREZA</span> +{" "}
                <span className="text-blue-400">EXECUÇÃO</span> +{" "}
                <span className="text-emerald-400">AUTOMAÇÃO</span> ={" "}
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  MÁQUINA DE VENDAS
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;