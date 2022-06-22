// initialisation du carousel

document.addEventListener('DOMContentLoaded', () => {
    // initialize carousel
    const carousel = document.querySelectorAll('.carousel');
    M.Carousel.init(carousel, {
        fullWidth: true,
        indicators: true, // a activer pour l autoplay
    });

    // autoplay purejs
    let indicatorItems = document.querySelectorAll('.carousel .indicator-item'),
        slideTime = 5000,
        activeClass = "active";

    setInterval(() => {
        indicatorItems.forEach(el => {
            if (el.classList.contains(activeClass)) {
                sib = el.nextElementSibling;
                if (sib == null) {
                    indicatorItems[0].click();
                } else {
                    sib.click()
                }
            }
        });
    }, slideTime);
});

//  Fin d'initialisation du CAROUSEL

//initialisation du bouton fixe en bas de page

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        // direction: 'left'
    });
});


//initialisation de la carte fermable
let card = document.querySelector('.card1');
let cardtoggle = document.querySelector('.toggle1');
cardtoggle.onclick = function () {
    card.classList.toggle('active');
};



