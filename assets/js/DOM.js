document.addEventListener('DOMContentLoaded', function () {
    console.log('test')
    const ele = document.querySelector('.scroll_content_page');
    console.log(ele)
    ele.style.cursor = 'grabbing';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);
});



$('.carousel_kepengurusan').owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    navText: ["<img src='./assets/img/arrow-left-carousel.svg'>", "<img src='./assets/img/arrow-right-carousel.svg'>"],
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true
        },
        568: {
            items: 2,
            nav: false
        },
        768: {
            items: 3,
            nav: true
        },
        992: {
            items: 4,
            nav: true,
        }
    }
})

$('.carousel_cabor_detail_event').owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    navText: ["<img src='./assets/img/arrow-left-carousel.svg'>", "<img src='./assets/img/arrow-right-carousel.svg'>"],

    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true
        },
        568: {
            items: 2,
            nav: false
        },
        768: {
            items: 3,
            nav: true
        },
        992: {
            items: 4,
            nav: true,
        }
    }
})
const navbarListsElement = document.querySelectorAll('.nav-link');
const buttonChangeLanguage = document.querySelector('.checkbox_switch_language');


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


// Filter Events by it's category
$(function () {
    function filterEvents(events, listFilter) {
        const filteredEvents = [];
        events.forEach(event => {
            const categories = event.getAttribute('categories').split(",")

            categories.forEach(category => {
                if (listFilter.includes(category)) {
                    if (!filteredEvents.includes(event)) {
                        filteredEvents.push(event)
                    }
                }
            });
        });

        return filteredEvents;
    }

    const wrapEvents = document.querySelector('.events_wrapper')
    const events = document.querySelectorAll(".item_event");

    $(".event-category .list-dropdown .dropdown-item").click(function () {
        $(".select_category:first-child").text($(this).text());
        $(".select_category:first-child").val($(this).text());

        wrapEvents.innerHTML = '';
        filterEvents(events, this.getAttribute('filters').split(',')).forEach((event) => {
            wrapEvents.append(event);
        })
    });
})



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