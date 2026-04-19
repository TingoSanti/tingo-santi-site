# Tingo Santi — Site Oficial v7 (FINAL)

## 18 ajustes desta versão
1. Encoding UTF-8 corrigido (acentos restaurados)
2. Projeto Draft como card destaque (badge dourada + link)
3. Galeria com mosaico corrigido (portraits em tall, landscapes em wide)
4. Botão de som no hero
5. Logo Tributo REMOVIDO da foto do Espetáculo (estava feio)
6. Precedentes categorizados (Pública/Internacional/Clubes)
7. Foto do Espetáculo trocada (Natal Magia, sem RC no telão)
8. Seção Números redesenhada (navy, hierarquia, contexto)
9. Posições de background corrigidas (rostos não cortados)
10. Projeto Draft com thumbnail mostrando o rosto (galeria_sorriso)
11. Seguidores Instagram atualizado: 62K → 63K+
12. Card Antena 1 Podcast adicionado (sz-m, badge azul)
13. Seção Vídeos simplificada (apenas 1 vídeo)
14. NOVA seção "O Compositor" com:
    - YouTube Short (É Muita Saudade Pra Pouco Eu)
    - Player Spotify embed (top tracks autorais)
    - 4 números de validação
    - CTAs para Spotify e Instagram
15. Itaboraí + Dia das Mães 2025
16. PCSF 4 shows 2024-2025
17. Porto IPPB (Instituto Pernambuco Porto Brasil)
18. Marco 2021 adicionado na linha do tempo (Podcast Antena 1)

## Estrutura
```
/
├── index.html
├── data.js
├── netlify.toml
├── README.md
└── img/
    ├── hero_principal.jpg
    ├── espetaculo_palco_novo.jpg
    ├── sobre_artista_close.jpg
    ├── logo_tributo.png
    ├── galeria_*.jpg (8 fotos mosaico)
    └── imprensa/
        ├── projeto_draft.jpg
        ├── antena1.jpg
        ├── folha_capa_out2024.jpg
        ├── folha_materia_out2024.jpg
        ├── folha_materia_maio2025.jpg
        ├── odia_macae.jpg
        ├── odia_itaborai.jpg
        └── errejota_itaborai.jpg
```

## Checklist antes de publicar
- [ ] Substituir INSIRA_FORMSPREE_ID pelo ID real
- [ ] Substituir INSIRA_GA4_ID pelo ID real

## Como editar conteúdo
Todo texto/foto/link está em `data.js`. `index.html` só layout.
