//Função auto executavel
(function(window, document) {
    'use strict';

    //efeito maquina de escrever 
    //declaração das constantes usadas
    const titulo = document.querySelector('#header');
    const message = "<Kennnety Anderson Front-end Programming, Web Design/>";
    
    //function para dividir a const utilizando um looṕ para acrecenter 
    // cada caracter a cada 75 milisegundo vezes o numero do index
    function typeWrite(elemento){
        const current = message.split('');
        elemento.innerHTML = "";
        current.forEach(function(item, index){
            setTimeout(function(){
                elemento.innerHTML += item;
            }, 75 * index); 
        });
    };

    //invocação da função
    typeWrite(titulo);


    //efeito de escroll invisivel
    //Declaração de constantente para capturar o atributo dat-anime.
    const target = document.querySelectorAll('[data-anime]');

    //Declaração de constante para seta a classe animate declarada no arquivo css.
    const animateClass = "animate";

    //Função de animação do scroll a cada 3 terços da tela comparada ao objeto window.
    function animeScroll() {
        const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
        target.forEach(function(element) {
            if (windowTop > element.offsetTop) {
                element.classList.add(animateClass);
            } else {
                element.classList.remove(animateClass);
            }
        });
    };

    //Chamada da função pelo menos uma vez.
    animeScroll();
    
    //Ativação da funçao de scroll a partir do evento scroll.
    if (target.length) {
        window.addEventListener("scroll", function() {
            animeScroll();
        }, false)
    };

})(window, document);