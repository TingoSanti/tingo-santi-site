# Externalização das imagens base64 do data.js

## Resultado
- `data.js`: de ~968 KB para **19 KB** (queda de 98%).
- 10 imagens antes embutidas em base64 agora são arquivos **WebP** em `/img/imprensa/`.
- Peso das imagens: 711 KB (JPEG decodificado) para **477 KB** em WebP (33% menor), agora cacheáveis por 1 ano e fora do script que bloqueava a renderização.

## Por que isso importa
O `data.js` era carregado de forma síncrona no corpo da página (`<script src="data.js">`), bloqueando a renderização, e estava configurado como `max-age=0, must-revalidate`, ou seja, era rebaixado a cada visita. As 10 imagens de imprensa viajavam junto em toda visita, mesmo estando no fim da página. Agora o `data.js` é leve e as imagens entram pelo cache de longo prazo já definido no `netlify.toml` (`/img/*` com `immutable`, 1 ano).

## Como implantar (ordem)
1. Extrair `tingosanti_imprensa_webp.zip` na raiz do repositório. Ele cria os 10 arquivos em `img/imprensa/` sem tocar nas imagens .jpg que já existiam.
2. Substituir `data.js` pelo novo (referências já apontam para os arquivos).
3. Se ainda não subiu o lote anterior, substituir também `index.html`, `site.css` e `netlify.toml`.
4. Publicar. Recomendo subir antes como deploy preview no Netlify e conferir os 10 cards da seção Notoriedade.

## Mapa veículo para arquivo
| Veículo | Arquivo WebP | Dimensão | JPEG | WebP |
|---|---|---|---|---|
| Antena 1 | antena_1_ceo_da_nokia.webp | 900x1350 | 93 KB | 52 KB |
| Prefeitura de Macaé | prefeitura_de_macae_tributo_ao_rei.webp | 900x597 | 50 KB | 28 KB |
| Site Oficial Itaboraí | site_oficial_itaborai_natal_ita_luz.webp | 900x600 | 77 KB | 57 KB |
| TV Prefeito | tv_prefeito_itaborai_192_anos.webp | 768x512 | 72 KB | 52 KB |
| Rio das Ostras Jornal | rio_das_ostras_jornal_tingo_santi_leva.webp | 479x677 | 31 KB | 22 KB |
| A Tribuna RJ | a_tribuna_rj_itaborai_realiza_tribu.webp | 900x1600 | 104 KB | 70 KB |
| Macaé em Foco | macae_em_foco_tributo_ao_rei.webp | 900x598 | 45 KB | 31 KB |
| RJ Cidades | rj_cidades_natal_magia_traz.webp | 900x1050 | 57 KB | 37 KB |
| Diário de Macaé | diario_de_macae_tributo_ao_rei.webp | 900x876 | 60 KB | 39 KB |
| Jornal Esporte Saúde | jornal_esporte_saude_macae_tributo_ao.webp | 900x1600 | 117 KB | 87 KB |

## Verificações feitas
- `data.js` valida como JavaScript (`node --check`), objeto `SITE` íntegro.
- As 10 referências `img/imprensa/*.webp` correspondem a 10 arquivos existentes.
- Zero base64 remanescente no `data.js`.
- As 8 imagens de imprensa que já eram arquivo (.jpg) e todas as imagens da galeria não foram tocadas.

## Notas técnicas e limites
- As imagens de imprensa são renderizadas como `background-image` (CSS), não como `<img>`. Por isso não há lazy-load nativo nelas. O ganho aqui é triplo: saem do caminho crítico, passam a usar cache de 1 ano e ficam em WebP. Lazy-load real exigiria converter os cards para `<img loading="lazy">` ou IntersectionObserver, mudança separada que mexe no JS de renderização. Posso fazer se você quiser.
- Qualidade WebP: 82, sem redimensionar (dimensões originais preservadas). Sem perda visual perceptível em cards desse tamanho.
- Os nomes de arquivo derivam do veículo e da manchete, em ascii, e viram URLs permanentes. Se quiser outro padrão de nome, eu regenero.
