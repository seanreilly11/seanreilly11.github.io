AOS.init();

$(document).ready(function () {
    $(".open-menu").click(function () {
        $(".full-menu").show();
    });
    $(".close-menu").click(function () {
        $(".full-menu").hide();
    });
    $(".menu-list-item").click(function () {
        $(".full-menu").hide();
    });
});
