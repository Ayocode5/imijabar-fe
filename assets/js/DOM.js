// const navbarListsElement = document.querySelector('.navbar_list');
// const dataReload = document.querySelectorAll("[data-reload]");

// function getAPI() {
//     const promise = new Promise((resolve, reject) => {
//         fetch('http://localhost:4000/language')
//             .then(result => result.json())
//             .then(resultData => resolve(resultData), (err) => {
//                 reject(err)
//             });
//     })
//     return promise;
// }

// if (window.location.hash) {
//     if (window.location.hash === "#en") {
//         getAPI().then(result => {
//             navbarListsElement.innerHTML = '';
//             result.english.navbarItem.forEach(element => {
//                 navbarListsElement.innerHTML += `<li class="nav-item mr-lg-3 active">
//                 <a class="nav-link" href="#">${element}<span class="sr-only">(current)</span></a>
//                 </li>`
//             });
//         })
//     }
// }

// dataReload.forEach((item, i) => {
//     item.addEventListener('click', () => {
//         getAPI().then(result => {
//             console.log(result.english)
//             navbarListsElement.innerHTML = '';
//             result.english.navbarItem.forEach(element => {
//                 navbarListsElement.innerHTML += `<li class="nav-item mr-lg-3 active">
//                         <a class="nav-link" href="#">${element}<span class="sr-only">(current)</span></a>
//                         </li>`
//             });
//         })
//     })
// })

// $('#recipeCarousel').carousel({
//     interval: 2000
// })

// $('.carousel .carousel-item').each(function () {
//     var next = $(this).next();
//     if (!next.length) {
//         next = $(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));

//     for (var i = 0; i < 2; i++) {
//         next = next.next();
//         if (!next.length) {
//             next = $(this).siblings(':first');
//         }

//         next.children(':first-child').clone().appendTo($(this));
//     }
// });

// Developed at agap2
// Based on:
// http://www.codeply.com/go/s3I9ivCBYH/multi-carousel-single-slide-bootstrap-4

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