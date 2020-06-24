let imagemCenario;
let imagemPersonagem;
let imagemInimigo;

let imagemGameOver;

let cenario;
let personagem;
let inimigo;

let trilhaSonora;
let somPulo;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');

  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');

  imagemGameOver = loadImage('imagens/assets/game-over.png');
  
  trilhaSonora = loadSound('sons/trilha_jogo.mp3');
  
  somPulo = loadSound('sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(matrizPersonagem, imagemPersonagem,
                             0, 110, 135, 220, 270);
  inimigo = new Inimigo(matrizInimigo, imagemInimigo,
                        width - 52, 52, 52, 105, 105);

  trilhaSonora.loop();

  frameRate(40);
}

function keyPressed() {
  if (key == 'ArrowUp')
    personagem.pula();
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();
  personagem.aplicaGravidade();
  
  inimigo.exibe();
  inimigo.move();
  
  if (personagem.estaColidindo(inimigo)) {
    image(imagemGameOver, width/2 - 412/2, height/2 - 78/2);
    trilhaSonora.stop();
    noLoop();
  }
}