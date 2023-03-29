// window.onload(){
    
// }
$(document).ready(function(){
    console.log('Documento listo');
    // $("#contenido").html("contenido cambiado con jquery")
    // $("h1").hide();
    $(".miparrafo").hide();
    $(".miparrafo2").hide();
    console.log("Esperamos unos segundos y cambiamos título");

    tiempo = setTimeout('temporizador()',3000);
    console.log("Ya a pasado el tiempo");
        
});
function temporizador(){
    $('#contenido').show();
    $('h1').show();
    $('h1').html("Titutlo cambiado desde jquery");
    $('.miparrafo').show();
    $('#miparrafo2').show();
}