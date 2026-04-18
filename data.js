/* ============================================================
   TINGO SANTI — ARQUIVO DE CONTEÚDO
   Edite aqui para atualizar qualquer informação do site.
   Não é necessário mexer no index.html para atualizações de rotina.
   ============================================================ */

const SITE = {

  /* ── CONTATO ───────────────────────────────────────────── */
  contato: {
    whatsapp:     "5521975214169",
    whatsappLabel:"(21) 97521-4169",
    email:        "tingo.santi@proton.me",
    instagram:    "tingosanti",
    youtube:      "@tingosanti",
    spotify:      "https://open.spotify.com/artist/1XfDGJ4C2wEsrAbWbVaZ4b",
    formspree:    "INSIRA_FORMSPREE_ID",   // ← cole aqui o ID do Formspree
    cnpj:         "56.047.654/0001-25",
    endereco:     "Av. Jornalista Alberto Francisco Torres, 389/1001 · Icaraí · Niterói · RJ · CEP 24230-006"
  },

  /* ── ANALYTICS ─────────────────────────────────────────── */
  analytics: {
    googleAnalyticsId: "INSIRA_GA4_ID",    // ← ex: G-XXXXXXXXXX
  },

  /* ── HERO ──────────────────────────────────────────────── */
  hero: {
  youtubeId:  "M7ehpNbIbUY",
  tagline:    "A obra de Roberto Carlos ao vivo — com voz natural, orquestra e emoção verdadeira.",
  foto:       "img/hero_principal.jpg",
},

  /* ── VÍDEOS ────────────────────────────────────────────── */
  /* Para trocar um vídeo: substitua o youtubeId pelo novo ID.
     Para adicionar: copie um bloco e cole abaixo do último.
     Para remover: apague o bloco inteiro. */
  videos: [
    {
  titulo:    "Tributo ao Rei – Show ao Vivo",
  categoria: "Show ao vivo",
  youtubeId: "M7ehpNbIbUY",
  thumb:     "img/frame_03.jpg"
},
    {
      titulo:    "É Muita Saudade Pra Pouco Eu",
      categoria: "Clipe oficial",
      youtubeId: "INSIRA_YOUTUBE_ID_AQUI",
      thumb:     "img/frame_05.jpg"
    },
    {
      titulo:    "Natal Magia – Macaé 2025",
      categoria: "Evento oficial",
      youtubeId: "INSIRA_YOUTUBE_ID_AQUI",
      thumb:     "img/prova_social_plateia_natal.jpg"
    },
    {
      titulo:    "Dia das Mães – Itaboraí",
      categoria: "Evento municipal",
      youtubeId: "INSIRA_YOUTUBE_ID_AQUI",
      thumb:     "img/galeria_plateia_maos.jpg"
    }
  ],

  /* ── FOTOS DA GALERIA ──────────────────────────────────── */
  /* Para trocar: substitua o nome do arquivo.
     Para adicionar: copie uma linha e cole abaixo.
     Para remover: apague a linha.
     Coloque as novas fotos na pasta img/ */
  galeria: [
    { arquivo: "img/espetaculo_palco_banda.jpg",      destaque: true  },
    { arquivo: "img/galeria_microfone_close.jpg",     destaque: false },
    { arquivo: "img/galeria_apontando.jpg",           destaque: false },
    { arquivo: "img/galeria_flores.jpg",              destaque: false },
    { arquivo: "img/galeria_plateia_close.jpg",       destaque: false },
    { arquivo: "img/galeria_plateia_maos.jpg",        destaque: false },
    { arquivo: "img/galeria_drone_igreja.jpg",        destaque: false }
  ],

  /* ── NÚMEROS / PROVA SOCIAL ────────────────────────────── */
  /* Atualize conforme os dados mudarem. Só troque o valor em "numero". */
  numeros: [
    { numero: "62K+",  label: "Seguidores\nno Instagram"        },
    { numero: "21,4M", label: "Execuções\nno streaming"          },
    { numero: "5M+",   label: "Visualizações\nde posts"          },
    { numero: "189",   label: "Países com consumo\ndo catálogo"  },
    { numero: "1,8M",  label: "Pico anual\nde alcance"           },
    { numero: "Porto", label: "Presença\ninternacional · 2024"   }
  ],
  numerosRodape: "Fonte: CDBaby / Meta Insights, 2026",

  /* ── IMPRENSA ───────────────────────────────────────────── */
  imprensa: [
    {
      veiculo:  "O Dia · RJ",
      manchete: "Natal Magia transforma a orla de Macaé em palco de grandes espetáculos",
      resumo:   "Tingo Santi encanta público na programação oficial de Natal do Município de Macaé, com tributo emocionante ao Rei."
    },
    {
      veiculo:  "O Dia · RJ",
      manchete: "Natal Itá Luz emociona Itaboraí e encerra programação com tributo a Roberto Carlos",
      resumo:   "O espetáculo comove multidão em Itaboraí e confirma a força emocional do repertório do Rei."
    },
    {
      veiculo:  "Folha de Niterói",
      manchete: "Tingo Santi – O novo fenômeno musical de Niterói",
      resumo:   "Artista niteroiense consolida trajetória com projeto artístico de alto padrão e crescimento digital expressivo."
    }
  ],
  veiculosImprensa: [
    "Folha de Niterói","O Dia","Antena 1","FUNARJ","Giro","ERJOTA","CHJornal"
  ],

  /* ── CONTRATANTES — seção pública ─────────────────────── */
  contratantes: {
    intro: "O projeto opera com empresa formal ativa, documentação organizada e precedentes de contratação pública. Riders técnicos, releases, dossiê de notoriedade e demais materiais são enviados diretamente pela produção mediante solicitação.",
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
      { municipio: "Macaé · RJ",    evento: "Natal Magia 2025 — Programação Oficial"       },
      { municipio: "Itaboraí · RJ", evento: "Natal Itá Luz 2024 — Secretaria de Cultura"  },
      { municipio: "Niterói · RJ",  evento: "Programação Cultural Municipal"                },
      { municipio: "Porto · Portugal", evento: "Apresentação Internacional · 2024"         }
    ]
  },

  /* ── SOBRE O ARTISTA ────────────────────────────────────── */
  sobre: {
    foto:    "img/sobre_artista_close.jpg",
    citacao: "O Tingo Santi não é só cantar — é fazer a gestão de uma startup cultural, do palco ao contrato.",
    paras: [
      "Tingo Santi é cantor, compositor e intérprete brasileiro. Seu projeto principal combina semelhança vocal natural com Roberto Carlos, produção de palco de alto nível e gestão profissional com padrão corporativo.",
      "Como compositor, tem mais de 50 músicas autorais publicadas globalmente. A faixa <em>"É Muita Saudade Pra Pouco Eu"</em> ultrapassou 20 milhões de execuções em 189 países.",
      "Antes da carreira artística, Ailton Santos liderou multinacionais como Nokia, HP, EDS, Baker Hughes e Xerox em posições de CEO e liderança global. Essa trajetória é a base de uma operação artística conduzida com método, rigor e padrão de entrega corporativo.",
      "Autor do livro <em>"A Segunda Maçã: Inteligência Artificial e o Futuro da Sociedade Brasileira"</em>, doutorando no COPPEAD/UFRJ e diretor executivo da NKT Artes Ltda."
    ],
    marcos: [
      { ano: "2023", desc: "Início do projeto artístico. +50 composições autorais publicadas." },
      { ano: "2024", desc: "Estreia internacional em Portugal. Validação pela Antena 1 e FUNARJ." },
      { ano: "2025", desc: "Contratos com Macaé, Itaboraí e Niterói. +62K seguidores. 21M+ execuções." },
      { ano: "2026", desc: "Doutorado COPPEAD/UFRJ. Meta: 12 shows/ano, expansão nacional." }
    ]
  },

  /* ── SHOW ───────────────────────────────────────────────── */
  show: {
    fotoMain:   "img/espetaculo_palco_banda.jpg",
    fotoAccent: "img/espetaculo_portugal.jpg",
    intro:      "Tingo Santi interpreta Roberto Carlos com semelhança vocal natural, respeito profundo ao repertório e produção de palco de alto nível. O que o público sente no show é sobre a própria vida dele — ativada pelas canções do Rei, entregues com fidelidade e sofisticação.",
    features: [
      {
        titulo: "Semelhança vocal natural com o Rei",
        desc:   "A voz chega antes de qualquer explicação. O público reconhece imediatamente. É o ativo mais raro do projeto — e não é construído. É natural."
      },
      {
        titulo: "Orquestra ao vivo, telão e figurino",
        desc:   "Produção completa de palco: orquestra ao vivo, telão, figurino de corte italiano. Espetáculo de alto impacto. Compatível com integração de músicos e corais locais."
      },
      {
        titulo: "500 a 3.000 pessoas — em qualquer formato",
        desc:   "Praças públicas, teatros municipais, eventos corporativos de médio e grande porte. O espetáculo tem escala e mantém qualidade na adaptação."
      },
      {
        titulo: "Entrega previsível, documentada e segura",
        desc:   "Gestão com padrão corporativo. Riders, checklist, suporte pré e pós-evento. O contratante sabe exatamente o que esperar."
      }
    ]
  }

};
