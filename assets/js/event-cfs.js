// ALERT FORM
const enterAll =
    `<div class="danger">
        <img src="assets/img/danger.svg" alt="">
        <div class="desc">
            <h4>Enter all required data</h4>
            <h5>Please input again with all required data.</h5>
        </div>
    </div>`;

$('#submit-form').click(() => {
    if ($('#fullname')[0].value == '' || $('#faculty')[0].value == '' || $('#batch')[0].value == '' || $('#domicile')[0].value == '' || $('#whatsapp')[0].value == '' || $('#instagram')[0].value == '' || $('#gdrive')[0].value == '') {
        $('#alert-regis').css({ 'display': 'block' })
        $('#alert-regis')[0].innerHTML = enterAll;
    }
    else {
        // INI KALO UDAH SUBMIT KEMANA?
        window.location.href = 'dashboard.html';
    }
})

// ISIAN ANNOUNCEMENT
const oprec =
    `<h2 class="smaller">Requirement</h2>
    <h3>The following list is what you’ll need to <span class="text-red">include</span> inside a
        <span class="text-red">google drive folder</span> and their formats:
    </h3>
    <div class="requirement">
        <div class="tl-card">
            <h4>Video</h4>
            <h4>Video_Name</h4>
        </div>
        <div class="tl-card">
            <h4>CV</h4>
            <h4>CV_Name</h4>
        </div>
        <div class="tl-card">
            <h4>KTM</h4>
            <h4>KTM_Name</h4>
        </div>
        <div class="tl-card">
            <h4>Script</h4>
            <h4>Script_Name</h4>
        </div>
    </div>
    <h4>Please upload the folder with <span class="text-green">Name_Faculty</span> as your <span
            class="text-green">folder name</span> and don’t forget to set your applications
        <span class="text-green">on public</span></h4>`;

const soon = `<h1 class="bigest">Coming Soon</h1>`;

const announceI =
    `<h2 class="smaller">Next Stage Announcement</h2>
    <h3>Thank you to all applicants who have participated in Call For Student Speakers. For
        further information regarding applicants who passed the qualification can be seen below.
        We wish you best of luck!</h3>
    <a href="" class="button submit">List Applicant</a>`;

const interview =
    `<h2 class="smaller">Interview</h2>
    <h3>To all applicants who have reached the interview stage, the interview will be conducted
        on <span class="text-green">23-24 October 2021</span>. Make sure you have prepared the
        <span class="text-green">presentation</span> that you will be showing during the
        interview. <br>
        We wish you tons of luck on the interview stage!
    </h3>
    <a href="" class="button submit">Dashboard</a>`;

const final =
    `<h2 class="smaller">Final Announcement</h2>
    <h3>The following names have been <span class="text-green">chosen</span> to be the <span
            class="text-green">student speakers on TEDxUniversitasAirlangga 2021</span>. We are
        looking forward to collaborating with you and contributing to the success of
        TEDxUniversitasAirlangga 2021.
        <br><br>
        Thank you to all participant! Keep your spirit. <br>
        Your ideas worth to spread
    </h3>
    <div class="the-winner">
        <!-- ISIAN WINNERNYA BLM TAU APAAN -->
        <div class="winner">
            <img src="assets/img/mainboard/marsa.png" alt="">
            <div class="member-card">
                <h4>Marsa</h4>
                <p>Lisence | FEB 19</p>
                <div class="footer">
                    <a href="https://www.instagram.com/marsaandt" target="_blank"
                        rel="noopener noreferrer"><img src="assets/img/ic-insta-black.svg"
                            alt=""></a>
                    <a target="_blank" rel="noopener noreferrer" style="opacity: .2;"><img
                            src="assets/img/ic-twitter-black.svg" alt=""></a>
                    <div></div>
                    <hr class="red">
                </div>
            </div>
        </div>
        <div class="winner">
            <img src="assets/img/mainboard/marsa.png" alt="">
            <div class="member-card">
                <h4>Marsa</h4>
                <p>Lisence | FEB 19</p>
                <div class="footer">
                    <a href="https://www.instagram.com/marsaandt" target="_blank"
                        rel="noopener noreferrer"><img src="assets/img/ic-insta-black.svg"
                            alt=""></a>
                    <a target="_blank" rel="noopener noreferrer" style="opacity: .2;"><img
                            src="assets/img/ic-twitter-black.svg" alt=""></a>
                    <div></div>
                    <hr class="red">
                </div>
            </div>
        </div>
    </div>`;

// GENERATOR ANNOUNCEMENT
$("label.tl-card").click(e => {
    $('.announce-content')[0].style.opacity = 0;

    setTimeout(() => {
        if ($('#oprec')[0].checked) {
            $('.announce-body')[0].innerHTML = oprec;
        }
        else if ($('#announceI')[0].checked) {
            $('.announce-body')[0].innerHTML = announceI;
        }
        else if ($('#interview')[0].checked) {
            $('.announce-body')[0].innerHTML = interview;
        }
        else if ($('#final')[0].checked) {
            $('.announce-body')[0].innerHTML = final;
        }
        else {
            $('.announce-body')[0].innerHTML = soon;
        }
    }, 1000);

    setTimeout(() => {
        $('.announce-content')[0].style.opacity = 1;
    }, 1000);
})

// CAROUSEL TIMELINE MOBILE
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}