# Diagnóstico técnico e semântico, tingosanti.com.br
### Etapa complementar: limpeza, performance, segurança, acessibilidade, SEO, GEO
**Data:** 19/06/2026 · **Status:** diagnóstico para validação, nenhuma alteração aplicada.

---

## 0. Enquadramento e confiança

**Base analisada (fato):** os 8 arquivos enviados (`index.html`, `palestra.html`, `site.css`, `data.js`, `netlify.toml`, `robots.txt`, `sitemap.xml`, `_header.css`).

**Não verificável com o material atual (logo, confiança limitada):** comportamento real de HTTPS/HSTS em produção, headers efetivamente devolvidos pelo Netlify, peso real dos arquivos em `/img/`, dados de campo de Core Web Vitals, e se o site publicado é idêntico a estes arquivos. Esses pontos estão marcados como "verificar em produção".

**Convenção:** cada achado é classificado como Fato (lido no código), Inferência (deduzido do código), Hipótese (a confirmar) ou Opinião (julgamento profissional). Risco de cada mudança: Baixo, Médio ou Alto. Nada neste documento foi executado.

---

## 1. Inventário e anatomia do `data.js` (pedido explícito)

`data.js` tem 991 KB. A composição (fato, medido):

| Camada | Conteúdo | Peso aprox. |
|---|---|---|
| Configuração / roteamento | `contatos` (default, ds1, tinavalente), `analytics`, ids Spotify/Behold/Formspree | ~3 KB |
| Conteúdo editorial (texto) | hero, show, compositor, números, imprensa (texto), validações, contratantes, sobre | ~15 KB |
| **Imagens base64 (JPEG)** | **10 blobs embutidos na seção `imprensa`** | **972 KB (98,1% do arquivo)** |

**Achado central (fato):** 98,1% do `data.js` são 10 imagens JPEG codificadas em base64, todas na seção de imprensa (Antena 1, prefeituras, Natal Magia). Os blobs decodificados pesam de 32 a 117 KB cada, somando cerca de 760 KB. Outras 8 imagens de imprensa já são arquivos normais (`img/imprensa/*.jpg`); ou seja, a seção mistura dois padrões sem necessidade.

**Agravante (fato):** `netlify.toml` define `data.js` como `max-age=0, must-revalidate`. O arquivo de ~1 MB é rebaixado e potencialmente rebaixado a cada visita, e por ser `<script src="data.js">` no corpo, **bloqueia a renderização** do conteúdo. Imagens em `/img/*` têm cache `immutable` de 1 ano; as base64 não aproveitam nada disso.

**Mapa de tratamento do `data.js`:**
- **Externalizar:** os 10 blobs base64 para `/img/imprensa/*.webp`, padronizando com as 8 que já são arquivo.
- **Manter como está:** estrutura de `contatos` e rotas `ds1`/`tinavalente` (funcionam, não tocar agora), textos editoriais (revisar só pontualmente, ver seções 6 e 9).
- **Configuração:** permanece em `data.js`, é o lugar certo.

**Ponto cego de privacidade (inferência, risco reputacional baixo):** `data.js` é público (`tingosanti.com.br/data.js`). Ele entrega a todo visitante os contatos pessoais dos parceiros white-label (e-mail Gmail e WhatsApp de DS1 e de Tina Valente), mesmo para quem nunca acessou `/ds1` ou `/tinavalente`. As rotas são "discretas", os dados não. Decisão sua se isso é aceitável.

---

## 2. URGENTE

### U1. Externalizar as 10 imagens base64 do `data.js`
- **Problema (fato):** ~970 KB de base64 render-blocking e sem cache. É o maior gargalo de performance e de mobile do site.
- **Melhoria:** decodificar os 10 blobs para `/img/imprensa/*.webp`, trocar cada `imagem: "data:image..."` por `imagem: "img/imprensa/nome.webp"`. `data.js` cai de ~991 KB para ~18 KB. As imagens passam a ter cache de 1 ano, lazy-load e formato moderno.
- **Arquivos afetados:** `data.js` (10 linhas), mais 10 arquivos novos em `/img/imprensa/`. `netlify.toml` já cobre o cache.
- **Risco:** Médio. Exige gerar os arquivos, conferir os 10 cards (posições `pos` e recortes), confirmar paridade visual. Reversível.
- **Ganho estimado (inferência):** redução de 95%+ no peso inicial de JS; melhora direta de LCP e de tempo até interação, sobretudo no mobile.

### U2. Dados estruturados (JSON-LD) ausentes na home
- **Problema (fato):** `palestra.html` tem um `@graph` rico (Person, WebSite, WebPage, Service, BreadcrumbList, FAQPage). A **home não tem nenhum** JSON-LD. É a maior lacuna de SEO e GEO do site, justamente na página principal.
- **Melhoria:** adicionar na home, sem mudar nada visual: `PerformingGroup`/`Person` (Tingo Santi, cantor e intérprete, tributo a Roberto Carlos), `Service` (contratação de show para eventos públicos, privados e corporativos), `WebSite`, `WebPage`, `BreadcrumbList` e `FAQPage` (ver U-relacionado na seção 4).
- **Trava de segurança jurídica:** Roberto Carlos **não** entra como `performer` nem como vínculo. Aparece apenas como repertório homenageado, em campo textual.
- **Sem invenção de dados:** nada de `Offer`, `AggregateRating`, `review` ou números fabricados. Os indicadores (21,4M, 63K) ficam só como texto na página, não como schema verificável (evita marcação enganosa e penalização).
- **Arquivos afetados:** `index.html` (bloco novo no `<head>`).
- **Risco:** Baixo. Aditivo, sem efeito visual.

### U3. Enquadramento jurídico e reputacional, Roberto Carlos
- **Problema (fato):** não há nenhum disclaimer no site. A linguagem é majoritariamente correta ("tributo", "interpreta Roberto Carlos com semelhança vocal natural"), mas a ausência de uma nota clara aumenta o risco de confusão de identidade ou de associação indevida.
- **Melhoria:** inserir disclaimer discreto no rodapé e na seção de contato, por exemplo: *"Espetáculo de homenagem artística. Não se trata de apresentação oficial de Roberto Carlos nem de produção vinculada ao artista."* Revisar dois pontos de cópia (ver seção 6).
- **Arquivos afetados:** `index.html` (rodapé), possivelmente texto em `data.js`.
- **Risco:** Baixo. Protege patrimônio e reputação; recomendo aplicar.

### U4. Acessibilidade básica quebrada na home
- **Problemas (fato):**
  1. Formulário da home usa `<label class="fl">Nome</label>` **sem `for`/`id`**: rótulos não associados aos campos (a `/palestra` já corrigiu isso com `for`/`id`).
  2. Botão do menu mobile `<button class="ham" id="ham">` **sem `aria-label`** e sem `aria-expanded` (a `/palestra` tem `aria-label`). `aria-label` na home: 0 ocorrências; na palestra: 7.
  3. **Sem foco visível** na home: `:focus-visible` existe só escopado em `body.ia` (palestra). Navegação por teclado fica invisível na home.
  4. `alt` das fotos da galeria é genérico e idêntico em todas: `alt="Show Tingo Santi"`.
- **Melhoria:** associar labels, adicionar `aria-label`/`aria-expanded` ao menu, estender o `:focus-visible` à home, `alt` descritivo por imagem.
- **Atenção ao seu alerta:** nenhum texto para leitor de tela será adicionado de forma que apareça visualmente (lição do texto do topo). Uso de `aria-label` em elementos, não texto solto.
- **Arquivos afetados:** `index.html`, `site.css`, `data.js` (campo `alt`).
- **Risco:** Baixo.

---

## 3. IMPORTANTE

### I1. Headers de segurança incompletos
- **Problema (fato):** `netlify.toml` tem `X-Frame-Options`, `X-Content-Type-Options` e `Referrer-Policy`. **Faltam** `Strict-Transport-Security` (HSTS), `Permissions-Policy` e `Content-Security-Policy`.
- **Melhoria:** adicionar HSTS e `Permissions-Policy` (restringir câmera, microfone, geolocalização). CSP **somente em modo `Report-Only` primeiro**, como você pediu, para não quebrar YouTube, Spotify, Behold, Formspree, Google Fonts e Analytics. Rascunho de `frame-src`/`script-src`/`connect-src` já mapeado com esses domínios na allowlist.
- **Limite honesto (inferência):** uma CSP forte (sem `unsafe-inline`) exigiria refatorar o grande script inline da home para arquivo externo com nonce. Sem isso, a CSP fica moderada. Recomendo começar Report-Only e endurecer depois.
- **Arquivos afetados:** `netlify.toml`.
- **Risco:** Baixo em Report-Only; Médio só quando promover a enforcement (exige observar relatórios antes).

### I2. `rel="noopener noreferrer"` ausente em links `target="_blank"` na home
- **Problema (fato):** 13 links com `target="_blank"` sem `rel` na home (Spotify, Instagram, YouTube, CNPJ, ícones de rodapé). Risco de reverse tabnabbing e vazamento de referrer. Vários são setados via JS.
- **Melhoria:** adicionar `rel="noopener noreferrer"` no HTML e nos pontos onde o JS injeta o link.
- **Arquivos afetados:** `index.html`.
- **Risco:** Baixo.

### I3. Formulário da home sem honeypot nem consentimento LGPD
- **Problema (fato):** a `/palestra` tem honeypot (`_gotcha`) e checkbox de consentimento; a home **não tem nenhum dos dois**. Mais exposta a spam e sem registro de consentimento.
- **Melhoria:** replicar honeypot e consentimento na home, sem alterar o fluxo Formspree existente.
- **Arquivos afetados:** `index.html`.
- **Risco:** Médio (não pode quebrar o envio atual; testar com e sem Formspree).

### I4. Open Graph e Twitter incompletos na home
- **Problema (fato):** home tem `og:title`, `og:description`, `og:image`, mas **faltam** `og:type`, `og:url`, `og:site_name` e `twitter:card`. A `/palestra` está mais completa.
- **Melhoria:** completar as tags. Compartilhamentos em WhatsApp, LinkedIn e redes ficam mais consistentes.
- **Arquivos afetados:** `index.html`.
- **Risco:** Baixo.

### I5. GEO: FAQ visível na home (espelhando o schema)
- **Problema (fato):** a home não responde, em texto, perguntas que LLMs e buscadores usam: quem é Tingo Santi, se ele canta/faz tributo a Roberto Carlos, como contratar, se atende prefeituras e eventos corporativos, repertório, formato, orçamento.
- **Melhoria:** bloco de FAQ discreto e elegante no fim da home, em linguagem natural e factual, casado com `FAQPage` (U2). É a maior alavanca de GEO da página.
- **Arquivos afetados:** `index.html`, `site.css`, `data.js` (conteúdo da FAQ).
- **Risco:** Baixo a Médio (é adição visual; depende da sua validação de cópia e posição).

### I6. Inconsistência de número que pode custar credibilidade
- **Achado (fato):** "21,4M" aparece como "Execuções no streaming" (catálogo inteiro) na seção Números e, na seção Compositor, como execuções **do single** "É Muita Saudade Pra Pouco Eu". O mesmo número descreve duas coisas diferentes.
- **Risco (opinião):** se um jornalista ou setor de cultura de prefeitura conferir, a inconsistência enfraquece o dossiê. Custo de segunda ordem em contratação pública, onde tudo é auditável.
- **Melhoria:** alinhar a atribuição (catálogo vs single) com o dado real. **Não tenho como verificar o número correto**, depende de você.
- **Arquivos afetados:** `data.js` (texto).
- **Risco:** Baixo de execução; a decisão é de conteúdo.

### I7. Formulário da `/palestra` não envia por e-mail
- **Problema (fato):** `IA.formspree` está como `REPLACE_WITH_IA_FORM_ID`. Hoje o formulário da palestra cai no WhatsApp como fallback; não captura lead por e-mail.
- **Melhoria:** inserir o ID Formspree real da palestra. Depende de você fornecer.
- **Arquivos afetados:** `palestra.html`.
- **Risco:** Baixo. Insumo necessário: ID do formulário.

---

## 4. OPCIONAL

### O1. Código morto e cruft (limpeza de baixo impacto)
- **Achados (fato/inferência):**
  - `_header.css`: arquivo órfão de 6 linhas, só comentário, **não referenciado** em lugar nenhum. Candidato a remoção.
  - `playVideo()` referencia elementos `vfov`/`vfif` que não existem no corpo da home (vídeo foi simplificado); aparentemente morto. `soundOn` e `toggleSound(){}` vazios.
  - CSS `.vf/.vft/.vfo` (bloco de vídeo antigo) provavelmente morto.
  - Galeria: `data.js` traz metadados de orientação `wide`/`tall` que o render ignora (`el.className='gi'`); CSS `.gi.wide`/`.gi.tall` correspondente sem uso.
- **Risco:** Baixo a Médio. Exige confirmar ausência de chamadas antes de remover. Recomendo fazer junto com U1, no mesmo passe no `data.js`.

### O2. Extrair JS compartilhado
- **Problema (inferência):** nav scroll, handler do menu, `trackCTA` e os logos SVG estão duplicados entre `index.html` e `palestra.html`.
- **Melhoria:** extrair um `core.js` pequeno compartilhado. Reduz duplicação e divergência futura.
- **Risco:** Médio (refator de navegação; risco de regressão). **Recomendação, não aplicar agora.**

### O3. `sitemap.xml` sem `lastmod`
- **Fato:** sem `lastmod` (tem `changefreq`/`priority`, hoje pouco usados pelo Google). Baixo impacto. Adicionar `lastmod`. Risco Baixo.

### O4. `alt` descritivo por imagem (SEO e a11y)
- Ligado ao U4.4: adicionar campo `alt` por item da galeria e da imprensa em `data.js`. Risco Baixo.

### O5. Analytics, lacunas pequenas
- **Fato:** clique em e-mail (`mailto`) não é rastreado; UTM é capturado só na `/palestra`, não na home. GA não está duplicado (mesma propriedade `G-9T397607Z9`, uma por página). Sem urgência.
- **Não fazer:** nenhuma tag nova nem segunda propriedade sem sua autorização.

### O6. WebP/AVIF para imagens grandes de `/img/`
- **Hipótese:** hero e galeria podem se beneficiar de WebP/AVIF e `srcset`. **Não tenho os arquivos** para medir. Depende de acesso ao repositório. Recomendação.

---

## 5. O que NÃO será tocado (preservação garantida)

Hero e vídeo do YouTube de fundo, menu e navegação, Hero da `/palestra`, redirects e rotas `/ds1`, `/tinavalente`, `/palestra`, identidade visual, paleta, tipografia, proposta artística, estrutura de `contatos` e o roteamento white-label, e qualquer funcionalidade existente. Nada de imagem estática no lugar do hero, nada de remover movimento do hero sem sua autorização explícita.

---

## 6. Linguagem Roberto Carlos: pode e evitar (referência)

**Pode usar (já presente, manter):** "tributo a Roberto Carlos", "interpretação do repertório", "canções consagradas por Roberto Carlos", "homenagem musical", "interpretação ao vivo".

**Revisar (pontos de atenção, fato):**
- Meta description da home: *"Tingo Santi canta Roberto Carlos"*. Tecnicamente descreve a atividade, mas no limite. Alternativa mais segura: *"Tingo Santi, tributo ao repertório de Roberto Carlos"*.
- `data.js`, seção sobre: *"semelhança vocal natural com Roberto Carlos"*. Aceitável como descrição artística; manter, desde que sempre acompanhada de "tributo/homenagem" no entorno.

**Evitar (não encontrei no site, manter fora):** "Roberto Carlos oficial", "show do Roberto Carlos", "contrate Roberto Carlos", qualquer afirmação de vínculo, autorização ou presença.

---

## 7. Conteúdo semântico e "Formatos de contratação" (proposta discreta)

Sugiro um bloco discreto na home, "Formatos de contratação", com cinco linhas: eventos públicos; eventos privados; eventos corporativos; teatros e casas de espetáculo; prefeituras e programação cultural. Reforça encontrabilidade para prefeituras e produtores sem poluir a estética e sem repetição exagerada de palavra-chave. Entra como Importante/Opcional, depende da sua validação de cópia e lugar.

---

## 8. Próximos passos e o que preciso de você

**Decisão de autorização (gate):** quais blocos autorizo aplicar agora.

**Insumos que dependem de você:**
1. Acesso ao repositório completo e à pasta `/img/` (necessário para executar U1 com fidelidade e para O6). Sem isso, consigo decodificar os 10 base64 a partir do próprio `data.js` e te entregar os arquivos prontos, mas a integração final precisa do repo.
2. ID do Formspree da `/palestra` (I7).
3. Definição sobre o número 21,4M (I6): catálogo ou single.
4. Aval sobre o texto do disclaimer (U3) e sobre incluir o bloco "Formatos de contratação" (seção 7).

**Sequência recomendada (opinião):** U2, U3, U4 e I1, I2, I4 primeiro (baixo risco, alto retorno, sem mexer em imagem). U1 logo em seguida, em passe próprio e testado. FAQ visível (I5) e bloco de formatos após sua validação de cópia. O2 e refatores maiores ficam como recomendação.

**Forma de entrega quando autorizado:** para cada arquivo, mostro o diff (antes/depois), o risco e o teste feito, antes de considerar concluído.
