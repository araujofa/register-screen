const senha = document.getElementById('senha')
const confirmarSenha = document.getElementById('confirmar-senha')
const form = document.getElementById('formulario')
const erro = document.getElementById('erro-msg')


form.addEventListener('submit', function(e){
    if(senha.value != confirmarSenha.value){
        e.preventDefault()
        console.log('Senhas não são iguais')
    }
})

confirmarSenha.addEventListener('input', function(){
    if(senha.value != confirmarSenha.value){
        senha.classList.add('input-erro')
        confirmarSenha.classList.add('input-erro')
        erro.textContent = 'The Passwords do not match'
    }else{
        senha.classList.remove('input-erro')
        confirmarSenha.classList.remove('input-erro')
        erro.textContent = ''
        console.log('Conta criada com Sucesso')
    }
})