# Tingo Santi — Site Oficial v7

## Estrutura
```
/
├── index.html     (layout e logica)
├── data.js        (TODO conteudo editavel)
├── netlify.toml
├── README.md
└── img/
    ├── hero_principal.jpg
    ├── espetaculo_palco_novo.jpg  (Natal Magia - sem RC no telao)
    ├── sobre_artista_close.jpg
    ├── logo_tributo.png
    ├── galeria_*.jpg (9 fotos para mosaico)
    └── imprensa/
        ├── projeto_draft.jpg
        ├── folha_capa_out2024.jpg
        ├── folha_materia_out2024.jpg
        ├── folha_materia_maio2025.jpg
        ├── odia_macae.jpg
        ├── odia_itaborai.jpg
        └── errejota_itaborai.jpg
```

## O que mudou na v7
1. Encoding UTF-8 correto (acentos restaurados)
2. Botao de som no hero (canto inferior direito)
3. Foto do Espetaculo trocada (sem RC no telao, usa Natal Magia)
4. Logo "Tributo ao Rei" sobre a foto do espetaculo
5. Galeria com mosaico inteligente (9 fotos, formatos variados)
6. Secao de Numeros redesenhada (fundo navy, hierarquia visual)
7. Notoriedade com card Projeto Draft em destaque + link
8. Precedentes categorizados (Publica / Internacional / Clubes)
9. Correcoes: Itaborai inclui Dia das Maes 2025, PCSF 4 shows, Porto IPPB

## Checklist antes de publicar
- [ ] Trocar INSIRA_FORMSPREE_ID pelo ID real
- [ ] Trocar INSIRA_GA4_ID pelo ID real do Google Analytics

## Como editar conteudo
Todo texto, numero, foto e link fica em `data.js`.
O `index.html` so contem layout e logica - nao mexer em rotina.
