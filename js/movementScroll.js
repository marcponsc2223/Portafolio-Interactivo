document.addEventListener("DOMContentLoaded", function() {
    var container = document.querySelector('.container');
    var maxWidth = container.scrollWidth - container.clientWidth;
    
    container.addEventListener("wheel", function(event) {
        var scrollAmount = event.deltaY;
        container.scrollLeft += scrollAmount;
        
        // Evita el desplazamiento vertical de la página
        event.preventDefault();
    });
});
