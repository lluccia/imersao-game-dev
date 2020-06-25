let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;

let imagemGameOver;

let cenario;
let pontuacao;

let personagem;

let inimigo;
let inimigoGrande;
let inimigoVoador;

let trilhaSonora;
let somPulo;

const inimigos = [];

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');

  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande =loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador =loadImage('imagens/inimigos/gotinha-voadora.png');

  imagemGameOver = loadImage('imagens/assets/game-over.png');
  
  trilhaSonora = loadSound('sons/trilha_jogo.mp3');
  
  somPulo = loadSound('sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  cenario = new Cenario(imagemCenario, 3);

  pontuacao = new Pontuacao();

  personagem = new Personagem(matrizPersonagem, imagemPersonagem,
                              0, 30, 110, 135, 220, 270);

  const inimigo = new Inimigo(matrizInimigo, imagemInimigo,
                        width - 52, 30,
                        52, 52, 104, 104,
                        10, 200);
  
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador,
                              width - 52, 200, 
                              100, 75, 200, 150,
                              10, 1000);

  const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande,
                              width, 0,
                              200, 200, 400, 400,
                              10, 2000);
  
  inimigos.push(inimigo);
  inimigos.push(inimigoVoador);
  inimigos.push(inimigoGrande);
                              
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

  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();

    if (personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, width/2 - 412/2, height/2 - 78/2);
      trilhaSonora.stop();
      noLoop();
    }
  });

  pontuacao.exibe();
  pontuacao.adicionarPonto();
}