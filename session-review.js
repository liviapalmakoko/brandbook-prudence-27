/* Pares conferidos visualmente. Metadados atuais para bibliotecas já carregadas. */
const SESSION_REVIEW={
  "seed-duelo-01": {
    "q": "Como explorar a pele nas fotos?",
    "la": "Pele e textura",
    "lb": "Pele em um gesto de carinho",
    "ctx": "Orienta o uso da pele como textura visual ou como parte de um gesto entre pessoas."
  },
  "seed-duelo-02": {
    "q": "Qual iluminação explorar nas fotos?",
    "la": "Sombras profundas e luz marcada",
    "lb": "Luz suave e ambiente claro",
    "ctx": "Orienta o contraste da iluminação. Compare a luz sobre a pele, além da cor da lingerie.",
    "b": "seed-review-luz",
    "answerRevision": "luz-v2"
  },
  "seed-duelo-04": {
    "q": "As fotos mostram uma pessoa ou duas?",
    "la": "Uma pessoa na cama",
    "lb": "Duas pessoas na cama",
    "ctx": "Orienta a presença de uma pessoa ou de um casal em cenas de intimidade.",
    "a": "seed-review-solo",
    "b": "seed-up-42",
    "answerRevision": "pessoas-v2"
  },
  "seed-duelo-05": {
    "q": "Como sugerir sensualidade nas fotos?",
    "la": "Beijo entre duas pessoas",
    "lb": "Gesto sugestivo individual",
    "ctx": "Orienta os gestos que podem sugerir sensualidade. A escolha vale para estas referências.",
    "a": "seed-review-beijo",
    "answerRevision": "gestos-v2"
  },
  "seed-duelo-06": {
    "q": "Qual cenário explorar na fotografia?",
    "la": "Água e vidro",
    "lb": "Cama e lençóis",
    "ctx": "Orienta os cenários a explorar nas próximas imagens, sem limitar a marca a um único ambiente."
  },
  "seed-duelo-07": {
    "q": "Em que ambiente fotografar a intimidade?",
    "la": "Ao ar livre, na praia",
    "lb": "Dentro do quarto",
    "ctx": "Orienta a presença de ambientes externos ou internos nas fotografias."
  },
  "seed-duelo-13": {
    "q": "Nos adesivos digitais, formas ou frases?",
    "la": "Formas e símbolos",
    "lb": "Frases e palavras",
    "ctx": "Orienta o conteúdo dos adesivos: símbolos visuais ou composições com palavras."
  },
  "seed-duelo-17": {
    "q": "Qual composição explorar nos cartazes?",
    "la": "Composição tipográfica",
    "lb": "Fotografia com formas e texto",
    "ctx": "Orienta a presença da fotografia na composição dos cartazes."
  },
  "seed-duelo-u1": {
    "q": "Qual cor-base explorar na camiseta?",
    "la": "Tecido claro",
    "lb": "Tecido preto",
    "ctx": "Orienta a cor do tecido. As duas referências têm assinatura pequena e centralizada."
  },
  "seed-duelo-u2": {
    "q": "Onde posicionar a assinatura na frente?",
    "la": "No centro do peito",
    "lb": "Na lateral do peito",
    "ctx": "Orienta a posição da assinatura na camiseta. Compare o posicionamento, sem alterar o desenho do logo Prudence.",
    "b": "seed-camisa-ref-6",
    "answerRevision": "posicao-v2"
  },
  "seed-duelo-u3": {
    "q": "Qual escala de texto explorar nas camisetas?",
    "la": "Texto pequeno",
    "lb": "Texto ocupando boa parte da peça",
    "ctx": "Orienta o espaço ocupado pelo texto na estampa; a escolha não fixa sua posição na frente ou nas costas.",
    "a": "seed-camisa-ref-7",
    "answerRevision": "escala-v2"
  },
  "seed-duelo-u4": {
    "q": "Como distribuir as imagens nas costas?",
    "la": "Painel de várias imagens",
    "lb": "Uma ilustração central",
    "ctx": "Orienta a organização das imagens na estampa das costas."
  },
  "seed-duelo-u5": {
    "q": "Qual conteúdo explorar na estampa das costas?",
    "la": "Ilustração de personagem",
    "lb": "Composição de letras",
    "ctx": "Orienta o conteúdo visual da estampa das costas."
  },
  "seed-duelo-19": {
    "q": "Como enquadrar a intimidade do casal?",
    "la": "Close nos rostos e no beijo",
    "lb": "Plano aberto, com corpos e ambiente",
    "ctx": "Orienta a distância do enquadramento: aproximar o gesto ou mostrar mais da cena.",
    "answerRevision": "enquadramento-v2"
  },
  "seed-duelo-21": {
    "q": "Retrato com rosto ou detalhe anônimo do corpo?",
    "la": "Retrato com rosto nítido",
    "lb": "Detalhe do corpo, sem rosto",
    "ctx": "Orienta se a imagem mostra um rosto reconhecível ou concentra a atenção em um detalhe do corpo.",
    "a": "seed-review-rosto",
    "answerRevision": "rosto-v2"
  },
  "seed-duelo-22": {
    "q": "Como mostrar o corpo masculino?",
    "la": "Durante uma atividade",
    "lb": "Em um retrato de estúdio",
    "ctx": "Orienta o uso de gestos ligados a uma atividade ou poses de retrato."
  },
  "seed-duelo-26": {
    "q": "Como organizar os grafismos digitais?",
    "la": "Em blocos de uma grade",
    "lb": "Formas soltas sobre o fundo",
    "ctx": "Orienta a organização dos elementos: cada forma em um bloco ou formas distribuídas livremente."
  },
  "seed-duelo-28": {
    "q": "Qual desenho explorar nos ícones digitais?",
    "la": "Predomínio de formas preenchidas",
    "lb": "Desenhos com contorno marcado",
    "ctx": "Orienta o tratamento do traço nos ícones; as cores destas referências não precisam ser adotadas."
  },
  "seed-duelo-32": {
    "q": "Qual acabamento explorar na estampa das costas?",
    "la": "Colagem em blocos",
    "lb": "Tipografia com traço de spray",
    "ctx": "Orienta o acabamento gráfico da estampa, além da organização das imagens."
  },
  "seed-duelo-c1": {
    "a": "seed-nova-cores-01",
    "b": "seed-nova-cores-03",
    "q": "O acento aparece sobre fundo preto ou sobre fundo claro?",
    "la": "Sobre o preto",
    "lb": "Sobre o claro",
    "ctx": "Orienta o fundo em que o acento de cor aparece: escuro ou claro. A intensidade da cor é perguntada à parte.",
    "answerRevision": "rev-3",
    "pal": {
      "a": {
        "c": [
          "#000002",
          "#bcfa71",
          "#726ba0"
        ]
      },
      "b": {
        "c": [
          "#ebede0",
          "#5c5a5c",
          "#010101"
        ]
      }
    }
  },
  "seed-duelo-c2": {
    "a": "seed-nova-cores-04",
    "b": "seed-nova-cores-05",
    "q": "Qual dupla de acento explorar?",
    "la": "Fúcsia e cítrico",
    "lb": "Violeta e lima",
    "ctx": "Orienta a dupla de acento para o digital. A cor aparece só como detalhe: compare as cores de destaque, não o layout.",
    "answerRevision": "cor-v2",
    "pal": {
      "a": {
        "c": [
          "#000000",
          "#ffffff",
          "#f037a5",
          "#cdf564"
        ]
      },
      "b": {
        "c": [
          "#000000",
          "#ffffff",
          "#7d39eb",
          "#c6ff33"
        ]
      }
    }
  },
  "seed-duelo-c3": {
    "a": "seed-nova-cores-09",
    "b": "seed-nova-cores-06",
    "q": "Que intensidade o acento deve ter?",
    "la": "Tons suaves",
    "lb": "Cores fortes",
    "ctx": "Orienta a força do acento quando ele aparece: pastéis discretos ou cores de alto impacto.",
    "answerRevision": "cor-v2",
    "pal": {
      "a": {
        "c": [
          "#101010",
          "#f3f3f3",
          "#7d7d81",
          "#c9c4cf"
        ]
      },
      "b": {
        "c": [
          "#f54400",
          "#28251c",
          "#3b63e0",
          "#c0a1cf"
        ]
      }
    }
  },
  "seed-duelo-c4": {
    "a": "seed-nova4-cores-60",
    "b": "seed-nova4-cores-57",
    "q": "Qual paleta completa explorar?",
    "la": "Preto, cinza e branco, com lima",
    "lb": "Carvão e creme, com amarelo",
    "ctx": "Orienta a base e o acento juntos: preto, cinza e branco puros com lima, ou carvão e creme mais quentes com amarelo.",
    "answerRevision": "rev-2",
    "pal": {
      "a": {
        "c": [
          "#000000",
          "#575757",
          "#f5f5f5",
          "#d6f502"
        ]
      },
      "b": {
        "c": [
          "#1c1c1c",
          "#f5b700",
          "#fff8e6"
        ]
      }
    }
  },
  "seed-duelo-c5": {
    "q": "O acento é quente ou frio?",
    "la": "Quente: tangerina e berinjela",
    "lb": "Frio: ciano e violeta",
    "ctx": "Orienta a temperatura do acento no digital. Preto, cinza e branco seguem como base; compare só a temperatura das cores.",
    "a": "seed-nova4-cores-46",
    "b": "seed-nova4-cores-53",
    "pal": {
      "a": {
        "c": [
          "#fe7002",
          "#562882"
        ]
      },
      "b": {
        "c": [
          "#01ffff",
          "#7e35e4"
        ]
      }
    }
  },
  "seed-duelo-c6": {
    "q": "O acento é chapado ou em degradê?",
    "la": "Chapado, sem transição",
    "lb": "Degradê de uma cor para outra",
    "ctx": "Orienta o acabamento do acento: cor lisa ou degradê limpo, sem granulado.",
    "a": "seed-nova4-cores-22",
    "b": "seed-nova4-cores-30",
    "pal": {
      "a": {
        "c": [
          "#1d1d1d",
          "#fa047f",
          "#7e0c48"
        ]
      },
      "b": {
        "c": [
          "#0a0a0a",
          "#f304ef",
          "#fff60b"
        ],
        "g": 1
      }
    }
  },
  "seed-duelo-c7": {
    "q": "Um acento só ou vários?",
    "la": "Um único acento",
    "lb": "Vários acentos",
    "ctx": "Orienta o tamanho da paleta de destaque. Preto, cinza e branco continuam sendo a base nas duas.",
    "a": "seed-nova4-cores-60",
    "b": "seed-nova4-cores-55",
    "pal": {
      "a": {
        "c": [
          "#000000",
          "#575757",
          "#f5f5f5",
          "#d6f502"
        ]
      },
      "b": {
        "c": [
          "#0b0a0f",
          "#8037ef",
          "#2250fc",
          "#c5ee07",
          "#c2ccc5"
        ]
      }
    }
  },
  "seed-duelo-c8": {
    "q": "Qual cor, se for um acento só?",
    "la": "Magenta, perto do rosa da marca",
    "lb": "Lima",
    "ctx": "Orienta a cor única de destaque. O magenta dialoga com o rosa usado nos produtos femininos da Prudence; o lima é uma cor nova.",
    "a": "seed-nova4-cores-22",
    "b": "seed-nova4-cores-60",
    "pal": {
      "a": {
        "c": [
          "#1d1d1d",
          "#fa047f",
          "#7e0c48"
        ]
      },
      "b": {
        "c": [
          "#000000",
          "#575757",
          "#f5f5f5",
          "#d6f502"
        ]
      }
    }
  },
  "seed-duelo-c9": {
    "q": "A cor entra na letra ou no fundo?",
    "la": "Na letra, sobre o preto",
    "lb": "No fundo, com letra escura",
    "ctx": "Orienta onde a cor aparece em peças com texto: só nas letras, sobre o preto, ou no fundo, com letras escuras. Compare onde a cor está, não o desenho.",
    "a": "seed-nova4-cores-28",
    "b": "seed-nova4-cores-40",
    "pal": {
      "a": {
        "txt": 1,
        "bg": "#0b0b0b",
        "fg": "#f037a5"
      },
      "b": {
        "txt": 1,
        "bg": "#c6ff33",
        "fg": "#2a2bd6"
      }
    },
    "answerRevision": "rev-2"
  },
  "seed-duelo-f3": {
    "q": "Que luz explorar nas fotos?",
    "la": "Luz natural, com sombras na pele",
    "lb": "Luz colorida sobre o preto",
    "ctx": "Orienta a iluminação das fotografias: luz e sombra naturais, com a pele como protagonista, ou luz de cor (vermelha) sobre fundo preto.",
    "a": "seed-nova3-foto-04",
    "b": "seed-nova3-cores-17",
    "answerRevision": "rev-2"
  },
  "seed-duelo-f7": {
    "q": "A intimidade aparece leve ou concentrada?",
    "la": "Leve e solta, sem pose",
    "lb": "Concentrada e intensa",
    "ctx": "Orienta o clima da intimidade nas fotos: mais solta e espontânea, ou mais séria e concentrada. A marca é divertida, não engraçada.",
    "a": "seed-up-42",
    "b": "seed-nova3-foto-05",
    "answerRevision": "rev-3"
  },
  "seed-duelo-c10": {
    "q": "O acento é neon ou profundo?",
    "la": "Neon, elétrico e vibrante",
    "lb": "Profundo, quente e escuro",
    "ctx": "Orienta o caráter do acento: elétrico, como um neon, ou profundo e quente, como vinho e laranja queimado.",
    "a": "seed-nova4-cores-23",
    "b": "seed-nova4-cores-35",
    "pal": {
      "a": {
        "c": [
          "#0d0f0a",
          "#ea3e70",
          "#fcff58"
        ]
      },
      "b": {
        "c": [
          "#110e09",
          "#9b182a",
          "#ca4018"
        ]
      }
    }
  },
  "seed-duelo-c11": {
    "q": "O degradê é quente ou frio?",
    "la": "Quente: vinho, laranja e dourado",
    "lb": "Frio: violeta, azul e verde-água",
    "ctx": "Orienta a temperatura dos degradês, se a marca usar degradê no digital.",
    "a": "seed-nova4-cores-29",
    "b": "seed-nova4-cores-31",
    "pal": {
      "a": {
        "c": [
          "#810220",
          "#ff4700",
          "#fed102"
        ],
        "g": 1
      },
      "b": {
        "c": [
          "#1c1972",
          "#8a0ecc",
          "#85bdd2",
          "#81fed5"
        ],
        "g": 1
      }
    }
  },
  "seed-duelo-c12": {
    "q": "A cor tem brilho ou é chapada e limpa?",
    "la": "Com brilho, como uma luz",
    "lb": "Chapada e limpa",
    "ctx": "Orienta o acabamento da cor. Efeitos de brilho e sombra no logo são rejeitados; aqui o cliente diz se também prefere a cor lisa nos grafismos.",
    "a": "seed-nova-cores-01",
    "b": "seed-nova4-cores-38",
    "pal": {
      "a": {
        "shape": 1,
        "bg": "#000002",
        "fg": "#bcfa71",
        "glow": "#6a3df0"
      },
      "b": {
        "shape": 1,
        "bg": "#000002",
        "fg": "#bcfa71"
      }
    }
  },
  "seed-duelo-c13": {
    "q": "Os acentos são contrastantes ou vizinhos?",
    "la": "Contrastantes, bem diferentes entre si",
    "lb": "Vizinhos, da mesma família",
    "ctx": "Orienta a relação entre as cores de destaque: opostas no círculo de cor, ou tons próximos, como rosa, violeta e laranja.",
    "a": "seed-nova4-cores-24",
    "b": "seed-nova4-cores-32",
    "pal": {
      "a": {
        "c": [
          "#1c1c1c",
          "#ff2e9b",
          "#5d00ff",
          "#ceff06"
        ]
      },
      "b": {
        "c": [
          "#4b0081",
          "#960c8a",
          "#ec1392",
          "#fd7957"
        ]
      }
    }
  },
  "seed-duelo-c14": {
    "q": "O destaque no texto é uma tarja ou só a cor da letra?",
    "la": "Tarja de cor atrás da palavra",
    "lb": "Só a letra na cor do acento",
    "ctx": "Orienta como o acento destaca uma palavra: com uma tarja de fundo, como um marca-texto, ou apenas na cor da letra.",
    "a": "seed-nova4-cores-27",
    "b": "seed-nova4-cores-28",
    "pal": {
      "a": {
        "hl": "bar",
        "bg": "#0b0b0b",
        "c": "#c6ff33"
      },
      "b": {
        "hl": "text",
        "bg": "#0b0b0b",
        "c": "#c6ff33"
      }
    }
  },
  "seed-duelo-c15": {
    "q": "O acento aparece como detalhe ou como faixa?",
    "la": "Detalhe: uma etiqueta ou um botão",
    "lb": "Faixa: um bloco largo de cor",
    "ctx": "Orienta o tamanho da área colorida numa peça: um ponto pequeno de destaque ou uma faixa de cor.",
    "a": "seed-nova4-cores-60",
    "b": "seed-nova4-cores-50",
    "pal": {
      "a": {
        "lay": "dot",
        "bg": "#fffdf8",
        "c": "#c6ff33"
      },
      "b": {
        "lay": "band",
        "bg": "#fffdf8",
        "c": "#c6ff33"
      }
    }
  }
};
