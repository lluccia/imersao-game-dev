let imagemCenario;
let imagemPersonagem;

let cenario;
let personagem;
let trilhaSonora;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');

  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');

  trilhaSonora = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);

  trilhaSonora.loop();

  frameRate(40);
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();
}