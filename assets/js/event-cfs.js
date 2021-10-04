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