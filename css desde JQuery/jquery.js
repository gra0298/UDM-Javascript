
$(document).ready(function(){
    // console.log("Documento listo");
    $('h1').addClass('amarillo');//clase asiganada
    $('p').removeClass('parrafo'); //eliminar clase
    // intercambio añade o borra
    $('button').click(function(){
        $('p').toggleClass('parrafo'); //aparece desaparece tocando el botton
        console.log($('p').css('font-size'));
        console.log($('p').css('margin'));
        $('div').innerWidth(240);
        $('div').outerHeight(340);
    });
    // obtener valor de las propiedades del documento
    console.log($('p').css('font-size'));
    console.log($('p').css('margin'));
    // asignar o cambiar valor
    $('p').css({'background-color':'pink','font-size':'1.3em'});
    // cambiar dimensiones caja div
    $('div').width(120);
    $('div').height(140);
    // innerWith outerWidth innerHeight outerHeight


});