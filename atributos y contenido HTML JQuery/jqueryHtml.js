// window.onload(){
    
// }
$(document).ready(function(){
    var valor = $("a").attr("href");
    console.log("valor inicial es "+valor);
    setTimeout(function(){
        console.log("Despues de 2 segundos cambiamos el enlace");
        $("a").attr("href","http://www.google.es");
        let valor = $("a").attr("href");
        console.log("El nuevo valor actual es "+valor);
    }),2000;
    // eliminar atributo
    $("a").removeAttr("href");
    console.log("atributo eliminado");
    var valor = $("a").attr("href");
    console.log("El nuevo valor actual es "+valor);

    // obtener contenido con html
    var contenido =$("p").html();
    // alert(contenido);
    console.log(contenido);
    // obtener texto
    var solotexto = $("p").text();
    console.log(solotexto);
    // alert(solotexto);

    // cambiar el texto
    $("p").text("Texto cambiado desde codigo");

    // append prepend after before

    // insertar
    $("#contenido").append("Hola");
    $(".miparrafo").prepend("prepend antes del parrafo");

    // añadir
    $("#miparrafo2").before("<h1>Tìtulo añadido con before desde el script</h1>");
    $("#miparrafo2").after("<strong>Otro texto desde ek script</strong><br/>");

    // nuevo elemento
    var texto = $("<p></p>").text("NUEVO PARRAFO desde script")
    //detras del parrafo 2
    $("#miparrafo2").after(texto);
});
