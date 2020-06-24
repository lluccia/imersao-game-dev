class Personagem {
  
  constructor(imagem) {
    this.imagem = imagem;
    
    this.spriteX = 0;
    this.spriteY = 0;
  }

  exibe() {
    image(this.imagem, 0, height - 135, 110, 135, this.spriteX, this.spriteY, 220, 270);
    this.anima();
  }

  anima() {
    this.spriteX = this.spriteX + 220;
    
    if (this.spriteX == 220 * 4) {
      this.spriteX = 0;
      this.spriteY = this.spriteY + 270;
      
      if (this.spriteY == 270 * 4 ) {
        this.spriteY = 0;
      }
    }
  }
}