$(document).ready(function () {
    $("ul").hide();
    $("#hamburger").click(function () {
        $("ul").slideToggle();
    });
    $("#pronouns").click(function () {
        $("#container")
            .slideToggle()
            .queue(function (next) {
                $(this).load("pronouns.html");
                next();
            })
            .slideToggle(1000);
    });
    $("#conjugation").click(function () {
        $("#container")
            .slideToggle()
            .queue(function (next) {
                $(this).load("conjugation.html");
                next();
            })
            .slideToggle(1000);
    });
    $("#syntax").click(function () {
        $("#container")
            .slideToggle()
            .queue(function (next) {
                $(this).load("syntax.html");
                next();
            })
            .slideToggle(1000);
    });
    $("#interrogative").click(function () {
        $("#container")
            .slideToggle()
            .queue(function (next) {
                $(this).load("interrogative.html");
                next();
            })
            .slideToggle(1000);
    });
    $("#vocabulary").click(function () {
        $("#container")
            .slideToggle()
            .queue(function (next) {
                $(this).load("vocabulary.html");
                next();
            })
            .slideToggle(1000);
    });
    $("#container").click(function () {
        $("ul").slideUp();
    });
});