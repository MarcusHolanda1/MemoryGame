function onLoad() {
    const dependencies = {
        tela: Tela
    }

    const jogoDaMemoria = new JogoDaMemoria(dependencies)
    jogoDaMemoria.inicializar()
}
window.onload = onLoad