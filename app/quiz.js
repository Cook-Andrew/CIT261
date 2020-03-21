$(document).ready(function () {
    $("#quiz").load("quiz.html", function(){
        $("#check").hide();
        $("#wrong").hide();
        $("#button").click(function(){
            var answer = $("input:first").val();
            if (answer == "answer") {
                $("#check").show().animate({fontSize: "15rem"}, 600).animate({ fontSize: "3rem"},300).queue(function(next){
                    $(this).hide();
                    next();
                });
            } else {
                $("#wrong").fadeIn().delay(600).queue(function(next){
                    $(this).fadeOut(300);
                    next();
                });
            }
        });
    });
});