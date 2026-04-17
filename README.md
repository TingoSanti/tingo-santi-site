# Tingo Santi — Site Oficial v6
**NKT Artes Ltda · CNPJ 56.047.654/0001-25**

---

## Estrutura do repositório

```
/
├── index.html     ← layout e código (não alterar para manutenção de rotina)
├── data.js        ← TODO O CONTEÚDO EDITÁVEL (altere aqui)
├── netlify.toml   ← configuração Netlify (não alterar)
├── README.md      ← este arquivo
└── img/           ← todas as fotos
    ├── hero_principal.jpg
    ├── espetaculo_palco_banda.jpg
    ├── espetaculo_portugal.jpg
    ├── sobre_artista_close.jpg
    ├── galeria_*.jpg
    ├── prova_social_*.jpg
    └── frame_*.jpg
```

---

## Como atualizar — regra geral

**Abra o `data.js` no GitHub → clique no lápis → edite → Commit changes.**
O Netlify atualiza o site em menos de 1 minuto.

---

## Atualizações mais comuns

### Trocar/adicionar vídeo do YouTube

1. Vá ao vídeo no YouTube
2. Copie o ID da URL: `youtube.com/watch?v=`**`dQw4w9WgXcQ`** → ID é `dQw4w9WgXcQ`
3. Em `data.js`, localize `videos:` e substitua o `youtubeId`:

```js
{ titulo: "Tributo ao Rei", youtubeId: "dQw4w9WgXcQ", ... }
```

Para adicionar novo vídeo, copie um bloco inteiro e cole abaixo do último.

---

### Atualizar número (seguidores, plays, etc.)

Localize `numeros:` em `data.js` e troque o valor:

```js
{ numero: "65K+",  label: "Seguidores\nno Instagram" }
```

---

### Trocar foto

1. Coloque a nova foto na pasta `img/`
2. Em `data.js`, localize o arquivo antigo e substitua pelo novo nome:

```js
{ arquivo: "img/nova_foto.jpg", destaque: false }
```

---

### Atualizar texto (bio, intro do show, etc.)

Todos os textos estão em `data.js`. Use Ctrl+F para localizar a frase que quer mudar.

---

### Ativar vídeo de fundo no hero

Em `data.js`, substitua `INSIRA_YOUTUBE_ID_AQUI` pelo ID real:

```js
hero: {
  youtubeId: "dQw4w9WgXcQ",
  ...
}
```

---

### Configurar formulário de contato

1. Crie conta em **formspree.io**
2. Crie um form ("Contato Tingo Santi")
3. Copie o ID gerado (ex: `xyzabc12`)
4. Em `data.js`, substitua:

```js
formspree: "xyzabc12"
```

Pronto. Mensagens chegam no seu e-mail automaticamente.

---

### Ativar Google Analytics

1. Crie propriedade GA4 em **analytics.google.com**
2. Copie o ID (ex: `G-ABC123456`)
3. Em `data.js`, substitua:

```js
googleAnalyticsId: "G-ABC123456"
```

---

### Adicionar novo acesso de imprensa

Localize `imprensa:` em `data.js` e adicione:

```js
{
  veiculo:  "Nome do Veículo",
  manchete: "Título da matéria",
  resumo:   "Resumo em uma frase."
}
```

---

## Checklist antes de publicar

- [ ] Inserir IDs dos vídeos do YouTube (`INSIRA_YOUTUBE_ID_AQUI`)
- [ ] Configurar Formspree (`INSIRA_FORMSPREE_ID`)
- [ ] Configurar Google Analytics (`INSIRA_GA4_ID`)
- [ ] Confirmar pasta `img/` com todas as fotos
- [ ] Testar formulário enviando uma mensagem de teste

---

## Como publicar no GitHub + Netlify

1. Crie repositório no GitHub (privado): `tingo-santi-site`
2. Faça upload de todos os arquivos desta pasta
3. No Netlify: "Add new site" → "Import from GitHub" → selecione o repositório
4. Deploy automático. Site no ar em 60 segundos.
5. Para domínio próprio: Netlify → "Domain settings" → adicione `tingosanti.com.br`

---

## Contato técnico

NKT Artes Ltda · tingo.santi@proton.me · (21) 97521-4169
