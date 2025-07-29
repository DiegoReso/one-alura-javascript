
let amigos = [];

const adicionarAmigo=()=>{
    let amigo = document.getElementById('amigo').value;

    if(amigo == ""){
        alert("nome nao pode ser vazio");
        return
    }
    amigos.push(amigo)
    let lista = document.getElementById('listaAmigos');
    
    lista.innerHTML ='';

    amigos.forEach(item =>{
        let li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li);
    });

    document.getElementById('amigo').value = '';

}

const sortearAmigo=()=>{
    if(amigos == ''){
        alert('Adicione pelo menos 2 amigos')
        return;
    }
    let numeroSorteado = Math.floor(Math.random() * amigos.length);

    let listaResultado = document.getElementById('resultado');


    listaResultado.innerHTML = `<li>${amigos[numeroSorteado]}</li>`
    
}