class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay);
    
    this.velocidade = velocidade;
    this.delay = delay;
    
    this.x = width + delay;
  }
  
  move() {
    this.x = this.x - this.velocidade;
    
    if (this.x < 0 - this.largura - this.delay)
      this.x = width;
  }
}