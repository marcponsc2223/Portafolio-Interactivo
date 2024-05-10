document.addEventListener("DOMContentLoaded", function() {
    var container = document.querySelector('.container');

    container.addEventListener("wheel", function(event) {
        var scrollAmount = event.deltaY;
        container.scrollLeft += scrollAmount;
        // if (event.deltaY >= 100) {
        //     for (let i = 0; i < cloudsArray.length; i++) {
        //         cloudsPositionX[i] += 50

        //     }
        // } else {
        //      if (container.scrollLeft > 0) {
        //     for (let i = 0; i < cloudsArray.length; i++) {
        //         console.log(cloudsPositionX.lastIndexOf);
        //             cloudsPositionX[i] -= 50  
        //     } 
        //      }
        // }
        // Evita el desplazamiento vertical de la página
        event.preventDefault();
    });
});
