// MOVING LINE
; (function ($) {
    "use strict";

    function verificationForm() {
        let current_fs, next_fs, previous_fs; //fieldsets
        let left, opacity, scale; //fieldset properties which we will animate
        let animating; //flag to prevent quick multi-click glitches

        $(".next").click(function (e) {
            e.preventDefault();

            if (animating) return false;
            animating = true;

            current_fs = $(this).parent().parent();
            next_fs = $(this).parent().parent().next();

            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function (now) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.2;
                    //2. bring next_fs from the right(50%)
                    left = (now * 50) + "%";
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale(' + scale + ')',
                        'position': 'absolute',
                        'align-self': 'center',
                        'width': '100%'
                    });
                    next_fs.css({
                        'left': left,
                        'opacity': opacity,
                        'display': 'flex'
                    });
                },
                duration: 800,
                complete: function () {
                    current_fs.hide();
                    animating = false;

                    let nextHeight = next_fs[0].offsetHeight;
                    $('.content').css({
                        'height': nextHeight
                    })
                },
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });

        $(".back").click(function (e) {
            e.preventDefault();
            if (animating) return false;
            animating = true;

            current_fs = $(this).parent().parent();
            previous_fs = $(this).parent().parent().prev();

            //show the previous fieldset
            previous_fs.show();
            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function (now) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale previous_fs from 80% to 100%
                    scale = 0.8 + (1 - now) * 0.2;
                    //2. take current_fs to the right(50%) - from 0%
                    left = ((1 - now) * 50) + "%";
                    //3. increase opacity of previous_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                        'left': left
                    });
                    previous_fs.css({
                        'transform': 'scale(' + scale + ')',
                        'opacity': opacity,
                    });
                },
                duration: 800,
                complete: function () {
                    current_fs.hide();
                    animating = false;

                    let prevHeight = previous_fs[0].offsetHeight;
                    $('.content').css({
                        'height': prevHeight
                    })
                },
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });
    };

    //* Add Phone no select
    function phoneNoselect() {
        if ($('#msform').length) {
            $("#phone").intlTelInput();
            $("#phone").intlTelInput("setNumber", "+880");
        };
    };
    //* Select js
    function nice_Select() {
        if ($('.product_select').length) {
            $('select').niceSelect();
        };
    };
    /*Function Calls*/
    verificationForm();
    phoneNoselect();
    nice_Select();
})(jQuery);

// MOVING DIVISION
const place = $('.member-container')[0];

const video =
    ` <fieldset class="member">
        <div class="member2-inarow">
            <div class="member2">
                <div class="member-card">
                    <h4>INI VIDEO</h4>
                    <p>Manager | FST 19</p>
                    <div class="footer">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img
                                src="assets/img/ic-insta-black.svg" alt=""></a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img
                                src="assets/img/ic-twitter.svg" alt=""></a>
                        <div></div>
                        <hr class="red">
                    </div>
                </div>
                <img src="assets/img/ubin.png" alt="">
                <div class="back-green"></div>
            </div>
            <div class="member2">
                <img src="assets/img/ubin.png" alt="">
                <div class="member-card">
                    <h4>Yer</h4>
                    <p>Co-Manager | FST 19</p>
                    <div class="footer">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img
                                src="assets/img/ic-insta-black.svg" alt=""></a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img
                                src="assets/img/ic-twitter.svg" alt=""></a>
                        <div></div>
                        <hr class="red">
                    </div>
                </div>
                <div class="back-green"></div>
            </div>
        </div>
        <div class="member3">
            <div class="member-card">
                <h4>Andi</h4>
                <p>Coding Staff | FST 19</p>
                <div class="footer">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img
                            src="assets/img/ic-insta-black.svg" alt=""></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img
                            src="assets/img/ic-twitter.svg" alt=""></a>
                    <div></div>
                    <hr class="green">
                </div>
            </div>
            <div class="member-card">
                <h4>Oxy</h4>
                <p>Coding Staff | FST 20</p>
                <div class="footer">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img
                            src="assets/img/ic-insta-black.svg" alt=""></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img
                            src="assets/img/ic-twitter.svg" alt=""></a>
                    <div></div>
                    <hr class="green">
                </div>
            </div>
            <div class="member-card">
                <h4>Puput</h4>
                <p>Design Staff | FST 20</p>
                <div class="footer">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img
                            src="assets/img/ic-insta-black.svg" alt=""></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img
                            src="assets/img/ic-twitter.svg" alt=""></a>
                    <div></div>
                    <hr class="green">
                </div>
            </div>
            <div class="member-card">
                <h4>Arya</h4>
                <p>Design Staff | FST 20</p>
                <div class="footer">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img
                            src="assets/img/ic-insta-black.svg" alt=""></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img
                            src="assets/img/ic-twitter.svg" alt=""></a>
                    <div></div>
                    <hr class="green">
                </div>
            </div>
        </div>
    </fieldset>`;

$('.division').click(e => {
    let part = e.target.id;
    console.log(part);
    $('.member-container')[0].style.opacity = 0;

    setTimeout(() => {
        if (part == 'video') {
            $('.member-container')[0].innerHTML = video;
        }
    }, 1000);

    setTimeout(() => {
        $('.member-container')[0].style.opacity = 1;
    }, 1000);
})