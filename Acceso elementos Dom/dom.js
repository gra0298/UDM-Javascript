
let etiqueta = document.getElementsByTagName("h2")[0];
let identificador = document.getElementById("identificador")
let clase = document.getElementsByClassName("clase")[0];
let contenido = document.getElementById("contenido");
contenido.innerHTML = etiqueta.innerHTML+"<br/>"+
identificador.innerHTML+"<br/>"+clase.innerHTML;