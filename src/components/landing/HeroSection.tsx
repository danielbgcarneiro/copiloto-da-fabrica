import React from "react";
import { Target } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Icon */}
          <div className="mb-12 mx-auto w-32 h-32 relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl border border-blue-400/30">
              <Target className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">
              Com a consultoria Copiloto da Fábrica,
            </span>
            <br />
            <span className="text-white">
              em 90 dias sua área comercial deixa de ser um centro de custo imprevisível
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 bg-clip-text text-transparent">
              e passa a operar como uma máquina de vendas previsível e controlada.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-16 font-medium">
            Nosso processo combina a <span className="text-blue-400 font-semibold">metodologia CLARO</span>, 
            o <span className="text-emerald-400 font-semibold">Sistema Copiloto</span> e a 
            <span className="text-amber-400 font-semibold"> automação inteligente de mensagens</span> para 
            transformar seu comercial em uma linha de produção de vendas.
          </p>

          {/* Production Line Visual */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <svg viewBox="0 0 800 160" className="w-full h-auto">
                <defs>
                  <linearGradient id="productionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Production Line */}
                <line x1="100" y1="80" x2="700" y2="80" stroke="url(#productionGradient)" strokeWidth="6" filter="url(#glow)" />
                
                {/* Production Stations */}
                <circle cx="200" cy="80" r="24" fill="#f59e0b" filter="url(#glow)" />
                <circle cx="400" cy="80" r="24" fill="#3b82f6" filter="url(#glow)" />
                <circle cx="600" cy="80" r="24" fill="#10b981" filter="url(#glow)" />
                
                {/* Station Icons */}
                <text x="200" y="86" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">C</text>
                <text x="400" y="86" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">E</text>
                <text x="600" y="86" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">A</text>
                
                {/* Labels */}
                <text x="200" y="120" textAnchor="middle" fill="#f59e0b" fontSize="16" fontWeight="bold">CLAREZA</text>
                <text x="400" y="120" textAnchor="middle" fill="#3b82f6" fontSize="16" fontWeight="bold">EXECUÇÃO</text>
                <text x="600" y="120" textAnchor="middle" fill="#10b981" fontSize="16" fontWeight="bold">AUTOMAÇÃO</text>
                
                {/* Growth Arrow */}
                <path d="M 630 60 L 680 40 L 680 80 Z" fill="#10b981" filter="url(#glow)" />
                <text x="720" y="65" fill="#10b981" fontSize="14" fontWeight="bold">CRESCIMENTO</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;