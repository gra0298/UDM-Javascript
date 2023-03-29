document.getElementById("nombre").addEventListener('focus',cambiar);
document.getElementById("nombre").addEventListener('blur',volver);
document.getElementById("clave").addEventListener('focus',cambiar);
document.getElementById("clave").addEventListener('blur',volver);

function cambiar(evento){
    let elemento= evento.target;
    elemento.style.backgroundColor='red';
}

function volver(evento){
    let elemento= evento.target;
    elemento.style.backgroundColor='white';
}