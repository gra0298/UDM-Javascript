window.onload = function(){
    //navegador
    console.log('Alto = '+window.innerHeight);
    console.log('Ancho ='+window.innerWidth);
    // pantalla
    console.log('Alto = '+screen.height);
    console.log('Ancho ='+screen.width);
    // url actual
    console.log(window.location);
    // redirigir
    function irWeb(url){
        window.location.href=url;
    }
    // window.location.href = 'https://youtube.com';
    // console.log(window.location);
    // irWeb('https://www.google.com');

    // ventana pop up
    function abrirVentana(url){
        window.open(url,"","width=400,height=250");
    }
    abrirVentana("https://www.google.com"); 

}
