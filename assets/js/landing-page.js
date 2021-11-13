// CLICK TO START
$('#click').click(() => {
    $('body')[0].classList.remove('no-scroll')
    window.scrollBy(0, ($('.heading')[0].offsetHeight - 80));
})

// ON RELOAD: BACK TO TOP
$(document).ready(function () {
    $(this).scrollTop(0);
});

// Hover event-nya
const reads = document.querySelectorAll('.ic-read-more');
const ELEMENTS_SPAN = [];

reads.forEach((element, index) => {
    // If The span element for this element does not exist in the array, add it.
    if (!ELEMENTS_SPAN[index])
        ELEMENTS_SPAN[index] = element.querySelector("span");

    element.addEventListener("mouseover", e => {
        ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
        ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";

        element.addEventListener("mouseout", e => {
            ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
            ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
        });
    });
});