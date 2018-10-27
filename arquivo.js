//Função auto executavel
(function(window, document) {
    'use strict';

    //efeito maquina de escrever 
    //declaração das constantes usadas
    const titulo = document.querySelector('[data-header]');
    const message = "<Kennnety Anderson Front-end Programming, Web Design/>";

    //function para dividir a const utilizando um loop para acrecenta  r 
    // cada caracter a cada 75 milisegundo vezes o numero do index
    function typeWrite(elemento) {
        //encadeamento de Array.from com forEach
        // para dividir a message e gerar um loop com seus itens e index
        //com o uso de uma arrow function
        Array.from(message)
            .forEach((item, index) => {
                //Função que ira acrecentar cada elemento do array * o index
                //a cada 75 milissegundos
                setTimeout(() => elemento.innerHTML += item, 75 * index);
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
        //Armazena dentro de uma const o valor do eixo y vertical somado ao tamanho da janela
        //multiplicando por 3 e dividindo por 4 para pegar cerca de um terço do espaço da tela
        const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
        target.forEach(element => {
            //teste para verificar se windowTop é maior que a distancia especificada
            //para adicionar o elemeto do setado pelo efeito scroll
            if ((windowTop) > element.offsetTop) {
                element.classList.add(animateClass);
                //se não for maior ele remove o eelemeto
            } else {
                element.classList.remove(animateClass);
            }
        });
    };

    //Chamada da função pelo menos uma vez.
    animeScroll();
    //Ativação da funçao com arrow function a partir do evento scroll.
    if (target.length) {
        window.addEventListener("scroll", () => animeScroll());
    };

})(window, document);