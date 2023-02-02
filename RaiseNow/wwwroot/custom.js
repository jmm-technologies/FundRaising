

//$('.body-overlay').on('click', function () {
//    $(this).removeClass('active');
//    $(".slide-bar").removeClass("show");
//    $("body").removeClass("on-side");
//    $('.hamburger-menu > a').removeClass('active');
//});
function OpenMobileNav() {
    console.log("open")
    $(".slide-bar").toggleClass("show");
    $("body").addClass("on-side");
    $('.body-overlay').addClass('active');
    $(this).addClass('active');
}
function CloseMobileNav() {
    console.log("close nav")
    $(".slide-bar").removeClass("show");
    $("body").removeClass("on-side");
    $('.body-overlay').removeClass('active');
    $('.hamburger-menu > a').removeClass('active');
}


function changefunc() {
    //console.log(e)
}

