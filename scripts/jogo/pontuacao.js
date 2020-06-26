class Pontuacao {
  constructor() {
    this.pontos = 0;
  }

  exibe() {
    textAlign(RIGHT);
    fill('#fff');
    textSize(60);
    text(parseInt(this.pontos), width - 30, 60);
  }

  adicionarPonto() {
    this.pontos += 0.2;
  }
}