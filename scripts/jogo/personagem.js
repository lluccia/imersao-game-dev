class Personagem extends Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);

    this.yInicial = height - altura;

    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
    this.pulos = 0;
    
    this.somPulo = loadSound("sons/somPulo.mp3");
  }

  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = -30;
      this.pulos++;
      this.somPulo.play();
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;

    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }

  estaColidindo(inimigo) {
    const precisao = .7;
    return collideRectRect(this.x, this.y,
                          this.largura * precisao,
                          this.altura * precisao,
                          inimigo.x, inimigo.y,
                          inimigo.largura * precisao,
                          inimigo.altura * precisao);
  }

}