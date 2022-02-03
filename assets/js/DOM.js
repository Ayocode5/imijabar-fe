const navbarListsElement = document.querySelectorAll('.nav-link');
const buttonChangeLanguage = document.querySelector('.checkbox_switch_language');

console.log(buttonChangeLanguage)
console.log(navbarListsElement)

buttonChangeLanguage.addEventListener('click', () => {
    if (buttonChangeLanguage.checked) {
        console.log('to us');
        getAPI().then(result => {
            console.log(result.english.navbarItem)

            for (let i = 0; i < navbarListsElement.length; i++) {
                for (let j = 0; j < result.english.navbarItem.length; j++) {
                    if (i === j) {
                        navbarListsElement[i].textContent = result.english.navbarItem[j]
                    }
                }
            }

        })
    } else {
        console.log('not checked');
        getAPI().then(result => {
            console.log(result.indonesia.navbarItem)

            for (let i = 0; i < navbarListsElement.length; i++) {
                for (let j = 0; j < result.indonesia.navbarItem.length; j++) {
                    if (i === j) {
                        navbarListsElement[i].textContent = result.indonesia.navbarItem[j]
                    }
                }
            }

        })
    }
})


function getAPI() {
    const promise = new Promise((resolve, reject) => {
        fetch('http://localhost:4000/language')
            .then(result => result.json())
            .then(resultData => resolve(resultData), (err) => {
                reject(err)
            });
    })
    return promise;
}


$('#recipeCarousel').carousel({
    interval: 2000
})

$('.carousel .carousel-item').each(function () {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < 2; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});


$(function () {

    $(".event-category .list-dropdown .dropdown-item").click(function () {
        $(".select_category:first-child").text($(this).text());
        $(".select_category:first-child").val($(this).text());

    });

});

$('.multi-item-carousel').on('slide.bs.carousel', function (e) {
    let $e = $(e.relatedTarget),
        itemsPerSlide = 5,
        totalItems = $('.carousel-item', this).length,
        $itemsContainer = $('.carousel-inner', this),
        it = itemsPerSlide - (totalItems - $e.index());
    if (it > 0) {
        for (var i = 0; i < it; i++) {
            $('.carousel-item', this).eq(e.direction == "left" ? i : 0).
            // append slides to the end/beginning
            appendTo($itemsContainer);
        }
    }
});


var typed = new Typed("#typed", {
    strings: [
        "Di Website Resmi Ikatan Motor Indonesia",
        "Provinsi Jawa Barat"
    ],
    showCursor: false,
    typeSpeed: 30,
    backSpeed: 10,
    fadeout: true,
    startDelay: 120,
    loop: true
});

// var demo = document.getElementById('demo');

// var typewriter = new Typewriter(demo, {
//     strings: ['Selamat Datang', 'To', 'Type'],
//     autosStart: true,
// });