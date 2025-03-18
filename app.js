let amigos = [];

function imprimirTexto(elemento, texto){
    let lista = document.getElementById(elemento);
    lista.innerHTML = texto;
    return;
}

function borrarTexto(elemento){
    let lista = document.getElementById(elemento);
    lista.innerHTML = "";
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo').value = '';
}

function listaAmigos(){

    let lista= document.getElementById("listaAmigos");
    lista.innerHTML = "";   

        amigos.forEach((amigos, contador) =>{
            //Crea la lista y va agregando los nombres ingresados
            let li = document.createElement("li");
            li.textContent = `${contador + 1}. ${amigos}`; 
            
            //Agrega un boton para poder borrar elementos de la lista
            let botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'x';
            botonEliminar.classList.add('button-eliminar');
            botonEliminar.onclick = () => eliminarAmigo(contador);

            lista.appendChild(li);
            li.appendChild(botonEliminar);
        });
}
//Elimina los elementos seleccionados por el boton 
function eliminarAmigo(indice){
    amigos.splice(indice, 1);
    listaAmigos();
    return;
}

function agregarAmigo(){
    let nombreDeAmigo = document.getElementById('amigo').value;
    if (nombreDeAmigo === ''){
        alert('Por favor, inserte un nombre valido.');    
    } else {
        //Activa el boton de reiniciar al agregar el primer nombre valido
        document.getElementById('reiniciar').removeAttribute('disabled'); 
        //Agrega los elementos al arreglo amigos
        amigos.push (nombreDeAmigo);
        listaAmigos();
        }
        limpiarCaja();    
    return;
}

function sortearAmigo(){
    if (amigos.length < 2){
        alert('Por favor, inserte al menos dos nombres para hacer el sorteo.');  
    } else {
        let numeroGenerado = Math.floor(Math.random()*amigos.length);
        borrarTexto('listaAmigos');
        imprimirTexto ('resultado', `El amigo ganador es: ${amigos[`${numeroGenerado}`]}`);

        }   
    return;
    
}

function reiniciarJuego(){
    //Borrar los nombres guardados en amigos
    //Borrar los nombres escritos en pantalla
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true'); 
}

function condicionesIniciales(){
    amigos = [];
    borrarTexto('resultado');
    borrarTexto('listaAmigos');
}

document.getElementById('reiniciar').onclick = reiniciarJuego;
