function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);

  jogo = new Jogo();
  jogo.setup();

  telaInicial = new TelaInicial();
  telaInicial.setup();
  
  cenas = {
    jogo: jogo,
    telaInicial: telaInicial
  }

  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);
}

function keyPressed() {
  cenas[cenaAtual].keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}