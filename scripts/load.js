function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');

  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  fonteTelaInicial = loadFont('fontes/fonteTelaInicial.otf');
  
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande =loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador =loadImage('imagens/inimigos/gotinha-voadora.png');

  imagemGameOver = loadImage('imagens/assets/game-over.png');

  trilhaSonora = loadSound('sons/trilha_jogo.mp3');

  somPulo = loadSound('sons/somPulo.mp3');
}