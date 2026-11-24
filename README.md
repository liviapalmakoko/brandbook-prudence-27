# Moodboard Prudence · Brandbook 2027

Ferramenta da Koko para conduzir ao vivo a sessão de moodboard com o cliente.

O time mostra referências, o cliente reage a cada uma, e o moodboard se monta sozinho com o que ele aprova.

## Como usar

1. **Biblioteca**: antes da sessão, suba as referências por categoria (arraste, cole com Cmd+V ou use o botão). Para criar um duelo ("prefiro esta a esta"), selecione 2 imagens ou use "Gerar duelos automáticos".
2. **Sessão**: mostre uma referência por vez. Use ✔ Gostei, ? Talvez ou ✕ Não gostei, marque o que chama atenção (cor, tipografia, clima...) como bom (+) ou ruim (−), e decida os duelos. Atalhos: `←` `→` navegam, `G` `T` `N` votam.
3. **Moodboard**: o resultado se monta com as referências aprovadas, as preferências e a lista de nunca.
4. **Resumo**: gera o texto para colar no doc do brandbook.

## Onde ficam os dados

Tudo fica **apenas no navegador de quem está usando** (IndexedDB). Nada é enviado a servidor.

- Outra pessoa que abrir o link começa com a biblioteca vazia.
- Para levar o trabalho a outro computador ou navegador, use **Baixar backup** e depois **Carregar backup** lá.
- Limpar os dados do site no navegador apaga a biblioteca. Baixe um backup antes da sessão.

## Publicar (GitHub Pages)

Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
O endereço fica `https://liviapalmakoko.github.io/brandbook-prudence-27/`.

É um único arquivo, `index.html`, sem build.
