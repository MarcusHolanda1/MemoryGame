class JogoDaMemoria {
    constructor({ tela }) {
        this.tela = tela

        this.heroisIniciais = [
            { img: './MemoryGame/arquivos/batman_icon.png' },
            { img: './MemoryGame/arquivos/flash_icon.png' },
            { img: './MemoryGame/arquivos/smile_tired_icon.png' },
            { img: './MemoryGame/arquivos/spider_icon.png' },
            { img: './MemoryGame/arquivos/superGirl_icon.png' }
        ]
    }

    inicializar() {
        this.tela.atualizarImagens(this.heroisIniciais)
    }
}