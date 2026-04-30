# Tingo Santi · Site v2 (institucional B2G)

Site reformulado para vender prioritariamente para prefeituras, secretarias de cultura, fundações e contratantes públicos.

## Arquivos

- `index.html` — estrutura, CSS e JS em arquivo único
- `data.js` — todo o conteúdo editável (textos, fotos, contatos, imprensa, números, sobre)
- `img/` — fotos do show, retrato, imprensa
- `netlify.toml` — config de deploy

## Para editar conteúdo

Abra `data.js` em qualquer editor. Não é preciso mexer no HTML.

## Deploy

Sobe na Netlify por arrasto (ou git push). O `netlify.toml` já está incluído.

## Paleta

- Azul Rei `#0A2342` — dominante institucional
- Azul Profundo `#16407A` — botões, links, acentos
- Azul Cintilante `#3B6FB5` — hover, gradientes
- Branco editorial `#FAFAF7`
- Off branco `#F0EFE8` — faixa alternada
- Tinta `#0B1220` — texto principal
- Tinta clara `#5A6478` — texto secundário

## Tipografia

- Playfair Display (700/900) — títulos, nome do artista, citações
- Inter (300/400/500/600) — corpo, UI, números, CTAs
- Cormorant Garamond (italic) — citações longas

## Pendências resolvidas (vs. v1)

- ✅ Telefone único (NKT Artes) em todo o site
- ✅ Hero com foto estática de fundo (resolvido fallback de iframe)
- ✅ Formspree integrado (form id `xyklpzbk`)
- ✅ Paleta sem dourado, azul Rei dominante
- ✅ CNPJ clicável → Receita Federal
- ✅ Fonte dos números no rodapé
- ✅ Bio institucional com NKT, livro, doutorado
- ✅ Press com tags "OFICIAL" para sites de prefeituras
- ✅ Mobile com 3 campos obrigatórios essenciais
- ✅ Preload de hero_principal.jpg
- ✅ font-display: swap nos Google Fonts
- ✅ Schema.org MusicGroup

## Pendências em aberto (não bloqueantes)

- 🟠 Vídeos em destaque: hoje só hero card. Para múltiplos vídeos, criar `siteData.videos` e nova seção
- 🟠 Hero como vídeo de fundo (biquini.com.br): hoje é foto estática. Pode ser adicionado depois quando houver footage de palco em loop
- 🟠 Logo SVG (estrela 5 pontas) no nav: hoje uso "Tingo Santi" em Playfair. Substitui SVG quando estiver finalizado
- 🟢 Teste em 375px (iPhone SE) — site responde, mas conferir após deploy
