$(document).ready(function () {

    //Section HUD Maps-------------------------------------------
    let index = 0; 
    const totalItems = $('.caja1').length - 2; 
    const itemWidth = $('.caja1').outerWidth(true); 

    // Función para mover el carrusel
    function moverCarrusel(direction) {
        // Calculamos el índice del nuevo slide
        index += direction;

        // Evitar que el índice salga de los límites
        if (index < 0) index = 0;
        if (index >= totalItems) index = totalItems - 1;

        // Calculamos el desplazamiento en píxeles
        const desplazamiento = index * itemWidth;

        // Aplicamos la transformación al carrusel
        $('.carrusel').css('transform', `translateX(-${desplazamiento}px)`);
    }

    // Manejar los clics en las flechas
    $('.flecha.derecha').click(function () {
        moverCarrusel(1); // Mover a la derecha
    });

    $('.flecha.izquierda').click(function () {
        moverCarrusel(-1); // Mover a la izquierda
    });

    //Section HUD Characters--------------------------------------------

    let accBtn = $(".character-box");

    accBtn.on("click", function(e){
        e.preventDefault();
        console.log($(this).data('char'));
        let val_char = $(this).data('char');

        $('.card-box').hide();        
        $('.card-box[data-char="' + val_char + '"]').fadeIn();
    });

            //To make active buttons.

    var divContainer = document.getElementById("ActiveBtn");

    var divs = divContainer.getElementsByClassName("character-box");

    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
      
          // If there's no active class
          if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
          }
      
          // Add the active class to the current/clicked button
          this.className += " active";
        });
    }
    //Section Google Forms--------------------------------

    // Forms
    $('.form-form').on('submit', function(event) {
        event.preventDefault();
        $('#errorName').text('');
        $('#errorEmail').text('');
        const nombre = $('.name').val().trim();
        const email = $('.email').val().trim();
        let valido = true;
        if (nombre === '' || !/^[A-Za-z\s]{3,20}$/.test(nombre)) {
            $('#errorName').text('Por favor, introduce un nombre.');
            valido = false;
        }
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            $('#errorEmail').text('Por favor, introduce un email correcto.');
            valido = false;
        }
        if (valido) {
            console.log({ nombre, email});
            showModal();
        }
    });
    
    // Ventana modal - forms
    function showModal() {
        const susc = document.getElementById('suscWindow');
        susc.classList.add('show-modal'); 
            const closeModal = () => {
            susc.classList.remove('show-modal');
        };
        document.querySelector('.close').onclick = closeModal;
        window.onclick = function(event) {
            if (event.target === susc) {
                closeModal();
            }
        };
    };
});