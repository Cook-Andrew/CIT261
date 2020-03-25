$(document).ready(function () {
    $("#quiz").load("quiz.html", function(){
        $("#check").hide();
        $("#wrong").hide();
        $("#completion").attr("max", quizJson.answers.length);
        $("#question").text(quizJson.questions[index]);
        $("input:first").on("focusout",function() {
            /* $("#button").trigger("click");  //turns out that this double triggers if you click the button
        });
        $("#button").click(function(){ */
            var answer = $("input:first").val();
            if (answer.toUpperCase() == quizJson.answers[index].toUpperCase()) {
                $("input:first").val("");
                $("#check").show().animate({fontSize: "15rem"}, 600).animate({ fontSize: "3rem"},300).queue(function(next){
                    $(this).hide();
                    if (index < quizJson.answers.length) {
                        index += 1;
                    }
                    $("#question").text(quizJson.questions[index]);
                    $("html").trigger("click");
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