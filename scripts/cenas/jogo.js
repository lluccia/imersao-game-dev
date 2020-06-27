class Jogo {
  constructor() {
    this.inimigos = [];
    this.inimigoAtual = 0;

    this.vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

    this.indiceMapa = 0;
    this.mapa = fita.mapa;
  }

  setup() {
    this.cenario = new Cenario(imagemCenario, 3);

    this.pontuacao = new Pontuacao();

    this.personagem = new Personagem(matrizPersonagem, imagemPersonagem,
                                0, 30, 110, 135, 220, 270);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo,
                          width - 52, 30,
                          52, 52, 104, 104,
                          10);

    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador,
                                width - 52, 200,
                                100, 75, 200, 150,
                                10);

    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande,
                                width, 0,
                                200, 200, 400, 400,
                                10);

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

    this.vida.draw();

    this.personagem.exibe();
    this.personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indiceMapa];
    const inimigo = this.inimigos[linhaAtual.inimigo];

    inimigo.exibe();
    inimigo.move();

    const inimigoVisivel = inimigo.x > -inimigo.largura;
    if (!inimigoVisivel) {
      inimigo.aparece();
      this.indiceMapa = (this.indiceMapa+1) % this.mapa.length;
      inimigo.velocidade = linhaAtual.velocidade;
    }


    if (this.personagem.estaColidindo(inimigo)) {
      if (!this.personagem.invencivel) {
        this.personagem.tornarInvencivel();
        this.vida.perdeVida();
      }

      if (this.vida.vidas === 0) {
        image(imagemGameOver, width/2 - 412/2, height/2 - 78/2);
        trilhaSonora.stop();
        noLoop();
      }
    };

    this.pontuacao.exibe();
    this.pontuacao.adicionarPonto();
  }
}