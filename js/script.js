AOS.init();

$(document).ready(function () {
    $(".open-menu").click(function () {
        $(".full-menu").slideDown();
    });
    $(".close-menu").click(function () {
        $(".full-menu").slideUp();
    });
    $(".menu-list-item").click(function () {
        $(".full-menu").slideUp();
    });
});
