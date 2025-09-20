import React, { useEffect } from "react";
import { 
  ClipboardList, 
  TrendingUp, 
  Settings, 
  Key,
  Cog,
  Zap,
  CheckCircle,
  XCircle,
  ArrowRight
} from "lucide-react";
import { Card } from "@/components/ui/card";
import HeroSection from "@/components/landing/HeroSection";
import ChallengeSection from "@/components/landing/ChallengeSection";
import SolutionSection from "@/components/landing/SolutionSection";

const LPCopiloto: React.FC = () => {
  console.log('[LPCopiloto] Component function called');
  console.log('[LPCopiloto] React available:', typeof React);
  console.log('[LPCopiloto] useEffect available:', typeof useEffect);
  
  useEffect(() => {
    console.log('[LPCopiloto] Landing page mounted');
    console.log('[LPCopiloto] All sections mounted successfully');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Sessão 1 - A Promessa */}
      <HeroSection />

      {/* Sessão 2 - O Desafio */}
      <ChallengeSection />

      {/* Sessão 3 - A Solução */}
      <SolutionSection />

      {/* Sessão 4 - Roadmap da Implantação */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
        
        <div className="relative container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-500/20 rounded-full mb-8 border-2 border-blue-500/30">
              <ClipboardList className="w-12 h-12 text-blue-400" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                Roadmap da Implantação
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-16">
            {/* Fase 1 */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 border-2 border-blue-500/30 p-10 shadow-2xl backdrop-blur-sm">
                <div className="flex items-start gap-8">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-2xl flex-shrink-0 shadow-lg">
                    <ClipboardList className="w-12 h-12" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-black text-blue-400 mb-6">
                      Fase 1 — Diagnóstico Estruturado (Semana 1)
                    </h3>
                    <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6">
                      Em 7 dias, você terá clareza absoluta dos gargalos e potenciais do seu time comercial. Aplicamos a metodologia CLARO: <strong className="text-blue-300">Compreensão</strong> → escutamos gestão e time (como se veem, como veem o mercado). <strong className="text-blue-300">Levantamento</strong> → fatos que revelam gargalos e potenciais. <strong className="text-blue-300">Alinhamento</strong> → gestão e comercial na mesma página. <strong className="text-blue-300">Rotina inicial</strong> → micro-hábitos implantados. <strong className="text-blue-300">Objetivo</strong> → 2–3 prioridades críticas de curto prazo.
                    </p>
                    <div className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
                      <p className="font-bold text-blue-300 text-lg">📌 Entrega: Relatório CLARO + plano inicial de ataque.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Fase 2 */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-emerald-900/50 to-emerald-800/50 border-2 border-emerald-500/30 p-10 shadow-2xl backdrop-blur-sm">
                <div className="flex items-start gap-8">
                  <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 text-white p-6 rounded-2xl flex-shrink-0 shadow-lg">
                    <TrendingUp className="w-12 h-12" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-black text-emerald-400 mb-6">
                      Fase 2 — Execução Guiada (Semanas 2–6)
                    </h3>
                    <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6">
                      Transformamos clareza em disciplina prática que gera caixa imediato. <strong className="text-emerald-300">Reps no ritmo:</strong> metas semanais, pedidos mínimos, follow-ups sem falha. <strong className="text-emerald-300">Backlog reativado</strong> em até 7 dias. <strong className="text-emerald-300">Gestão leve e ágil</strong> (reuniões de 10 min). <strong className="text-emerald-300">Talentos explorados no limite</strong> (quem caça, quem cultiva).
                    </p>
                    <div className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
                      <p className="font-bold text-emerald-300 text-lg">📌 Entrega: Funil vivo + cadência funcionando + reps entregando previsibilidade.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Fase 3 */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 border-2 border-purple-500/30 p-10 shadow-2xl backdrop-blur-sm">
                <div className="flex items-start gap-8">
                  <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-6 rounded-2xl flex-shrink-0 shadow-lg">
                    <Settings className="w-12 h-12" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-black text-purple-400 mb-6">
                      Fase 3 — Consolidação & Escala (Semanas 7–12)
                    </h3>
                    <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-4">
                      Sua operação comercial rodando como uma linha de produção. <strong className="text-purple-300">Implantação do Sistema Copiloto:</strong> metas, indicadores e tarefas centralizados, com 12 meses de acesso incluído. <strong className="text-purple-300">Automação de mensagens (WhatsApp + Email):</strong> Disparadores com templates prontos. Fluxos segmentados por perfil/status do cliente. Foco no LTV (lifetime value).
                    </p>
                    <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6">
                      <strong className="text-purple-300">Otimização contínua:</strong> revisamos processos atacados, corrigimos e escalamos. <strong className="text-purple-300">Documentação viva:</strong> manual atualizado da operação comercial. <strong className="text-purple-300">Marketing de sustentação:</strong> LinkedIn + WhatsApp com hooks e conteúdo que gera demanda.
                    </p>
                    <div className="bg-purple-500/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
                      <p className="font-bold text-purple-300 text-lg">📌 Entrega: Comercial com rotina inquebrável + Copiloto ativo por 12 meses.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Timeline Visual */}
          <div className="mt-20 flex justify-center">
            <div className="relative">
              <div className="flex items-center space-x-12">
                <div className="text-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-3 shadow-lg border-2 border-blue-300/50"></div>
                  <span className="text-sm font-bold text-blue-400">Semana 1</span>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>
                <div className="text-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mb-3 shadow-lg border-2 border-emerald-300/50"></div>
                  <span className="text-sm font-bold text-emerald-400">Semanas 2-6</span>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-full"></div>
                <div className="text-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mb-3 shadow-lg border-2 border-purple-300/50"></div>
                  <span className="text-sm font-bold text-purple-400">Semanas 7-12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sessão 5 - O Resultado Esperado */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(239,68,68,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        
        <div className="relative container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
              <span className="text-white">De </span>
              <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">apagão comercial</span>
              <span className="text-white"> para </span>
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">previsibilidade de vendas</span>
              <br />
              <span className="text-white">em 90 dias.</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Antes */}
            <Card className="bg-gradient-to-br from-red-950/50 to-red-900/50 border-2 border-red-500/30 p-10 backdrop-blur-sm">
              <div className="text-center mb-8">
                <XCircle className="w-20 h-20 text-red-400 mx-auto mb-6" />
                <h3 className="text-3xl font-black text-red-400 mb-6">ANTES</h3>
              </div>
              <div className="space-y-6 text-slate-200 text-lg">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">❌</span>
                  <span className="font-semibold">Backlog parado</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">❌</span>
                  <span className="font-semibold">Metas confusas</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">❌</span>
                  <span className="font-semibold">Gestão sem clareza</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">❌</span>
                  <span className="font-semibold">Vendas imprevisíveis</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">❌</span>
                  <span className="font-semibold">Time desalinhado</span>
                </div>
              </div>
              
              {/* Gráfico Caótico */}
              <div className="mt-10 bg-red-950/30 rounded-xl p-6 border border-red-500/20">
                <svg viewBox="0 0 300 120" className="w-full h-auto">
                  <path d="M 20 100 Q 50 60 80 80 Q 110 40 140 70 Q 170 110 200 50 Q 230 90 260 75" 
                        fill="none" stroke="#ef4444" strokeWidth="3" opacity="0.8" />
                  <text x="150" y="110" textAnchor="middle" fill="#ef4444" fontSize="14" fontWeight="bold">Vendas Caóticas</text>
                </svg>
              </div>
            </Card>
            
            {/* Depois */}
            <Card className="bg-gradient-to-br from-emerald-950/50 to-emerald-900/50 border-2 border-emerald-500/30 p-10 backdrop-blur-sm">
              <div className="text-center mb-8">
                <CheckCircle className="w-20 h-20 text-emerald-400 mx-auto mb-6" />
                <h3 className="text-3xl font-black text-emerald-400 mb-6">DEPOIS</h3>
              </div>
              <div className="space-y-6 text-slate-200 text-lg">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">✅</span>
                  <span className="font-semibold">Funil vivo</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">✅</span>
                  <span className="font-semibold">Reps no ritmo</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">✅</span>
                  <span className="font-semibold">Gestão com controle</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">✅</span>
                  <span className="font-semibold">Vendas previsíveis</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">✅</span>
                  <span className="font-semibold">Time sincronizado</span>
                </div>
              </div>
              
              {/* Gráfico Crescente */}
              <div className="mt-10 bg-emerald-950/30 rounded-xl p-6 border border-emerald-500/20">
                <svg viewBox="0 0 300 120" className="w-full h-auto">
                  <path d="M 20 100 L 60 85 L 100 70 L 140 55 L 180 40 L 220 25 L 260 15" 
                        fill="none" stroke="#10b981" strokeWidth="3" />
                  <text x="150" y="110" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold">Vendas Previsíveis</text>
                </svg>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sessão 6 - Proposta de Valor */}
      <section className="py-24 px-6 bg-gradient-to-br from-amber-950 via-slate-900 to-blue-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.1),transparent_70%)]"></div>
        
        <div className="relative container mx-auto max-w-5xl text-center">
          <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg border-2 border-amber-400/30 shadow-2xl p-16 relative overflow-hidden">
            {/* Premium Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-blue-500/5"></div>
            
            <div className="relative">
              <div className="mb-12">
                <div className="w-28 h-28 bg-gradient-to-br from-amber-400 to-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl border-4 border-amber-300/30">
                  <Cog className="w-14 h-14" />
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                    A consultoria Copiloto da Fábrica
                  </span>
                  <br />
                  <span className="text-white">
                    é o pacote completo para clareza, execução e automação.
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-slate-300 mb-12 font-medium leading-relaxed">
                  Você recebe: A <span className="text-amber-400 font-bold">metodologia CLARO</span> para clareza e foco. 
                  O <span className="text-blue-400 font-bold">Sistema Copiloto</span> ativo por 12 meses. 
                  A <span className="text-emerald-400 font-bold">automação de mensagens</span> (WhatsApp + Email) 
                  implantada durante o processo.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-amber-500/10 rounded-2xl border border-amber-400/20 backdrop-blur-sm group hover:scale-105 transition-transform duration-300">
                  <ClipboardList className="w-16 h-16 text-amber-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-black text-amber-400 mb-3">Metodologia CLARO</h3>
                  <p className="text-slate-300 font-medium">Clareza e foco total</p>
                </div>
                <div className="text-center p-8 bg-blue-500/10 rounded-2xl border border-blue-400/20 backdrop-blur-sm group hover:scale-105 transition-transform duration-300">
                  <Zap className="w-16 h-16 text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-black text-blue-400 mb-3">Sistema Copiloto</h3>
                  <p className="text-slate-300 font-medium">12 meses incluído</p>
                </div>
                <div className="text-center p-8 bg-emerald-500/10 rounded-2xl border border-emerald-400/20 backdrop-blur-sm group hover:scale-105 transition-transform duration-300">
                  <Settings className="w-16 h-16 text-emerald-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-black text-emerald-400 mb-3">Automação</h3>
                  <p className="text-slate-300 font-medium">WhatsApp + Email</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Sessão 7 - Fechamento */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
        
        <div className="relative container mx-auto max-w-5xl text-center">
          <div className="mb-12">
            <Key className="w-32 h-32 text-amber-400 mx-auto mb-12" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-12 leading-tight">
              <span className="text-white">O próximo passo é simples:</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                começamos com clareza
              </span>
              <br />
              <span className="text-white">e terminamos com</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
                previsibilidade.
              </span>
            </h2>
            <div className="flex justify-center items-center space-x-6 text-2xl md:text-3xl">
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent font-black">CLARO</span>
              <ArrowRight className="w-8 h-8 text-amber-400" />
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent font-black">COPILOTO</span>
              <ArrowRight className="w-8 h-8 text-blue-400" />
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent font-black">RESULTADOS</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LPCopiloto;