import React, { useEffect } from "react";
import { 
  Package, 
  Users, 
  Calendar, 
  BarChart3, 
  ClipboardList, 
  TrendingUp, 
  Settings, 
  Key,
  Target,
  Cog,
  Zap,
  CheckCircle,
  XCircle,
  ArrowRight
} from "lucide-react";
import { Card } from "@/components/ui/card";

const LPCopiloto: React.FC = () => {
  console.log('[LPCopiloto] Component function called');
  console.log('[LPCopiloto] React available:', typeof React);
  console.log('[LPCopiloto] useEffect available:', typeof useEffect);
  
  useEffect(() => {
    console.log('[LPCopiloto] Landing page mounted');
    console.log('[LPCopiloto] All sections mounted successfully');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Sessão 1 - A Promessa */}
      <section className="relative bg-gradient-industrial text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <div className="mb-8 mx-auto w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Target className="w-12 h-12 text-industrial-gold" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Com a consultoria Copiloto da Fábrica, em 90 dias sua área comercial deixa de ser um centro de custo imprevisível e passa a operar como uma máquina de vendas previsível e controlada.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Nosso processo combina a metodologia CLARO, o Sistema Copiloto e a automação inteligente de mensagens para transformar seu comercial em uma linha de produção de vendas.
            </p>
          </div>
          
          {/* Industrial Production Line Visual */}
          <div className="mt-16 flex justify-center">
            <div className="relative w-full max-w-4xl">
              <svg viewBox="0 0 800 200" className="w-full h-auto">
                <defs>
                  <linearGradient id="productionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--factory-orange))" />
                    <stop offset="50%" stopColor="hsl(var(--industrial-gold))" />
                    <stop offset="100%" stopColor="hsl(var(--machine-green))" />
                  </linearGradient>
                </defs>
                
                {/* Production Line */}
                <line x1="50" y1="100" x2="750" y2="100" stroke="url(#productionGradient)" strokeWidth="4" strokeDasharray="10,5" />
                
                {/* Production Stations */}
                <circle cx="150" cy="100" r="20" fill="hsl(var(--factory-orange))" />
                <circle cx="400" cy="100" r="20" fill="hsl(var(--industrial-gold))" />
                <circle cx="650" cy="100" r="20" fill="hsl(var(--machine-green))" />
                
                {/* Labels */}
                <text x="150" y="140" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Clareza</text>
                <text x="400" y="140" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Execução</text>
                <text x="650" y="140" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Automação</text>
                
                {/* Growth Arrow */}
                <path d="M 680 80 L 750 50 L 750 110 Z" fill="hsl(var(--machine-green))" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Sessão 2 - O Desafio */}
      <section className="py-20 px-4 bg-steel-gray-dark text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-factory-orange">
              Hoje, sua empresa pode estar perdendo vendas todos os dias sem perceber.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Package, title: "Backlog parado e clientes esquecidos.", color: "text-red-400" },
              { icon: Users, title: "Time e gestão desalinhados.", color: "text-orange-400" },
              { icon: Calendar, title: "Zero previsibilidade de metas.", color: "text-yellow-400" },
              { icon: BarChart3, title: "Crescimento travado por falta de cadência.", color: "text-red-500" }
            ].map((item, index) => {
              const IconComponent = item.icon;
              
              return (
                <Card key={index} className="bg-white/5 border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  <IconComponent className={`w-16 h-16 mx-auto mb-4 ${item.color}`} />
                  <p className="text-lg font-medium text-gray-200">{item.title}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sessão 3 - A Solução */}
      <section className="py-20 px-4 bg-gradient-factory">
        <div className="container mx-auto max-w-6xl text-center text-white">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Clareza, execução e automação: o tripé que transforma seu comercial em 90 dias.
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-16 max-w-4xl mx-auto">
              A consultoria Copiloto da Fábrica une método, disciplina e tecnologia para industrializar a área de vendas da sua empresa.
            </p>
          </div>
          
          {/* Tripé Visual */}
          <div className="relative max-w-2xl mx-auto">
            <svg viewBox="0 0 400 300" className="w-full h-auto">
              <defs>
                <pattern id="blueprint" patternUnits="userSpaceOnUse" width="20" height="20">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--industrial-gold))" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              
              {/* Blueprint background */}
              <rect width="400" height="300" fill="url(#blueprint)" />
              
              {/* Tripé structure */}
              <polygon points="200,50 120,250 280,250" fill="none" stroke="hsl(var(--industrial-gold))" strokeWidth="3" strokeDasharray="5,5" />
              
              {/* Pillars */}
              <circle cx="200" cy="50" r="15" fill="hsl(var(--industrial-gold))" />
              <circle cx="120" cy="250" r="15" fill="hsl(var(--industrial-gold))" />
              <circle cx="280" cy="250" r="15" fill="hsl(var(--industrial-gold))" />
              
              {/* Labels */}
              <text x="200" y="30" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">CLAREZA</text>
              <text x="120" y="280" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">EXECUÇÃO</text>
              <text x="280" y="280" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">AUTOMAÇÃO</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Sessão 4 - Roadmap da Implantação */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-steel-gray-dark">
              Roadmap da Implantação
            </h2>
            <div className="w-24 h-1 bg-industrial-gold mx-auto"></div>
          </div>
          
          <div className="space-y-12">
            {/* Fase 1 */}
            <div className="relative">
              <Card className="bg-blue-50 border-l-4 border-l-industrial-blue p-8 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="bg-industrial-blue text-white p-4 rounded-full flex-shrink-0">
                    <ClipboardList className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-industrial-blue mb-4">
                      Fase 1 — Diagnóstico Estruturado (Semana 1)
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Em 7 dias, você terá clareza absoluta dos gargalos e potenciais do seu time comercial. Aplicamos a metodologia CLARO: <strong>Compreensão</strong> → escutamos gestão e time (como se veem, como veem o mercado). <strong>Levantamento</strong> → fatos que revelam gargalos e potenciais. <strong>Alinhamento</strong> → gestão e comercial na mesma página. <strong>Rotina inicial</strong> → micro-hábitos implantados. <strong>Objetivo</strong> → 2–3 prioridades críticas de curto prazo.
                    </p>
                    <div className="mt-4 p-4 bg-industrial-blue/10 rounded-lg">
                      <p className="font-semibold text-industrial-blue">📌 Entrega: Relatório CLARO + plano inicial de ataque.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Fase 2 */}
            <div className="relative">
              <Card className="bg-green-50 border-l-4 border-l-machine-green p-8 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="bg-machine-green text-white p-4 rounded-full flex-shrink-0">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-machine-green mb-4">
                      Fase 2 — Execução Guiada (Semanas 2–6)
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Transformamos clareza em disciplina prática que gera caixa imediato. <strong>Reps no ritmo:</strong> metas semanais, pedidos mínimos, follow-ups sem falha. <strong>Backlog reativado</strong> em até 7 dias. <strong>Gestão leve e ágil</strong> (reuniões de 10 min). <strong>Talentos explorados no limite</strong> (quem caça, quem cultiva).
                    </p>
                    <div className="mt-4 p-4 bg-machine-green/10 rounded-lg">
                      <p className="font-semibold text-machine-green">📌 Entrega: Funil vivo + cadência funcionando + reps entregando previsibilidade.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Fase 3 */}
            <div className="relative">
              <Card className="bg-purple-50 border-l-4 border-l-purple-600 p-8 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="bg-purple-600 text-white p-4 rounded-full flex-shrink-0">
                    <Settings className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-600 mb-4">
                      Fase 3 — Consolidação & Escala (Semanas 7–12)
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Sua operação comercial rodando como uma linha de produção. <strong>Implantação do Sistema Copiloto:</strong> metas, indicadores e tarefas centralizados, com 12 meses de acesso incluído. <strong>Automação de mensagens (WhatsApp + Email):</strong> Disparadores com templates prontos. Fluxos segmentados por perfil/status do cliente. Foco no LTV (lifetime value).
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <strong>Otimização contínua:</strong> revisamos processos atacados, corrigimos e escalamos. <strong>Documentação viva:</strong> manual atualizado da operação comercial. <strong>Marketing de sustentação:</strong> LinkedIn + WhatsApp com hooks e conteúdo que gera demanda.
                    </p>
                    <div className="mt-4 p-4 bg-purple-600/10 rounded-lg">
                      <p className="font-semibold text-purple-600">📌 Entrega: Comercial com rotina inquebrável + Copiloto ativo por 12 meses.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Timeline Visual */}
          <div className="mt-16 flex justify-center">
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="w-4 h-4 bg-industrial-blue rounded-full mb-2"></div>
                <span className="text-sm font-medium text-gray-600">Semana 1</span>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-industrial-blue to-machine-green"></div>
              <div className="text-center">
                <div className="w-4 h-4 bg-machine-green rounded-full mb-2"></div>
                <span className="text-sm font-medium text-gray-600">Semanas 2-6</span>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-machine-green to-purple-600"></div>
              <div className="text-center">
                <div className="w-4 h-4 bg-purple-600 rounded-full mb-2"></div>
                <span className="text-sm font-medium text-gray-600">Semanas 7-12</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sessão 5 - O Resultado Esperado */}
      <section className="py-20 px-4 bg-steel-gray text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              De apagão comercial para previsibilidade de vendas em 90 dias.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Antes */}
            <Card className="bg-red-900/20 border-red-500 p-8">
              <div className="text-center mb-6">
                <XCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-400">Antes</h3>
              </div>
              <div className="space-y-4 text-gray-200">
                <p>❌ Backlog parado</p>
                <p>❌ Metas confusas</p>
                <p>❌ Gestão sem clareza</p>
                <p>❌ Vendas imprevisíveis</p>
                <p>❌ Time desalinhado</p>
              </div>
              
              {/* Gráfico Caótico */}
              <div className="mt-8">
                <svg viewBox="0 0 300 150" className="w-full h-auto">
                  <path d="M 20 120 Q 50 80 80 100 Q 110 60 140 90 Q 170 130 200 70 Q 230 110 260 95" 
                        fill="none" stroke="#ef4444" strokeWidth="3" opacity="0.7" />
                  <text x="150" y="140" textAnchor="middle" fill="#ef4444" fontSize="12">Vendas Caóticas</text>
                </svg>
              </div>
            </Card>
            
            {/* Depois */}
            <Card className="bg-machine-green/20 border-machine-green p-8">
              <div className="text-center mb-6">
                <CheckCircle className="w-16 h-16 text-machine-green mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-machine-green">Depois</h3>
              </div>
              <div className="space-y-4 text-gray-200">
                <p>✅ Funil vivo</p>
                <p>✅ Reps no ritmo</p>
                <p>✅ Gestão com controle</p>
                <p>✅ Vendas previsíveis</p>
                <p>✅ Time sincronizado</p>
              </div>
              
              {/* Gráfico Crescente */}
              <div className="mt-8">
                <svg viewBox="0 0 300 150" className="w-full h-auto">
                  <path d="M 20 120 L 60 100 L 100 85 L 140 70 L 180 55 L 220 40 L 260 25" 
                        fill="none" stroke="hsl(var(--machine-green))" strokeWidth="3" />
                  <text x="150" y="140" textAnchor="middle" fill="hsl(var(--machine-green))" fontSize="12">Vendas Previsíveis</text>
                </svg>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sessão 6 - Proposta de Valor */}
      <section className="py-20 px-4 bg-gradient-premium">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="bg-white/95 backdrop-blur-sm border-2 border-industrial-gold shadow-premium p-12">
            <div className="mb-8">
              <div className="w-20 h-20 bg-industrial-gold text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Cog className="w-10 h-10" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-steel-gray-dark mb-6">
                A consultoria Copiloto da Fábrica é o pacote completo para clareza, execução e automação.
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Você recebe: A metodologia CLARO para clareza e foco. O Sistema Copiloto ativo por 12 meses. A automação de mensagens (WhatsApp + Email) implantada durante o processo.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-industrial-blue/5 rounded-lg">
                <ClipboardList className="w-12 h-12 text-industrial-blue mx-auto mb-4" />
                <h3 className="font-bold text-industrial-blue mb-2">Metodologia CLARO</h3>
                <p className="text-sm text-gray-600">Clareza e foco total</p>
              </div>
              <div className="text-center p-6 bg-machine-green/5 rounded-lg">
                <Zap className="w-12 h-12 text-machine-green mx-auto mb-4" />
                <h3 className="font-bold text-machine-green mb-2">Sistema Copiloto</h3>
                <p className="text-sm text-gray-600">12 meses incluído</p>
              </div>
              <div className="text-center p-6 bg-factory-orange/5 rounded-lg">
                <Settings className="w-12 h-12 text-factory-orange mx-auto mb-4" />
                <h3 className="font-bold text-factory-orange mb-2">Automação</h3>
                <p className="text-sm text-gray-600">WhatsApp + Email</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Sessão 7 - Fechamento */}
      <section className="py-20 px-4 bg-industrial-blue-dark text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <Key className="w-24 h-24 text-industrial-gold mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              O próximo passo é simples: começamos com clareza e terminamos com previsibilidade.
            </h2>
            <div className="flex justify-center items-center space-x-4 text-xl">
              <span className="text-industrial-gold font-semibold">CLARO</span>
              <ArrowRight className="w-6 h-6 text-industrial-gold" />
              <span className="text-white font-semibold">COPILOTO</span>
              <ArrowRight className="w-6 h-6 text-industrial-gold" />
              <span className="text-machine-green font-semibold">RESULTADOS</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LPCopiloto;