$(document).ready(function(){
    // animaciones
    $("p").click(function(){
        /* Desvanecimiento
        // $("div").hide(); //desaparecer div
        // $("div").show(); //aparecer div
        //$("div").toggle(); //si está lo desaparece si no aparece
        // fadeIn fadeOut fadeToggle
        $("div").fadeOut();*/

        // deslizamiento slideUp slideDown slideToggle
        // $("div").slideDown(1000);
        // $("div").slideUp(1000);



    });

    $("button").click(function(){
        // $("div").toggle(2000); desvanecimiento
        // $("h1").css({"background-color":"pink"});
        // $("div").fadeToggle(1000);
        // deslizamiento
        // $("div").slideToggle(1000);
        $("p").animate({
            width: '-=50px',
            height: '+=5px',
            
        },100);

    });

    // una a una segun orden
    let parrafo = $("p");
    parrafo.animate({opacity:1});
    parrafo.animate({height:'+=100px',width:'+=50px',top:'-=30px'},1000);
    parrafo.animate({opacity:0.5,width:'+=50px'},);
    parrafo.animate({height:'-=100px',width:'-=50px',top:'+=30px'},500);

});