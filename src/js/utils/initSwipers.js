Swiper.instances = {};
let swipers = document.getElementsByClassName('swiper-container');
for (let swiper of swipers) {
    let slidesPerView = parseInt(swiper.dataset.slidesperview || 1);
    let spaceBetween = parseInt(swiper.dataset.spacebetween || 0);
    let nextButton = swiper.dataset.next;
    let prevButton = swiper.dataset.prev;
    let paginationEl = swiper.dataset.paginationel;
    let paginationType = swiper.dataset.paginationtype;
    let direction = swiper.dataset.direction || 'horizontal';
    let name = swiper.dataset.name;
    let allowTouchMove = swiper.dataset.allowtouchmove !== 'false';
    let mousewheel = swiper.dataset.mousewheel ? {invert: false, releaseOnEdges: false} : false;

    let options = {
        slidesPerView: slidesPerView,
        spaceBetween: spaceBetween,
        allowTouchMove: allowTouchMove,
        direction: direction,
        mousewheel: mousewheel,
        navigation: {
            nextEl: nextButton,
            prevEl: prevButton,
        },
        pagination: {
            el: paginationEl,
            type: paginationType,
            clickable: true
        }
    };

    // console.log(options);
    let sw = new Swiper(swiper, options);

    if (name) {
        Swiper.instances[name] = sw;
    }
}

for (let swiper of swipers) {
    let name = swiper.dataset.name;
    let controlSwiper = swiper.dataset.controlswiper;

    if (controlSwiper) {
        Swiper.instances[name].controller.control = Swiper.instances[controlSwiper];
    }
}