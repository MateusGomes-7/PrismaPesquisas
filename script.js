const form = document.getElementById('form')
const msg = document.getElementById('msg')
const box = document.querySelector('.box')

form.addEventListener('submit', async e => {

  e.preventDefault()

  const dados = {
    nome:document.getElementById('name').value,

    idade:document.getElementById('age').value,

    voto:document.querySelector('input[name="vote"]:checked').value
  }

  try{

    await fetch('https://script.google.com/macros/s/AKfycbyHd63sOjN3RupvqDbun6FFmUkWYv_k5HG8e3xdOn-m8uvK3tSgFZw69ZvPfvhaLdRf/exec',{

      method:'POST',
      mode:'no-cors',

      headers:{
        'Content-Type':'application/json'
      },

      body:JSON.stringify(dados)

    })

  } catch(erro){

    console.log(erro)

  }

  form.style.display = 'none'
  msg.style.display = 'block'

  setTimeout(() => {
    box.style.display = 'none'
  },2000)

})