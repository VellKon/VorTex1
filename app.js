function toggleBurgerMenu() {
    var burgerMenuList = document.querySelector('.burger-menu-list');
    burgerMenuList.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.card');

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (!entry.isIntersecting) {
                entry.target.classList.remove('animate');
            } else {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });

    cards.forEach(function(card) {
        observer.observe(card);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var layers = document.querySelectorAll('.layer');

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (!entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, { threshold: 0.5 });

    layers.forEach(function(layer) {
        observer.observe(layer);
    });
});



