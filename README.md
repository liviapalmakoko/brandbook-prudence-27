# Moodboard Prudence · Brandbook 2027

Ferramenta da Koko para conduzir ao vivo a sessão de moodboard com o cliente.

O time mostra referências, o cliente reage a cada uma, e o moodboard se monta sozinho com o que ele aprova.

## Como usar

Cinco telas no menu, nesta ordem (o cliente se concentra nos duelos da Sessão; a Biblioteca fica por último, só se ele quiser ver):

1. **Marca**: antes do moodboard, o cliente escolhe onde a Prudence fica em cada escala de duas palavras (1 a 5) e marca palavras que combinam ou não. A bolinha amarela com pontilhado é a sugestão da Koko, vinda do briefing. Base de pesquisa: Aaker (1997), *Dimensions of Brand Personality*, e as dimensões de tom de voz do Nielsen Norman Group.
2. **Duelos**: só duelos. Cada duelo tem uma pergunta, o que ela define, e duas imagens. Clicar na imagem amplia; "Prefiro esta" escolhe. Atalhos: `A` `B` `D` (as duas) `N` (nenhuma), `←` `→` navegam.
3. **Cores**: gerador de paleta no estilo Coolors (5 faixas, travar, trocar, gerar com a barra de espaço). Começa a partir das respostas dos 4 duelos de cor da Sessão; a paleta entra no Moodboard e no Resumo.
5. **Moodboard** e **Resumo**: montados só com o que foi respondido; o que não foi respondido é desconsiderado.
6. **Biblioteca**: é opcional para o cliente e fica por último: a equipe sobe as referências por categoria (arraste, cole com Cmd+V ou use o botão). Para criar um duelo, selecione 2 imagens da mesma categoria.

**Escolha Koko**: abra o site com `?designer=1` para marcar, em cada duelo, o lado que a Koko recomenda e o motivo. O selo aparece para o cliente. Use `?designer=0` para desligar.

**Zerar respostas**: botão no rodapé. Apaga as respostas, mantém referências, duelos e escolhas da Koko.

## Onde ficam os dados

Tudo fica **apenas no navegador de quem está usando** (IndexedDB). Nada é enviado a servidor.

- Outra pessoa que abrir o link recebe as referências iniciais, mas não as respostas salvas neste navegador.
- As respostas ficam só neste navegador. Para o cliente ver o resultado sem poder alterar nada, use **Link de leitura** (no topo, ao lado de Resumo): ele copia um link com as respostas dentro, que abre só o Moodboard em modo de leitura.
- Limpar os dados do site no navegador apaga as respostas e a biblioteca. Gere o link de leitura ao fim da sessão para guardar uma cópia.

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

## Revisão visual dos duelos

Os 19 pares foram conferidos visualmente em 25/11/2026. Pergunta, legendas e contexto são mantidos em `session-review.js`, aplicado também a bibliotecas já carregadas. `seed.json` inclui os mesmos metadados para novos acessos.

Foram corrigidos os contrastes de enquadramento do casal, rosto visível, iluminação, presença de uma ou duas pessoas, gestos de sensualidade e composição das camisetas. Os contextos orientam a criação, sem converter uma preferência em uma regra definitiva.

Quando muda a imagem ou o sentido da pergunta, `answerRevision` separa as novas respostas das anteriores. Votos e sugestões Koko antigos permanecem armazenados e no backup, mas não são reaproveitados automaticamente no novo par. Não é preciso zerar as respostas para receber as referências revisadas.

## Composição do moodboard

**Prancha livre** reúne as referências preferidas em uma composição com proporções originais, tamanhos variados e pequenos deslocamentos, sem recortar as imagens em cartões iguais. A paleta sugerida e as fontes escolhidas aparecem junto da prancha. Os relatórios ficam em **Decisões, pendências e anotações da sessão**.

**Por categoria** permite voltar à organização anterior instantaneamente. A alternância muda apenas a apresentação, sem alterar votos. A interface anterior também continua disponível no rodapé e usa `seed-anterior.json` como base histórica.

## Duelos de cor

Quatro duelos na Sessão (categoria **Cores e paleta**), pareando referências da biblioteca. O cliente quer preto, cinza e branco, então os duelos não perguntam quanto de cor usar: partem de preto, cinza e branco como base e perguntam só como o acento entra no digital (vivo ou suave, qual dupla, qual intensidade) e qual base neutra o acompanha. As imagens aparecem inteiras. Referências com granulado (cores-02 e cores-08) ficaram de fora, porque o briefing abandonou o efeito de noise.

Mais cinco duelos de cor e três de imagem completam a sequência, cada um isolando uma única variável: temperatura do acento (quente ou frio), acabamento (chapado ou degradê), quantidade (um acento ou vários), qual cor única (magenta, perto do rosa da marca, ou lima), padrão repetido ou composição limpa, fotografia em preto e branco ou em cor, pele seca ou molhada e luz colorida ou natural.

Oito duelos novos usam referências que ainda não tinham par: texturas (fluida ou geométrica; suave ou de impacto), adesivos (rua ou delicado), imagens de atitude (cor ou preto e branco com um acento; retícula em cor ou em preto e branco) e fotografia (boca ou pele em close; lingerie ou só pele; corpo inteiro ou recorte fechado). Cada um muda uma única variável.

As seis fotos do Pexels (riso e amizade) foram retiradas por serem claras e coloridas demais para a Prudence.

## Estilo de letra

O moodboard não escolhe fonte. Seis duelos na Sessão (categoria **Estilo de letra**) usam as referências de tipografia e layout enviadas pela equipe: condensada ou larga, neutra ou geométrica, leve ou pesada, caixa alta ou como numa frase, retrô com personalidade ou limpa, e condensada muito pesada ou mais refinada. A aba Fontes saiu do menu; a fonte é decidida depois, a partir da direção preferida. O código da aba continua no `index.html`, acessível por `#fontes`.

## Perguntas de uso

Tela separada dos Duelos, para o que não é uma escolha entre duas imagens: onde o logo é aplicado de forma inconsistente e o que ele nunca pode sofrer, qual versão (símbolo redondo ou logo cortado) usar em cada lugar, como serão os retratos de equipe e quais lâminas são prioridade. São 18 perguntas de múltipla escolha, com observação opcional; as respostas entram no Resumo. A aba antes chamada Sessão passou a se chamar Duelos.

Os duelos de fotografia foram reduzidos a 7 (pele, iluminação, preto e branco ou cor, lingerie ou só pele, corpo inteiro ou recorte, riso ou intensidade, amizade ou casal), porque a fotografia pesa menos no brandbook que o logo, as cores e a tipografia. Na Sessão, a ordem das categorias agora é Cores, Estilo de letra, Grafismo, Uniforme e, por último, Fotografia.

## PDFs do moodboard

Com o Link de leitura aberto (`?cliente=1`), acrescente `&pdf=` e o formato para gerar uma versão própria para impressão: `poster`, `editorial`, `slides`, `colagem`, `livre`, `categorias` ou `respostas` (documento A4 com todas as respostas). Para salvar, use Imprimir > Salvar como PDF com a janela em 1280 px de largura. O `cliente.json` com respostas de um cliente não deve ser publicado neste repositório.
