function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    // var hora = data.getHours(); // Use esta linha para pegar a hora atual
    var hora = 8; // Use esta linha para testar diferentes horas do dia
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'modelos.img/fotomanha.png'; // ajuste o caminho conforme necessário
        document.body.style.background = '#e2cd9f';
        msg.innerHTML += ' Bom dia!';
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'modelos.img/fototarde.png'; // ajuste o caminho conforme necessário
        document.body.style.background = '#b9846f';
        msg.innerHTML += ' Boa tarde!';
    } else {
        // BOA NOITE!
        img.src = 'modelos.img/fotonoite.png'; // ajuste o caminho conforme necessário
        document.body.style.background = '#515154';
        msg.innerHTML += ' Boa noite!';
    }
}
