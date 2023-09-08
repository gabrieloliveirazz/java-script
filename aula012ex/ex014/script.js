function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        console.log('Bom Dia!')
        img.src = 'imagens/fotomanha.jpg'
        document.body.style.background = 'skyblue'
    } else if (hora >=12 && hora < 18) {
        console.log('Boa Tarde!')
        img.src = 'imagens/fototarde.jpg'
        document.body.style.background = 'orange'
    } else { 
        console.log('Boa Noite!')
        img.src = 'imagens/fotonoite.jpg'
        document.body.style.background = 'navy'
    }
}