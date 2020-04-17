$(document).ready(function () {
    $(".open-menu").click(function () {
        $(".full-menu").show();
    });
    $(".close-menu").click(function () {
        $(".full-menu").hide();
    });
    $("#btn-projects").click(function () {
        document.getElementById("projects").scrollIntoView();
    });
});
