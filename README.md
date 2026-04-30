# Tingo Santi — Site Oficial revisão institucional

## Versão gerada

Intervenção aplicada sobre a base atual enviada em `tingo-santi-site.zip`.

## Principais mudanças

1. Home reestruturada conforme revisão estratégica:
   - Hero institucional
   - O espetáculo
   - Quatro pilares de diferenciação
   - Prova digital
   - Vídeos de performance
   - Galeria
   - Validação institucional
   - Dois caminhos para contratantes
   - Portal do contratante
   - Universo Tingo Santi
   - Composição autoral
   - Contato

2. Copy reposicionada para contratantes públicos e corporativos.

3. Paleta ajustada para azul profundo, branco e dourado apenas como acento.

4. Formulários conectados ao Formspree ID existente: `xyklpzbk`.

5. Página `/imprensa/` criada como rota simples para material editorial.

## Observações

- Foram preservados os assets existentes em `/img`.
- O arquivo `data.js` foi preservado para referência, mas a nova home está mais estática e auditável.
- O pacote exclui `.git`, `__MACOSX`, `.DS_Store` e backups internos pesados.
- Recomenda-se testar localmente antes de subir ao Netlify.

## Como testar

Abra `index.html` no navegador ou rode um servidor local:

```bash
python3 -m http.server 8080
```

Depois acesse:

```text
http://localhost:8080
```

Teste também:

```text
http://localhost:8080/imprensa/
```
