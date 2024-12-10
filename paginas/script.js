let quantMamao
let quantMilho
let quantAbobora 
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
  
    let quantidade = document.querySelector("#quantidade")

    let a = Number(quantidade.value)
    a = a+1
    quantidade.value = a
}

// função para subtrair produtos
function subtrair(){
    let quantidade = document.querySelector("#quantidade")
    let a = Number(quantidade.value)

    if(quantidade.value > 0){
        a = a-1
        quantidade.value = a
    }
}

// funções para salvar as quantidades dos produtos
function salvarCompraMamao(){
    let quantidade = document.querySelector("#quantidade")

    quantMamao = Number(quantidade.value)
    
}

function salvarCompraMilho(){
    let quantidade = document.querySelector("#quantidade")

    quantMilho = Number(quantidade.value)
    
}

function salvarCompraMamao(){
    let quantidade = document.querySelector("#quantidade")

    quantAbobora = Number(quantidade.value)
   
}

// função para carregar o carrinho
function carrinho(){
    if(quantMamao > 0){
        for(let i = 0; i < quantMamao;i++){

        }
    }

    if(quantMilho > 0){
        for(let i = 0; i < quantMilho;i++){

        }
    }

    if(quantAbobora > 0){
        for(let i = 0; i < quantMilho;i++){

        }
    }
}

//função para validar formulário
function validar(){
    if(nome.value === ""){
        texto.innerHTML = `Preecha seu nome`
    }

    if(sobrenome.value === ""){
       texto.innerHTML = `Preencha o sobrenome`
    }

    if(cep.value === ""){
        texto.innerHTML = `Preecha o cep`
    }

    if(endereco.value === ""){
        texto.innerHTML = `Preencha seu endereço`
    }

    if(numero.value === ""){
        texto.innerHTML = `Preencha o número`
    }

    if(email.value === ""){
        texto.innerHTML = "Preencha o email"
    }

    if(cpf.value){
        texto.innerHTML = `Preencha o cpf`
    }


    
}