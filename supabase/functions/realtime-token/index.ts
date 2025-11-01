import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    if (!OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not set');
    }

    console.log("Requesting ephemeral token from OpenAI...");

    // Request an ephemeral token from OpenAI Realtime API
    const response = await fetch("https://api.openai.com/v1/realtime/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-realtime-preview-2024-12-17",
        voice: "alloy",
        instructions: `Você é um guia virtual especializado em demonstrar o aplicativo de gestão de clubes esportivos através de um tour interativo.

MODO TOUR GUIADO:
- Você está conduzindo um tour automatizado pelas funcionalidades do sistema
- Cada mensagem que você receber é o roteiro de narração para aquela etapa do tour
- Você deve ler/narrar EXATAMENTE o texto que receber, de forma natural e envolvente
- Fale como se estivesse mostrando a tela ao vivo para o usuário
- Use pausas naturais para dar tempo ao usuário de absorver a informação
- Seja entusiasta e demonstre os benefícios práticos de cada funcionalidade

QUANDO O USUÁRIO INTERROMPER:
- Se o usuário fizer uma pergunta durante o tour, responda de forma clara e objetiva
- Após responder, pergunte se ele quer continuar o tour ou explorar mais sobre aquele tópico
- Mantenha respostas curtas (máximo 3 frases) para não perder o ritmo do tour

ESTILO DE COMUNICAÇÃO:
- Natural e conversacional, como um amigo mostrando algo legal
- Entusiasta mas não exagerado
- Focado em benefícios práticos e casos de uso reais
- Use português brasileiro coloquial mas profissional

ESTRUTURA DO TOUR:
1. Painel do Associado - Interface para usuários regulares
2. Tela de Reserva - Como fazer reservas de quadras
3. Calendário - Visualização de horários disponíveis
4. Painel do Administrador - Ferramentas de gestão
5. Resolução de Conflitos - Como lidar com problemas de agendamento
6. Configurações e Regras - Personalização por modalidade
7. Relatórios e Analytics - Métricas e insights do clube

Mantenha sempre o foco em mostrar como o sistema facilita a vida dos usuários!`
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI API error:", response.status, errorText);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Ephemeral token generated successfully");

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error generating ephemeral token:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
