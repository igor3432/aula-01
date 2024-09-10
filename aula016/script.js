function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]verifique os dados e tente novamente!')
    } else {
        // window.alert('tudo ok!')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `idade calculada:${idade}` 
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fotosimagem/fotohomembebe.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotosimagem/fotohomemjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotosimagem/fotohomemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotosimagem/fotohomemvelho.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','fotosimagem/fotomulhercriança.png')

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','fotosimagem/fotomulherjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotosimagem/fotomulheradulta.png')
            } else {
                //idoso
                img.setAttribute('src','fotosimagem/fotomulhervelha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos `
        res.appendChild(img)
    }
}
