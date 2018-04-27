$(function () {
    $(".scoretext").html(localStorage.getItem("countryScore").toString());
    localStorage.setItem("highscore", Math.max(localStorage.getItem("countryScore"), localStorage.getItem("highscore")));
    $(".highscore").html("High score:" + localStorage.getItem("highscore").toString());

    var score = localStorage.getItem("countryScore");
    var elem = $(".congrats");
        elem.html("Good!");
        if (score>10){
            elem.html("Wow!");
            if (score>20){
                elem.html("Amazing!");
                $(".scoretext").addClass("onfire");
                if (score>30){
                    elem.html("Wonderful!");
                    if (score>40){
                        elem.html("OMG!!!");
                    }
                }
            }
        }

});