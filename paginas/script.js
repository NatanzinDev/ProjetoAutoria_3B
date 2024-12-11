let quantmamao = 0
let quantmilho = 0
let quantabobora = 0
let o 
const form = document.querySelector('#form')
let quantidade = document.querySelector("#quantidade")
let carrinho = document.querySelector(".carrinho")
const nome = document.querySelector("#inome")
const sobrenome = document.querySelector("#inome")
const cep = document.querySelector("#icep")
const numero = document.querySelector("#inumero")
const endereco = document.querySelector("#iendereco")
const credito = document.querySelector("#icredito")
const pix = document.querySelector("#idebito")
const debito = document.querySelector("#ipix")
const cpf = document.querySelector("#icpf")
const email = document.querySelector("#iemail")
let texto = document.querySelector(".texto")
const telefone = document.querySelector("#itelefone")



// função para adição de produtos
function somar(){
  
    

    let a= Number(quantidade.value)
    a = a+1
    quantidade.value = a
}

// função para subtrair produtos
function subtrair(){
   
    let a = Number(quantidade.value)

    if(quantidade.value > 0){
        a = a-1
        quantidade.value = a
    }
}

// funções para salvar as quantidades dos produtos
function salvarCompraMamao(){
    let aux = Number(quantidade.value)
    quantmamao = aux

    if(quantmamao > 0){
        window.location.href = "compra.html"
    }else{
        alert("A quantidade tem que ser maior que 0.")
    }
    
}

function salvarCompraMilho(){
    let aux = Number(quantidade.value)
    quantmilho = aux
  
    if(quantmilho > 0){
        window.location.href = "compra.html"
    }else{
        alert("A quantidade tem que ser maior que 0.")
    }
    
}

function salvarCompraAbobora(){
    let aux = Number(quantidade.value)
    quantabobora = aux
    
    if(quantabobora > 0){
        window.location.href = "compra.html"
    }else{
        alert("A quantidade tem que ser maior que 0.")
    }
}

// função para carregar o carrinho

function carregar(){
   console.log(quantmilho)
   console.log(o)
    if(quantabobora.value > 0 ||quantmamao.value > 0 ||quantmilho > 0){
        carrinho.innerHTML = `fnejwknf`
    }

} 

//função para validar formulário
form.addEventListener("submit", (event) =>{
    event.preventDefault;

    if(nome.value === ""){
        alert(`Preencha seu nome`)
        return
    }

    if(sobrenome.value === ""){
        alert(`Preencha seu sobrenome`)
        return
    }

    if(email.value ===""  || !validarEmail(email.value)){
        alert(`Preencha seu email`)
        return
    }

    if(endereco.value.length < 5 || endereco.value === ""){
        alert(`Endereco muito curto ou vazio, preencha corretamente`)
        return
    }

    if(cep.value === ""){
        alert(`Preencha seu cep `)
        return
    }

    if(cpf.value === "" || cpf.value.length != 11){
        alert("Preencha com um cpf válido")
        return
    }

    if(numero.value === ""){
        alert(`Preencha o número`)
    }

    if(telefone === ""){
        alert(`Preencha com seu telefone`)
    }





    form.submit();
    info()
});

function validarEmail(e){
    const eRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if(eRegex.test(e)){
        return true
    }

    return false
}

const modal = document.querySelector("dialog")
//informações do comprador
function info(){
    let div = document.querySelector(".dialogdiv")
    let op = document.createElement('p')
    op.innerHTML = `Nome: ${nome.value} \n Sobrenome: ${sobrenome.value} \n CPF: ${cpf.value} \n Endereço ${endereco.value} \n CEP: ${cep.value} \n Telefone: ${telefone.value} `
    div.appendChild(op)
    modal.showModal()
}

function fechar(){
    modal.close()
}