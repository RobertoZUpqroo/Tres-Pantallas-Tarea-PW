function init(){

    var fondo = document.querySelector(".fondodinamico")
    var fondoverde = document.getElementById("verdebg")
    var fondorojo = document.getElementById("rojobg")
    var fondoazul = document.getElementById("azulbg")

    var texto = document.getElementById("holamundo")
    var textoverde = document.getElementById("rojotext")
    var textorojo = document.getElementById("verdetext")
    var textoazul = document.getElementById("azultext")

    //fondo
    fondoazul.addEventListener("click", function() {
        fondo.style.backgroundColor = "blue";
    });

    fondoverde.addEventListener("click", function() {
        fondo.style.backgroundColor = "green";
    });

    fondorojo.addEventListener("click", function() {
        fondo.style.backgroundColor = "red";
    });
    
    //texto dinamico

    rojotext.addEventListener("click", function() {
        texto.style.color = "red";
    });
    
    azultext.addEventListener("click", function() {
        texto.style.color = "blue";
    });

    verdetext.addEventListener("click", function() {
        texto.style.color = "green";
    });

}


