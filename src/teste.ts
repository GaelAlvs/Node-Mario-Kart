type Jogador = {
  NOME: string;
  VELOCIDADE: number;
  MANOBRABILIDADE: number;
  PODER: number;
  PONTOS: number;
};

const jogador1: Jogador = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const jogador2: Jogador = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

async function rolaDado() {
  return Math.floor(Math.random() * 6) + 1;
}

async function pegaBlocoAleatorio() {
  let aleatorio = Math.random();
  let resultado;

  switch (true) {
    case aleatorio < 0.33:
      resultado = "RETA";
      break;
    case aleatorio < 0.66:
      resultado = "CURVA";
      break;
    default:
      resultado = "CONFRONTO";
  }
}

async function jogaCorridaEngine(personagem1, personagem2) {
  for (let rodada = 1; rodada <= 5; rodada++) {
    console.log(`🏁 Rodada ${rodada}`);

    //sortear bloco
    let bloco = await getRandomBlock();
    console.log(`Bloco: ${bloco}`);
  }
}

(async function principal() {
  console.log(
    `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`
  );
})();
