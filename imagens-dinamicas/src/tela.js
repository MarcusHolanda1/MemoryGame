const ID_CONTEUDO = "conteudo"
class Tela {
    static obterCodigoHtml(item) {
        return `    
    <div class="col-md-3">
        <div class="card" style="width: 18rem;">
            <img src="${item.img}" name="${item.nome}" alt="...">
        </div>
        <br/>
    </div>
    `
    }
    static alterarConteudoHTML(codigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innetHTML = codigoHtml
    }
    static gerarStringHTMLPelaImagem(itens) {
        return itens.map(Tela.obterCodigoHtml).join('')
    }
    static atualizarImagens(itens) {
        const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens)
        Tela.alterarConteudoHTML(codigoHtml)
    }
}