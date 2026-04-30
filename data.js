/* ============================================================
   TINGO SANTI — CONTEÚDO DO SITE (v2 · institucional B2G)
   Edite aqui para atualizar qualquer informação do site.
   ============================================================ */

const SITE = {

  contatos: {
    default: {
      whatsapp:        "5521975214169",
      whatsappLabel:   "(21) 97521-4169",
      email:           "tingo.santi@proton.me",
      instagram:       "tingosanti",
      youtube:         "@tingosanti",
      spotifyArtistId: "1XfDGJ4C2wEsrAbWbVaZ4b",
      spotify:         "https://open.spotify.com/artist/1XfDGJ4C2wEsrAbWbVaZ4b",
      formspree:       "xyklpzbk",
      cnpj:            "56.047.654/0001-25",
      endereco:        "Av. Jornalista Alberto Francisco Torres, 389/1001 · Icaraí · Niterói · RJ · CEP 24230-006",
      companyLabel:    "NKT Artes Ltda",
      sectionTitle:    "Fale com a <em>produção</em>",
      sectionIntro:    "Solicitações de proposta, agenda, dossiê de notoriedade e materiais técnicos atendidas diretamente pela NKT Artes Ltda. Retorno em até 24 horas úteis.",
      formEnabled:     true
    }
  },

  contato: null,

  analytics: {
    googleAnalyticsId: "G-9T397607Z9"
  },

  /* ── HERO ─────────────────────────────────────────────── */
  hero: {
    youtubeId:   "M7ehpNbIbUY",
    eyebrow:     "Tributo oficial · NKT Artes Ltda · CNPJ 56.047.654/0001-25",
    titulo:      "Tingo Santi canta <em>Roberto Carlos</em>.",
    subtitulo:   "Espetáculo de tributo com orquestra, telão e fidelidade interpretativa. Programação oficial em prefeituras, fundações culturais e eventos institucionais.",
    proofline:   "Contratado por Macaé · Itaboraí · IPPB Portugal · Aprovado pela FUNARJ · Marca registrada no INPI",
    foto:        "img/hero_principal.jpg",
    videoCover:  "img/hero_video_cover_v2.jpg"
  },

  /* ── FAIXA DE CREDENCIAIS (logo abaixo do hero) ───────── */
  credenciais: [
    { titulo: "Macaé · RJ",          subtitulo: "Natal Magia 2025 · Contrato 098/2025 · DOM 11/12/2025" },
    { titulo: "Itaboraí · RJ",       subtitulo: "Natal Itá Luz 2024 · Dia das Mães 2025"               },
    { titulo: "FUNARJ",              subtitulo: "Aprovação oficial do projeto artístico"               },
    { titulo: "Porto · Portugal",    subtitulo: "Natal 2024 · Apresentação no IPPB"                    },
    { titulo: "INPI",                subtitulo: "Marca registrada · vigência até 2036"                 },
    { titulo: "NKT Artes Ltda",      subtitulo: "Empresa ativa · Certificado Digital ICP-Brasil"       }
  ],

  /* ── PARA PREFEITURAS E SECRETARIAS DE CULTURA ────────── */
  paraPrefeituras: {
    eyebrow: "Para Prefeituras e Secretarias de Cultura",
    titulo:  "Contratação <em>segura</em>, com precedente público e dossiê pronto.",
    intro:   "O projeto Tingo Santi opera por meio da NKT Artes Ltda, empresa formalmente constituída e ativa, com histórico recente de contratação por prefeituras pelo regime de inexigibilidade de licitação (art. 74, II, Lei 14.133/2021). Toda a documentação para análise prévia do setor jurídico e do controle interno é enviada sob demanda.",
    pilares: [
      {
        titulo: "Inexigibilidade de licitação",
        desc:   "Fundamentação no art. 74, II, da Lei 14.133/2021, com Estudo Técnico Preliminar e Termo de Referência aprovados em precedentes anteriores."
      },
      {
        titulo: "Empresa apta a contratar",
        desc:   "NKT Artes Ltda com CNPJ ativo, Certificado Digital ICP-Brasil válido e regularidade fiscal para contratação com o Poder Público."
      },
      {
        titulo: "Precedentes em Diário Oficial",
        desc:   "Contratos publicados em DOM. Macaé · Natal Magia 2025 · Empenho 003182/2025 · R$ 50.000 · Processo SEI 014403/2025."
      },
      {
        titulo: "Dossiê de notoriedade artística",
        desc:   "Documento técnico com fundamentação jurídica, indicadores objetivos, registro INPI e clipping de imprensa, pronto para instrução do processo."
      },
      {
        titulo: "Repertório institucionalmente seguro",
        desc:   "Obra de Roberto Carlos atravessa gerações, é familiar e isenta de polêmica. Adequado para programação cultural pública e eventos cívicos."
      },
      {
        titulo: "Operação documentada",
        desc:   "Riders técnicos, release, perfil do artista, certidões e CRF disponíveis em pacote único, formatado para instrução administrativa."
      }
    ],
    documentos: [
      "Dossiê Técnico de Notoriedade Artística 2026",
      "Termo de Referência (modelo)",
      "Carta de Exclusividade de Representação",
      "Riders Técnicos (som, palco, luz, camarim)",
      "Certidão de Regularidade Fiscal (CRF)",
      "Registro de Marca INPI · vigência até 2036",
      "Clipping de Imprensa consolidado",
      "Release Oficial do Espetáculo"
    ],
    precedente: {
      titulo:    "Precedente público recente",
      municipio: "Município de Macaé · RJ",
      evento:    "Natal Magia 2025 · Programação Oficial",
      processo:  "Processo SEI 014403/2025 · Contrato 098/2025",
      empenho:   "Nota de Empenho 003182/2025 · R$ 50.000,00",
      modalidade:"Inexigibilidade · Art. 74, II, Lei 14.133/2021",
      dom:       "Publicado no Diário Oficial de Macaé em 11/12/2025",
      execucao:  "Espetáculo executado em duas noites com lotação plena, sem ocorrência de segurança, com relatório de desempenho protocolado."
    }
  },

  /* ── O ESPETÁCULO ─────────────────────────────────────── */
  show: {
    fotoMain:   "img/galeria_natal_magia_palco.jpg",
    fotoAccent: "img/espetaculo_accent_itaborai.jpg",
    intro:      "Tributo ao Rei é um espetáculo de 90 minutos com produção completa, repertório dos maiores sucessos de Roberto Carlos e fidelidade interpretativa sustentada por semelhança vocal natural. Concebido para praças públicas, teatros municipais e eventos cívicos de médio e grande porte.",
    features: [
      {
        titulo: "Voz natural, sem caricatura",
        desc:   "A semelhança vocal com Roberto Carlos é o ativo central do projeto, e é natural. Sem peruca, sem imitação forçada, sem trabalho de sósia. Tributo respeitoso, com sofisticação artística."
      },
      {
        titulo: "Orquestra, telão e figurino",
        desc:   "Produção de palco completa: orquestra ao vivo em formato híbrido com OVS, telão de apoio cênico e figurino de corte italiano. Nível de produção compatível com programações culturais de referência."
      },
      {
        titulo: "Escala 500 a 3.000 pessoas",
        desc:   "Adaptável a praças públicas, teatros municipais, ginásios cobertos e eventos ao ar livre. Mantém a qualidade técnica em todos os formatos."
      },
      {
        titulo: "Integração com músicos e corais locais",
        desc:   "Possibilidade de integração com músicos e corais da cidade contratante, valorizando o ecossistema cultural local e ampliando o engajamento da comunidade com a programação."
      },
      {
        titulo: "Repertório familiar a todas as gerações",
        desc:   "Sucessos consagrados da obra de Roberto Carlos. Repertório de memória afetiva que conecta avós, pais e netos, ideal para programação cultural pública."
      },
      {
        titulo: "Entrega previsível e documentada",
        desc:   "Riders técnicos, checklist operacional, suporte pré e pós-evento. O contratante recebe pacote completo de documentação e sabe exatamente o que esperar."
      }
    ],
    formatos: [
      { titulo: "Praças públicas", desc: "Aniversário de cidade, Natal, Dia das Mães, eventos cívicos ao ar livre." },
      { titulo: "Teatros municipais", desc: "Programação cultural regular, temporada e eventos comemorativos." },
      { titulo: "Eventos institucionais", desc: "Festivais, fundações culturais, programas de cidadania e cultura." }
    ]
  },

  /* ── GALERIA ──────────────────────────────────────────── */
  galeria: [
    { arquivo: "img/galeria_natal_magia_palco.jpg" },
    { arquivo: "img/galeria_show_braco_aberto.jpg" },
    { arquivo: "img/galeria_rosas_plateia.jpg"     },
    { arquivo: "img/galeria_drone_igreja.jpg"      },
    { arquivo: "img/galeria_pcsf_plateia.jpg"      },
    { arquivo: "img/galeria_macae_plateia.jpg"     },
    { arquivo: "img/galeria_palco_orquestra_pcsf.jpg" },
    { arquivo: "img/galeria_plateia_natal.jpg"     },
    { arquivo: "img/galeria_lenco_verde.jpg"       },
    { arquivo: "img/galeria_apontando.jpg"         },
    { arquivo: "img/galeria_bracos_abertos.jpg"    },
    { arquivo: "img/galeria_sorriso.jpg"           }
  ],

  /* ── IMPRENSA ─────────────────────────────────────────── */
  imprensaQuote: {
    texto: "Reconhecido por sua impressionante semelhança vocal e presença de palco, Tingo emociona o público ao interpretar os grandes sucessos do eterno Rei. Produção de altíssimo nível, com orquestra e cenografia cuidadosamente planejada.",
    fonte: "Folha de Niterói · 2025"
  },

  imprensa: [
    {
      veiculo:  "Projeto Draft",
      data:     "Lifehackers · Abril 2026",
      manchete: "De CEO de multinacional a cantor e doutorando: como planejei ser dono do meu próprio tempo",
      imagem:   "img/imprensa/projeto_draft.jpg",
      pos:      "center top",
      tamanho:  "sz-l",
      destaque: true,
      link:     "https://projetodraft.com/"
    },
    {
      veiculo:  "Folha de Niterói",
      data:     "Capa + Matéria · Outubro 2024",
      manchete: "O novo fenômeno musical de Niterói debuta com sucesso em seu primeiro show",
      imagem:   "img/imprensa/folha_capa_out2024.jpg",
      pos:      "center top",
      tamanho:  "sz-m",
      link:     ""
    },
    {
      veiculo:  "Antena 1",
      data:     "Podcast · 2021",
      manchete: "Lado Pessoal · Entrevista com Ailton Santos, então CEO da Nokia Brasil",
      imagem:   "img/imprensa/antena1.jpg",
      pos:      "center center",
      tamanho:  "sz-m",
      link:     ""
    },
    {
      veiculo:  "Prefeitura de Macaé · Site Oficial",
      data:     "Dezembro 2025",
      manchete: "Natal Magia 2025 · Programação Oficial · Tributo a Roberto Carlos com Tingo Santi",
      imagem:   "img/imprensa/odia_macae.jpg",
      pos:      "center top",
      tamanho:  "sz-s",
      official: true,
      link:     ""
    },
    {
      veiculo:  "Prefeitura de Itaboraí · Site Oficial",
      data:     "Maio 2025",
      manchete: "Itaboraí 192 anos · Tributo a Roberto Carlos homenageia mulheres no Dia das Mães",
      imagem:   "img/imprensa/errejota_itaborai.jpg",
      pos:      "center top",
      tamanho:  "sz-s",
      official: true,
      link:     "https://tvprefeito.com/itaborai-192-anos-tributo-a-roberto-carlos-homenageia-mulheres-itaboraienses-neste-dia-das-maes/"
    },
    {
      veiculo:  "O Dia",
      data:     "Dezembro 2025",
      manchete: "Natal Magia transforma a orla de Macaé em palco de grandes espetáculos",
      imagem:   "img/imprensa/odia_macae.jpg",
      pos:      "center top",
      tamanho:  "sz-s",
      link:     "https://odia.ig.com.br/macae/2025/12/7185487-natal-magia-transforma-a-orla-de-macae-em-palco-de-grandes-espetaculos.html"
    },
    {
      veiculo:  "O Dia",
      data:     "Dezembro 2025",
      manchete: "Natal Itá Luz emociona Itaboraí com tributo a Roberto Carlos",
      imagem:   "img/imprensa/odia_itaborai.jpg",
      pos:      "center top",
      tamanho:  "sz-s",
      link:     "https://odia.ig.com.br/itaborai/2025/12/7184930-natal-ita-luz-emociona-itaborai-e-encerra-programacao-com-tributo-a-roberto-carlos.html"
    },
    {
      veiculo:  "Errejota Notícias",
      data:     "Dezembro 2025",
      manchete: "Natal Itá Luz encerra programação com show em homenagem a Roberto Carlos",
      imagem:   "img/imprensa/errejota_itaborai.jpg",
      pos:      "center top",
      tamanho:  "sz-s",
      link:     "https://errejotanoticias.com.br/natal-ita-luz-encerra-programacao-com-show-em-homenagem-a-roberto-carlos-em-itaborai/"
    },
    {
      veiculo:  "Folha de Niterói",
      data:     "Maio 2025",
      manchete: "Praia Clube São Francisco recebe espetáculo em tributo a Roberto Carlos",
      imagem:   "img/imprensa/folha_materia_maio2025.jpg",
      pos:      "center top",
      tamanho:  "sz-s",
      link:     ""
    },
    {
      veiculo:  "NitNegócios",
      data:     "2024",
      manchete: "Cobertura editorial sobre o projeto Tingo Santi",
      imagem:   "img/imprensa/nitnegocios.jpg",
      pos:      "center center",
      tamanho:  "sz-s",
      link:     ""
    }
  ],

  /* ── NÚMEROS ──────────────────────────────────────────── */
  numerosTitulo:    "Indicadores que <em>sustentam</em> o projeto",
  numerosSubtitulo: "Dados objetivos de presença pública, tração digital e alcance editorial. Atualizados em 2026.",
  numeros: [
    {
      destaque: true,
      numero:   "21,4M",
      label:    "Execuções no streaming",
      desc:     "Catálogo autoral e interpretativo no Spotify e Apple Music. Maior prova quantitativa de aderência do público ao projeto."
    },
    {
      numero: "63K+",
      label:  "Seguidores no Instagram",
      desc:   "Crescimento 100% orgânico, sem tráfego pago."
    },
    {
      numero: "5M+",
      label:  "Visualizações de posts",
      desc:   "Engajamento consistente em reels e vídeos de palco."
    },
    {
      numero: "1,8M",
      label:  "Pico anual de alcance",
      desc:   "Meta Insights · contas únicas impactadas em 12 meses."
    },
    {
      numero: "189",
      label:  "Países com consumo do catálogo",
      desc:   "Distribuição global via CDBaby."
    },
    {
      numero: "Portugal · Porto",
      label:  "Apresentação internacional",
      desc:   "Natal 2024 · Instituto Pernambuco Porto Brasil (IPPB)."
    }
  ],
  numerosRodape: "Fonte: CDBaby · Meta Insights · Spotify for Artists · atualizado em 2026",

  /* ── O ARTISTA ────────────────────────────────────────── */
  sobre: {
    foto:    "img/sobre_artista_close.jpg",
    citacao: "Não é cover. É um tributo respeitoso à obra do maior artista da música brasileira, conduzido com método e padrão de entrega corporativo.",
    paras: [
      "Tingo Santi é o nome artístico de Ailton Santos, cantor, intérprete e compositor brasileiro. O projeto principal é o espetáculo de tributo à obra de Roberto Carlos, sustentado por semelhança vocal natural e produção de palco profissional.",
      "Antes da carreira artística, Ailton Santos foi CEO e executivo sênior em multinacionais de tecnologia, com trajetória global em empresas como Nokia, HP, EDS, Baker Hughes e Xerox. Essa experiência é a base de uma operação artística conduzida com método, rigor documental e padrão corporativo de entrega.",
      "Como compositor, tem mais de 50 músicas autorais publicadas. A faixa <em>É Muita Saudade Pra Pouco Eu</em> ultrapassou 21 milhões de execuções nas plataformas digitais, com presença ativa em 189 países.",
      "Autor do livro <em>A Segunda Maçã: Inteligência Artificial e o Futuro da Sociedade Brasileira</em>, doutorando no COPPEAD/UFRJ com foco em IA aplicada à gestão e políticas públicas, e diretor executivo da NKT Artes Ltda."
    ],
    marcos: [
      { ano: "2021", desc: "Entrevista no podcast Lado Pessoal, Antena 1, como CEO da Nokia Brasil." },
      { ano: "2023", desc: "Início do projeto artístico. +50 composições autorais publicadas." },
      { ano: "2024", desc: "Apresentação internacional em Portugal. Aprovação pela FUNARJ." },
      { ano: "2025", desc: "Contratos com Macaé, Itaboraí e PCSF. +63 mil seguidores. 21M+ execuções." },
      { ano: "2026", desc: "Doutorado COPPEAD/UFRJ. Publicação editorial no Projeto Draft." }
    ]
  }

};
