/* ============================================================
   TINGO SANTI — ARQUIVO DE CONTEÚDO
   Edite aqui para atualizar qualquer informação do site.
   ============================================================ */

const SITE = {

  contato: {
    whatsapp:     "5521975214169",
    whatsappLabel:"(21) 97521-4169",
    email:        "tingo.santi@proton.me",
    instagram:    "tingosanti",
    youtube:      "@tingosanti",
    spotifyArtistId: "1XfDGJ4C2wEsrAbWbVaZ4b",
    spotify:      "https://open.spotify.com/artist/1XfDGJ4C2wEsrAbWbVaZ4b",
    formspree:    "INSIRA_FORMSPREE_ID",
    cnpj:         "56.047.654/0001-25",
    endereco:     "Av. Jornalista Alberto Francisco Torres, 389/1001 · Icaraí · Niterói · RJ · CEP 24230-006"
  },

  analytics: {
    googleAnalyticsId: "INSIRA_GA4_ID"
  },

  hero: {
    youtubeId:  "M7ehpNbIbUY",
    tagline:    "A obra de Roberto Carlos ao vivo, com voz natural, orquestra e emoção verdadeira.",
    foto:       "img/hero_principal.jpg"
  },

  /* ── VÍDEOS — APENAS 1 (SIMPLIFICADO) ─────────────────── */
  videoShow: {
    titulo:    "Tributo ao Rei · Show ao Vivo",
    youtubeId: "M7ehpNbIbUY"
  },

  /* ── GALERIA — mosaico com orientação corrigida ────────
     'wide' = landscape (2 colunas, 1 linha)
     'tall' = portrait (1 coluna, 2 linhas)
     ''     = quadrado default (1 coluna, 1 linha)
     Fotos landscape só vão em slots wide. Portraits só em tall ou default.
  */
  galeria: [
    { arquivo: "img/galeria_flores.jpg",              tamanho: "wide", pos: "center center" },
    { arquivo: "img/galeria_microfone_bordado.jpg",   tamanho: "tall", pos: "center top"    },
    { arquivo: "img/galeria_drone_igreja.jpg",        tamanho: "tall", pos: "center center" },
    { arquivo: "img/galeria_lencinho.jpg",            tamanho: "wide", pos: "center 35%"    },
    { arquivo: "img/galeria_sorriso.jpg",             tamanho: "tall", pos: "center top"    },
    { arquivo: "img/galeria_bracos_abertos.jpg",      tamanho: "tall", pos: "center top"    },
    { arquivo: "img/galeria_plateia_natal.jpg",       tamanho: "tall", pos: "center center" },
    { arquivo: "img/galeria_apontando.jpg",           tamanho: "tall", pos: "center 25%"    }
  ],

  /* ── COMPOSITOR (nova seção) ───────────────────────────── */
  compositor: {
    titulo:    "Além do tributo, há uma <em>obra autoral</em>",
    subtitulo: "Tingo Santi é também compositor. O catálogo autoral está ativo em plataformas digitais globais e é uma camada do projeto que amplia a aderência do espetáculo junto ao público.",
    youtubeShortId: "bXdIIxEg7PY",
    spotifyEmbedType: "artist",
    spotifyEmbedId:   "1XfDGJ4C2wEsrAbWbVaZ4b",
    destaque: {
      titulo:  "É Muita Saudade Pra Pouco Eu",
      desc:    "Single de maior repercussão nas redes sociais, marcou o início da trajetória autoral do artista."
    },
    numeros: [
      { n: "21,4M", l: "Execuções globais"        },
      { n: "189",   l: "Países com consumo"       },
      { n: "50+",   l: "Composições publicadas"   },
      { n: "63K+",  l: "Seguidores no Instagram"  }
    ]
  },

  /* ── NÚMEROS GERAIS ────────────────────────────────────── */
  numerosTitulo:    "O alcance que justifica o <em>cachê</em>",
  numerosSubtitulo: "Indicadores orgânicos de 2024–2026 que posicionam o projeto acima da média do segmento de tributo a Roberto Carlos no Brasil.",
  numeros: [
    {
      destaque: true,
      numero: "21,4M",
      label:  "Execuções no streaming",
      desc:   "Catálogo autoral e interpretativo com presença ativa no Spotify e Apple Music. Maior prova quantitativa de aderência do público ao projeto."
    },
    {
      numero: "63K+",
      label:  "Seguidores no Instagram",
      desc:   "Crescimento 100% orgânico, sem tráfego pago."
    },
    {
      numero: "5M+",
      label:  "Visualizações de posts",
      desc:   "Engajamento consistente em reels e vídeos."
    },
    {
      numero: "1,8M",
      label:  "Pico anual de alcance",
      desc:   "Meta Insights · contas únicas impactadas."
    },
    {
      numero: "189",
      label:  "Países com consumo do catálogo",
      desc:   "Distribuição global via CDBaby."
    },
    {
      numero: "Porto",
      label:  "Presença internacional",
      desc:   "Apresentação em Portugal · Natal 2024."
    }
  ],
  numerosRodape: "Fonte: CDBaby / Meta Insights / Spotify for Artists · atualizado em 2026",

  /* ── IMPRENSA — Grid reordenado ────────────────────────── */
  imprensa: [
    {
      veiculo:  "Projeto Draft",
      data:     "Lifehackers · Abril 2026",
      manchete: "De CEO de multinacional a cantor e doutorando: como planejei ser dono do meu próprio tempo",
      imagem:   "img/imprensa/projeto_draft.jpg",
      pos:      "center top",
      tamanho:  "sz-l",
      featured: true,
      link:     "https://www.projetodraft.com/de-ceo-de-multinacional-a-cantor-e-doutorando-como-planejei-ser-dono-do-meu-proprio-tempo/"
    },
    {
      veiculo:  "Folha de Niterói",
      data:     "Capa · Outubro 2024",
      manchete: "Em sua estreia como cantor, Tingo Santi canta e encanta",
      imagem:   "img/imprensa/folha_capa_out2024.jpg",
      pos:      "center top",
      tamanho:  "sz-m",
      link:     ""
    },
    {
      veiculo:  "O Dia · RJ",
      data:     "Dezembro 2025",
      manchete: "Natal Magia transforma a orla de Macaé em palco de grandes espetáculos",
      imagem:   "img/imprensa/odia_macae.jpg",
      pos:      "center top",
      tamanho:  "sz-m",
      link:     ""
    },
    {
      veiculo:  "Antena 1",
      data:     "Podcast Lado Pessoal · Agosto 2021",
      manchete: "CEO da Nokia Brasil fala sobre trajetória, escolhas e música",
      imagem:   "img/imprensa/antena1.jpg",
      pos:      "center top",
      tamanho:  "sz-m",
      link:     "https://www.antena1.com.br/noticias/podcast-lado-pessoal-ailton-santos-ceo-nokia-brasil"
    },
    {
      veiculo:  "Errejota Notícias",
      data:     "Dezembro 2025",
      manchete: "Natal Itá Luz encerra programação com show em homenagem a Roberto Carlos",
      imagem:   "img/imprensa/errejota_itaborai.jpg",
      pos:      "center top",
      tamanho:  "sz-s",
      link:     ""
    },
    {
      veiculo:  "O Dia · RJ",
      data:     "Dezembro 2025",
      manchete: "Natal Itá Luz emociona Itaboraí com tributo a Roberto Carlos",
      imagem:   "img/imprensa/odia_itaborai.jpg",
      pos:      "center top",
      tamanho:  "sz-s",
      link:     ""
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
      veiculo:  "Folha de Niterói",
      data:     "Outubro 2024",
      manchete: "O novo fenômeno musical de Niterói debuta com sucesso em seu primeiro show",
      imagem:   "img/imprensa/folha_materia_out2024.jpg",
      pos:      "center top",
      tamanho:  "sz-s",
      link:     ""
    }
  ],

  imprensaQuote: {
    texto: "Reconhecido por sua impressionante semelhança vocal e presença de palco, Tingo emociona o público ao interpretar os grandes sucessos do eterno Rei. Produção de altíssimo nível, com orquestra e cenografia cuidadosamente planejada.",
    fonte: "Folha de Niterói · 2025"
  },

  veiculosImprensa: [
    "Projeto Draft|Lifehackers",
    "Folha de Niterói|Capa + Matérias",
    "Antena 1|Podcast",
    "O Dia|Cobertura RJ",
    "Errejota|Notícias RJ",
    "FUNARJ|Validação"
  ],

  validacoes: [
    { icone:"✓", titulo:"FUNARJ",                    subtitulo:"Aprovação oficial do projeto artístico"                    },
    { icone:"✓", titulo:"Prefeitura de Macaé",       subtitulo:"Natal Magia 2025 · Programação Oficial"                     },
    { icone:"✓", titulo:"Prefeitura de Itaboraí",    subtitulo:"Natal Itá Luz 2024 + Dia das Mães 2025"                     },
    { icone:"✓", titulo:"Praia Clube São Francisco", subtitulo:"4 shows · 2024 e 2025 · Niterói"                            },
    { icone:"✓", titulo:"IPPB · Portugal",           subtitulo:"Natal 2024 · Instituto Pernambuco Porto Brasil"             },
    { icone:"✓", titulo:"Marca INPI",                subtitulo:"Registro oficial da marca Tingo Santi"                      }
  ],

  contratantes: {
    intro: "O projeto opera com empresa formal ativa, documentação organizada e precedentes de contratação pública e privada. Riders técnicos, releases, dossiê de notoriedade e demais materiais são enviados diretamente pela produção mediante solicitação.",
    documentos: [
      "Dossiê de Notoriedade Artística 2026",
      "Release do Espetáculo",
      "Riders Técnicos (som, palco, luz, camarim)",
      "Certidão de Regularidade Fiscal (CRF)",
      "Registro de Marca INPI · vigência até 2036",
      "Clipping de Imprensa",
      "Perfil do Artista"
    ],
    precedentes: [
      { categoria: "CONTRATAÇÃO PÚBLICA",  municipio: "Macaé · RJ",        evento: "Natal Magia 2025 · Programação Oficial"                     },
      { categoria: "CONTRATAÇÃO PÚBLICA",  municipio: "Itaboraí · RJ",     evento: "Natal Itá Luz 2024 e Dia das Mães 2025 · Sec. de Cultura"   },
      { categoria: "INTERNACIONAL",        municipio: "Porto · Portugal",  evento: "Natal 2024 · IPPB (Instituto Pernambuco Porto Brasil)"      },
      { categoria: "CLUBES E CORPORATIVO", municipio: "Niterói · RJ",      evento: "Praia Clube São Francisco · 4 shows em 2024 e 2025"         }
    ]
  },

  sobre: {
    foto:    "img/sobre_artista_close.jpg",
    citacao: "O Tingo Santi não é só cantar — é fazer a gestão de uma startup cultural, do palco ao contrato.",
    paras: [
      "Tingo Santi é cantor, compositor e intérprete brasileiro. Seu projeto principal combina semelhança vocal natural com Roberto Carlos, produção de palco de alto nível e gestão profissional com padrão corporativo.",
      "Como compositor, tem mais de 50 músicas autorais publicadas globalmente. A faixa <em>É Muita Saudade Pra Pouco Eu</em> marcou o início de uma trajetória autoral com execuções em 189 países.",
      "Antes da carreira artística, Ailton Santos liderou multinacionais como Nokia, HP, EDS, Baker Hughes e Xerox em posições de CEO e liderança global. Essa trajetória é a base de uma operação artística conduzida com método, rigor e padrão de entrega corporativo.",
      "Autor do livro <em>A Segunda Maçã: Inteligência Artificial e o Futuro da Sociedade Brasileira</em>, doutorando no COPPEAD/UFRJ e diretor executivo da NKT Artes Ltda."
    ],
    marcos: [
      { ano: "2021", desc: "Entrevista no podcast Lado Pessoal, da Antena 1, como CEO da Nokia Brasil." },
      { ano: "2023", desc: "Início do projeto artístico. +50 composições autorais publicadas." },
      { ano: "2024", desc: "Estreia internacional em Portugal. Validação pela FUNARJ." },
      { ano: "2025", desc: "Contratos com Macaé, Itaboraí. 4 shows no PCSF. +63K seguidores. 21M+ execuções." },
      { ano: "2026", desc: "Doutorado COPPEAD/UFRJ. Publicação autoral no Projeto Draft." }
    ]
  },

  show: {
    fotoMain:   "img/espetaculo_palco_novo.jpg",
    fotoAccent: "img/galeria_bracos_abertos.jpg",
    intro:      "Tingo Santi interpreta Roberto Carlos com semelhança vocal natural, respeito profundo ao repertório e produção de palco de alto nível. O que o público sente no show é sobre a própria vida dele, ativada pelas canções do Rei, entregues com fidelidade e sofisticação.",
    features: [
      {
        titulo: "Semelhança vocal natural com o Rei",
        desc:   "A voz chega antes de qualquer explicação. O público reconhece imediatamente. É o ativo mais raro do projeto, e não é construído. É natural."
      },
      {
        titulo: "Orquestra ao vivo, telão e figurino",
        desc:   "Produção completa de palco: orquestra ao vivo, telão, figurino de corte italiano. Espetáculo de alto impacto. Compatível com integração de músicos e corais locais."
      },
      {
        titulo: "500 a 3.000 pessoas em qualquer formato",
        desc:   "Praças públicas, teatros municipais, eventos corporativos de médio e grande porte. O espetáculo tem escala e mantém qualidade na adaptação."
      },
      {
        titulo: "Entrega previsível, documentada e segura",
        desc:   "Gestão com padrão corporativo. Riders, checklist, suporte pré e pós-evento. O contratante sabe exatamente o que esperar."
      }
    ]
  }

};
