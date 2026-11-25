# Moodboard Prudence · Brandbook 2027

Ferramenta da Koko para conduzir ao vivo a sessão de moodboard com o cliente.

O time mostra referências, o cliente reage a cada uma, e o moodboard se monta sozinho com o que ele aprova.

## Como usar

Seis telas, nesta ordem:

1. **Marca**: antes do moodboard, o cliente escolhe onde a Prudence fica em cada escala de duas palavras (1 a 5) e marca palavras que combinam ou não. A bolinha amarela com pontilhado é a sugestão da Koko, vinda do briefing. Base de pesquisa: Aaker (1997), *Dimensions of Brand Personality*, e as dimensões de tom de voz do Nielsen Norman Group.
2. **Biblioteca**: suba as referências por categoria (arraste, cole com Cmd+V ou use o botão). Para criar um duelo, selecione 2 imagens da mesma categoria.
3. **Sessão**: só duelos. Cada duelo tem uma pergunta, o que ela define, e duas imagens. Clicar na imagem amplia; "Prefiro esta" escolhe. Atalhos: `A` `B` `D` (as duas) `N` (nenhuma), `←` `→` navegam.
4. **Cores**: uma paleta por vez, "Gostei" ou "Não gostei" (`←` `→`). No fim, o site monta a paleta com as cores curtidas.
5. **Fontes**: prévia ao vivo, com um conjunto curto de fontes.
6. **Moodboard** e **Resumo**: montados só com o que foi respondido; o que não foi respondido é desconsiderado.

**Escolha Koko**: abra o site com `?designer=1` para marcar, em cada duelo, o lado que a Koko recomenda e o motivo. O selo aparece para o cliente. Use `?designer=0` para desligar.

**Zerar respostas**: botão no rodapé. Apaga as respostas, mantém referências, duelos e escolhas da Koko.

## Onde ficam os dados

Tudo fica **apenas no navegador de quem está usando** (IndexedDB). Nada é enviado a servidor.

- Outra pessoa que abrir o link recebe as referências iniciais, mas não as respostas salvas neste navegador.
- Para levar o trabalho a outro computador ou navegador, use **Baixar backup** e depois **Carregar backup** lá.
- Limpar os dados do site no navegador apaga a biblioteca. Baixe um backup antes da sessão.

## Referências iniciais

O arquivo `seed.json` lista as referências e os duelos que já vêm no site (imagens em `refs/`). Fotos do cliente (ativações, manual de recorte) não entram: o repositório é público. Cada uma entra uma única vez por navegador: se a pessoa apagar, não volta. Para incluir novas, adicione a imagem em `refs/` e uma linha em `seed.json` com um `id` novo.

## Publicar (GitHub Pages)

Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
O endereço fica `https://liviapalmakoko.github.io/brandbook-prudence-27/`.

É um único arquivo, `index.html`, sem build.

## Visual

O visual segue o Design System interno da Koko (https://design-system-interno.sites.koko.ag/). A pasta `kit/` vem do kit oficial (koko.css, koko.js e a marca) e não se edita aqui. O app só usa as variáveis do kit.

## Síntese da sessão

A reunião registra uma única resposta do cliente. As sugestões da Koko continuam nos duelos e no comparativo final. Registros antigos de outros participantes são preservados no armazenamento, mas não entram no resultado atual.

O botão **Resumo** reúne **Direção escolhida**, **O que aproveitar**, **O que evitar** e **Pendências**, usando somente votos, motivos e anotações existentes. Não há perguntas adicionais. Preferir uma referência não aprova o brandbook; perder um duelo não equivale a rejeição explícita. As sugestões Koko ficam separadas das respostas do cliente. A síntese também pode ser expandida na tela Moodboard.

As notas dos duelos são salvas enquanto você escreve. A paleta calculada continua como sugestão; a síntese lembra de validar sua aplicação e as funções das fontes.

## Voltar à versão anterior

- No **Resumo**, **Ver resumo anterior** alterna para o resumo em lista. **Voltar à síntese** reativa o novo formato. Essa preferência fica neste navegador.
- No rodapé, **Usar versão anterior** abre `versao-anterior.html`, com a interface anterior e um link para voltar à atual. Na versão independente, as duas páginas usam o mesmo IndexedDB e compartilham as respostas do cliente. Trocar de versão não apaga respostas.
- **Zerar respostas** continua sendo uma ação separada, com confirmação. Não é necessário zerar nada para desfazer a mudança visual.
- A versão original do código foi preservada na branch `backup/antes-da-sintese`. Para desfazer permanentemente esta atualização no repositório, reverta o commit da síntese com `git revert`, preservando o histórico.

Validação: sintaxe dos scripts, casos de síntese (preferência, rejeição, ambos, nenhum, sugestões, notas e pendências), sessão no navegador e alternância entre as versões preservando votos e notas.
