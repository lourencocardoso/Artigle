
const nom = document.getElementById('nom')
const em = document.getElementById('em')
const password = document.getElementById('password')
const btn = document.getElementById('btn')
//Chave do LocalStorage
const LocalStorageChave = 'User'

btn.addEventListener('click', ()=> {
  let email = document.getElementById('email').value
  let senha = document.getElementById('senha').value
  let nome = document.getElementById('nome').value
  let SMSerr = document.getElementById('SMSerr')

  if(email == ''|| senha == '' || nome == ''){
    SMSerr.style.display = 'flex'
    SMSerr.innerHTML = 'Erro ao carregar os dados'
  }else{
    //Quardando e criando os dados
    let user = JSON.parse(localStorage.getItem(LocalStorageChave)|| "[]")
    user.push({
      name: nome,
      senha: senha,
      email: email,
    })
    //setando os dados
    localStorage.setItem(LocalStorageChave, JSON.stringify(user))
  }
})