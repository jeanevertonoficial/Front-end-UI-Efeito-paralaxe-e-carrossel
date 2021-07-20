export class Carrossel {
  constructor(anterior, proximo, listaProdutos, navegacao) {
    this.anterior = document.querySelector(anterior);
    this.proximo = document.querySelector(proximo);
    this.listaProdutos = document.querySelector(listaProdutos);
    this.navegacao = document.querySelector(navegacao);

    this.slides = this.getListaSlides();
    this.indicadores = this.getListaIndicadores();
    this.tamanhoSlide = this.gettamanhoSlide();

    this.indiceDoSlideAtual = 0;

    this.proximo.addEventListener("click", this.proximoSlide.bind(this)); //evento ao click mudar a imagem, .bind(this) esta e
    this.anterior.addEventListener("click", this.slideAnterior.bind(this)); //evento ao click mudar a imagem
    this.navegacao.addEventListener("click", this.pularParaSlide.bind(this));
    
    this.PraparaSlides()
  }
  // retornando um lista, porem os filhos da lista
  getListaSlides() {
    return Array.from(this.listaProdutos.children);
  }

  getListaIndicadores() {
    return Array.from(this.navegacao.children);
  }
  //função que pega o tamanho da imagem
  gettamanhoSlide() {
    return this.slides[0].getBoundingClientRect().width;
  }

  getSlideAtual() {
    return this.slides[this.indiceDoSlideAtual];
  }

  getIndiceAtual() {
    return this.indicadores[this.indiceDoSlideAtual];
  }
  proximoSlide() {
    let proximoPosicao = this.indiceDoSlideAtual + 1;
    if (proximoPosicao > this.slides.length - 1) {
      proximoPosicao = 0;
    }

    this.vaParaSlide(proximoPosicao);
  }

  slideAnterior() {
    let posicaoAnterior = this.indiceDoSlideAtual - 1;
    if (posicaoAnterior < 0) {
      posicaoAnterior = this.slides.length - 1;
    }

    this.vaParaSlide(posicaoAnterior);
  }

  vaParaSlide(posicao) {
    const indicadorAtual = this.getIndiceAtual();
    this.indiceDoSlideAtual = posicao;
    const indicadorSeleciondado = this.getIndiceAtual();

    this.scrollParaSlide(this.getSlideAtual());
    this.atualizaIndecadores(
      indicadorAtual,
      indicadorSeleciondado
    ); 
  }

  scrollParaSlide(slideSelecionado) {
    this.listaProdutos.style.transform = "translateX(-" + slideSelecionado.style.left + ")";
  }

  atualizaIndecadores(indicadorAtual, indicadorSelecionado) {
    indicadorAtual.classList.remove("carrossel__indicador--ativo");
    indicadorSelecionado.classList.add("carrossel__indicador--ativo");
  }

  pularParaSlide(evento) {
    if (evento.target === evento.currentTarget) return;

    const indicadorSelecionado = evento.target.getAttribute 
    this.vaParaSlide(parseInt(indicadorSelecionado));
  }

  PraparaSlides() {
    this.slides.forEach((slide, i) => {
      slide.style.left = this.tamanhoSlide * i + "px";
    });
  }
}
