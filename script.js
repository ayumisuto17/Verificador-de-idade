function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
          genero = 'Homem'
          if (idade >=0 && idade < 12){
              //child
              img.setAttribute('src', 'babyboy.jpg')
          } else if (idade <=19){
              //teenager
              img.setAttribute('src', 'teenagerboy.jpg')
          } else if (idade <50) {
              //adult
              img.setAttribute('src', 'man.jpg')
          }else  {
             //idoso
             img.setAttribute('src','granfa.jpg')
          }
      }else if(fsex[1].checked) {
          genero = 'Mulher'
          if (idade >=0 && idade < 12){
              //child
              img.setAttribute('src', 'babygirl.jpg')
          } else if (idade <=19){
              //teenager
              img.setAttribute('src', 'teenagergirl.jpg')
          } else if (idade <50) {
              //adult
              img.setAttribute('src', 'woman.jpg')
          }else  {
             //idoso
             img.setAttribute('src', 'granma.jpg')
          }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
    }
  } 