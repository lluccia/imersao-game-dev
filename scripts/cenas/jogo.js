class Jogo {
  constructor() {
    this.inimigos = [];
    this.inimigoAtual = 0;
  }

  setup() {
    this.cenario = new Cenario(imagemCenario, 3);

    this.pontuacao = new Pontuacao();

    this.personagem = new Personagem(matrizPersonagem, imagemPersonagem,
                                0, 30, 110, 135, 220, 270);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo,
                          width - 52, 30,
                          52, 52, 104, 104,
                          10, 100);

    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador,
                                width - 52, 200,
                                100, 75, 200, 150,
                                10, 100);

    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande,
                                width, 0,
                                200, 200, 400, 400,
                                10, 100);

    this.inimigos.push(inimigo);
    this.inimigos.push(inimigoVoador);
    this.inimigos.push(inimigoGrande);

    trilhaSonora.loop();
  }

  keyPressed(key) {
    if (key == 'ArrowUp')
      this.personagem.pula();
  }
  
  draw() {
    this.cenario.exibe();
    this.cenario.move();

    this.personagem.exibe();
    this.personagem.aplicaGravidade();

    const inimigo = this.inimigos[this.inimigoAtual];

    inimigo.exibe();
    inimigo.move();

    const inimigoVisivel = inimigo.x > -inimigo.largura;
    if (!inimigoVisivel) {
      this.inimigoAtual = (this.inimigoAtual+1) % this.inimigos.length;
      inimigo.velocidade = parseInt(random(10, 30));
    }


    if (this.personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, width/2 - 412/2, height/2 - 78/2);
      trilhaSonora.stop();
      noLoop();
    };

    this.pontuacao.exibe();
    this.pontuacao.adicionarPonto();
  }
}