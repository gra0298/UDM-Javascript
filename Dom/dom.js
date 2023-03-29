window.onload = function(){


    var parrafos = document.getElementsByClassName('parrafo');
    console.log(parrafos)
    parrafos[2].style.backgroundColor = 'yellow';

    let titulo = document.getElementById('titulo');
    titulo.innerHTML="Titul desde script";
    let boton = document.getElementById('boton');

    boton.addEventListener('click',function(){
        console.log("has pulsado el boton");
    });

    // por etiqueta
    let items = document.getElementsByTagName('li');
    console.log(items);
    items[1].innerHTML = 'item 2 desde codigo';
    let elementos = Array.from(items);
    console.log(elementos);
    elementos.forEach(elemento => console.log(elemento));   
   

}
