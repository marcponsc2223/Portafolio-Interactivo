let character = document.getElementById('character')
let formContact = document.getElementById('contactForm')
document.addEventListener("DOMContentLoaded", function() {
    let container = document.querySelector('.container')
    var initialCloudsPositionX = []
    var isScrollingLeft = false 
    
    character.style.left = (window.innerWidth / 2 )+ 'px'
    // console.log(formContact.offsetLeft);
    // let scrollTop = false
    // Registra la posición inicial de las nubes

    cloudsPositionX.forEach(function(x) {
        initialCloudsPositionX.push(x);
    });

    container.addEventListener("wheel", function(event) {
        var scrollAmount = event.deltaY;
        container.scrollLeft += scrollAmount;
        character.left = container.scrollLeft
        console.log(character.left + character.offsetWidth);
        collisionCharacterWithForm()
        // Verificar si estamos al principio de la página y hacemos scroll hacia la izquierda
        if (container.scrollLeft <= 0 && scrollAmount < 0) {
            cloudsPositionX.forEach(function(x, index) {
                cloudsPositionX[index] = initialCloudsPositionX[index];
            });
            container.scrollLeft = 0; 
            isScrollingLeft = true; 
        } else {
            isScrollingLeft = false;
            // console.log(cloudsArray[i].style.width.replace('px', ''));
            if (event.deltaY >= 100) {
                for (let i = 0; i < cloudsArray.length; i++) {
                    // if (cloudsPositionX[i] < (parseFloat(m1.style.width.replace('px', '')) - parseFloat(cloudsArray[i].style.width.replace('px', ''))) && !scrollTop) {
                        cloudsPositionX[i] += 50;
                        
                    // } else scrollTop = true
                    
                }
            } else {
                if (container.scrollLeft > 0) {
                    for (let i = 0; i < cloudsArray.length; i++) {
                        cloudsPositionX[i] -= 50;
                        // scrollTop = false
                    }
                }
            }
        }

        // Evitar el desplazamiento vertical de la página
        event.preventDefault();
    });

    // Verificar si se sigue haciendo scroll hacia la izquierda y continuar moviendo las nubes
    window.addEventListener("scroll", function() {
        if (isScrollingLeft) {
            for (let i = 0; i < cloudsArray.length; i++) {
                cloudsPositionX[i] -= 50;
            }
            updateCloudsPosition();
        }
    });
});

function collisionCharacterWithForm() {
        if (
            character.left + character.offsetWidth + (200)>= formContact.offsetLeft &&
            character.left <= formContact.offsetLeft + formContact.offsetWidth &&
            character.offsetTop + character.offsetHeight >= formContact.offsetTop &&
            character.offsetTop <= formContact.offsetTop + formContact.offsetHeight
        ) {
            console.log('animationStart');
            formContact.style.animation = 'fall 1.5s ease-in-out forwards'
            formContact.addEventListener('animationend', function() {
                document.body.classList.add('shake');
                setTimeout(function() {
                  document.body.classList.remove('shake');
                }, 500);
              })
            
        }
}
