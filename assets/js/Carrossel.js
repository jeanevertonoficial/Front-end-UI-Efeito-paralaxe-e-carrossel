export class Carrossel {
  constructor(anterior, proximo, listaProdutos, navegacao) {
    this.anterior = document.querySelector(anterior);
    this.proximo = document.querySelector(proximo);
    this.listaProdutos = document.querySelector(listaProdutos);
    this.navegacao = document.querySelector(navegacao);
    
    this.slides = this.getListaSlides()
    this.indicadores = this.getListaIndicadores()
    this.tamanhoSlide = this.gettamanhoSlide()

    this.indiceDoSlideAtual = 0;

    this.proximo.addEventListener('click', this.proximoSlide.bind(this)) //evento ao click mudar a imagem 
    this.anterior.addEventListener('click', this.slideAnterior.bind(this)) //evento ao click mudar a imagem 
    this.getPraparaSlides()

  }
  // retornando um lista, porem os filhos da lista
  getListaSlides() {
    return Array.from(this.listaProdutos.children)
  }

  getListaIndicadores() {
    return Array.from(this.navegacao.children)
  }
  //função que pega o tamanho da imagem 
  gettamanhoSlide() {
    return this.slides[0].getBoundingClientRect().width
  }

  getSlideAtual() {
    return this.slides[this.indiceDoSlideAtual]
  }

  proximoSlide() {
    let proximoPosicao = this.indiceDoSlideAtual + 1
    if(proximoPosicao > this.slides.length - 1) {
      proximoPosicao = 0
    }

    this.vaParaSlide(proximoPosicao)
  }

  slideAnterior() {
    let posicaoAnterior = this.indiceDoSlideAtual - 1
    if(posicaoAnterior < 0) {
      posicaoAnterior = this.slides.length - 1
    }

    this.vaParaSlide(posicaoAnterior)
  }

  vaParaSlide(posicao) {
    this.indiceDoSlideAtual = posicao

    this.scrollParaSlide(this.getSlideAtual())
  }

  scrollParaSlide(slideSelecionado) {
    this.listaProdutos.style.transform = 'transleteX(-' + 
    slideSelecionado.style.left + '-)'
  }

  getPraparaSlides() {
    this.slides.forEach((slide, i) => {
      slide.style.left = this.tamanhoSlide * i + 'px'
    })
  }
}
