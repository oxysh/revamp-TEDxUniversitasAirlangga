// NAVBAR BRAND
$('.brand').click(() => {
    window.location.href = 'landing-page.html';
})

// TOMBOL FOOTER ON HOVER
$('.insta.btn-app').mousemove(() => {
    $('.insta.btn-app')[0].innerHTML = `<img src="assets/img/ic-insta-black.svg" alt="">`;
})

$('.insta.btn-app').mouseleave(() => {
    $('.insta.btn-app')[0].innerHTML = `<img src="assets/img/ic-insta.svg" alt="">`;
})

$('.youtube.btn-app').mousemove(() => {
    $('.youtube.btn-app')[0].innerHTML = `<img src="assets/img/ic-youtube-black.svg" alt="">`;
})

$('.youtube.btn-app').mouseleave(() => {
    $('.youtube.btn-app')[0].innerHTML = `<img src="assets/img/ic-youtube.svg" alt="">`;
})

$('.linkedin.btn-app').mousemove(() => {
    $('.linkedin.btn-app')[0].innerHTML = `<img src="assets/img/ic-linkedin-black.svg" alt="">`;
})

$('.linkedin.btn-app').mouseleave(() => {
    $('.linkedin.btn-app')[0].innerHTML = `<img src="assets/img/ic-linkedin.svg" alt="">`;
})

$('.line.btn-app').mousemove(() => {
    $('.line.btn-app')[0].innerHTML = `<img src="assets/img/ic-line-black.svg" alt="">`;
})

$('.line.btn-app').mouseleave(() => {
    $('.line.btn-app')[0].innerHTML = `<img src="assets/img/ic-line.svg" alt="">`;
})

$('.tiktok.btn-app').mousemove(() => {
    $('.tiktok.btn-app')[0].innerHTML = `<img src="assets/img/ic-tiktok-black.svg" alt="">`;
})

$('.tiktok.btn-app').mouseleave(() => {
    $('.tiktok.btn-app')[0].innerHTML = `<img src="assets/img/ic-tiktok.svg" alt="">`;
})