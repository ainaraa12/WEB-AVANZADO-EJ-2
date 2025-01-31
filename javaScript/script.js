$(document).ready(function() {
    $(document).ready(function() {
        $(document).ready(function() {
            let index = 0; // Índice inicial del carrusel
            const totalItems = $('.caja-interna').length/4;
            
            // Primero, obtenemos el ancho de cada imagen
            const itemWidth = $('.caja-interna').outerWidth(); // Ancho de cada imagen
        
            // Ahora calculamos el ancho de la ventana
            const width = window.innerWidth;
        
            // Ahora sí podemos calcular el número de elementos visibles
            const itemsVisible = width / itemWidth; // Número de imágenes visibles a la vez
        
            console.log(itemsVisible); // Verifica el resultado
        
            // Función para mover el carrusel
            function moverCarrusel(direction) {
                // Calculamos el índice del nuevo slide
                index += direction;
        
                // Evitar que el índice salga de los límites
                if (index < 0) index = totalItems - itemsVisible;
                if (index >= totalItems - itemsVisible + 1) index = 0;
        
                // Actualizamos el desplazamiento del carrusel
                $('.carrusel').css('transform', 'translateX(-' + (index * itemWidth) + 'px)');
            }
        
            // Manejar los clics en las flechas
            $('.flecha.derecha').click(function() {
                moverCarrusel(1); // Mover a la derecha
                console.log("Hola");
            });
        
            $('.flecha.izquierda').click(function() {
                moverCarrusel(-1); // Mover a la izquierda
            });
        
            //Carrusel2
            let index2 = 0; // Índice inicial del carrusel
            const totalItems2 = $('.caja-interna').length/4;
            
            // Primero, obtenemos el ancho de cada imagen
            const itemWidth2 = $('.caja-interna').outerWidth(); // Ancho de cada imagen
        
            // Ahora sí podemos calcular el número de elementos visibles
            const itemsVisible2 = width / itemWidth; // Número de imágenes visibles a la vez
        
            console.log(itemsVisible2); // Verifica el resultado
        
            // Función para mover el carrusel
            function moverCarrusel2(direction2) {
                // Calculamos el índice del nuevo slide
                index2 += direction2;
        
                // Evitar que el índice salga de los límites
                if (index2 < 0) index2 = totalItems2 - itemsVisible2;
                if (index2 >= totalItems2 - itemsVisible2 + 1) index2 = 0;
        
                // Actualizamos el desplazamiento del carrusel
                $('.carrusel2').css('transform', 'translateX(-' + (index2 * itemWidth2) + 'px)');
            }
        
            // Manejar los clics en las flechas
            $('.flecha.derecha2').click(function() {
                moverCarrusel2(1); // Mover a la derecha
            });
        
            $('.flecha.izquierda2').click(function() {
                moverCarrusel2(-1); // Mover a la izquierda
            });
        });
        
    });
    
    //Para que cuando hagas click en cualquier sitio en el div, vaya al link
    $(".caja2").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
    });

    $(".caja1").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
    });

    $(".ticket-cont-promax").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
    });

    $(".socialsTxt li").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
    });
});