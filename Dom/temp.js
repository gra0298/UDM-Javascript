
window.onload = function(){
    let temporizador;
    let parrafo = document.getElementById('parrafo');
    let  caja = document.getElementById('caja');
    let boton = document.getElementById('boton');

    function temporizadorUnaSolaVez(){
        temporizador = setTimeout(function(){
            console.log('Ejecutando temporizador una vez');
        },2000);
    }

    function iniciatemporizador(){
        temporizador = setInterval(function(){
            console.log('Ejecutando temporizador');
        },2000);
    }

    function pararTemporizador(){
        clearInterval(temporizador);
        console.log("temporizador parado");
    }
    function mensaje(texto){
        parrafo.innerHTML=texto;
        caja.style.backgroundColor = caja.style.backgroundColor == 'blue' ? 'green' : 'blue';
    }


    iniciatemporizador();

    boton.addEventListener('click',function(){
        console.log('boton pulsado');
        mensaje('temporizador arado');
        pararTemporizador();
        // temporizadorUnaSolaVez();
    });
}

