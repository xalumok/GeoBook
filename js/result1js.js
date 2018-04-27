$(function() {
    $(".scoretext").html(`Your answers were <div class="tquote">`+(localStorage.getItem("score")*10).toString()+`%</div> accurate` );

    $(".continueBut").click(function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        $(".frame").addClass("fadeOut");
        setTimeout(function () {
            $(".frame").remove();
            $(".outer").css("padding", "15%");

            $(".outer").html("Good job!");
            $(".outer").addClass("fadeIn");
            setTimeout(function () {
                $(".outer").removeClass("fadeIn");
                $(".outer").addClass("fadeOut");
                setTimeout(function () {
                    $(".outer").html("Let's continue to the next game, which is called 'Countries'");
                    $(".outer").removeClass("fadeOut");
                    $(".outer").addClass("fadeIn");
                    setTimeout(function () {
                        $(".outer").removeClass("fadeIn");
                        $(".outer").addClass("fadeOut");
                        setTimeout(function () {
                            $(".outer").html("The rules are simple: you play versus me and every round a player has to name a country which starts on the last letter of previous country.");
                            $(".outer").removeClass("fadeOut");
                            $(".outer").addClass("fadeIn");

                            setTimeout(function () {
                                $(".outer").removeClass("fadeIn");
                                $(".outer").addClass("fadeOut");
                                setTimeout(function () {
                                    $(".outer").html("But don't try to cheat, I have a huge map with all countries!");
                                    $(".outer").removeClass("fadeOut");
                                    $(".outer").addClass("fadeIn");

                                    setTimeout(function () {
                                        $(".outer").removeClass("fadeIn");
                                        $(".outer").addClass("fadeOut");
                                        setTimeout(function () {
                                            $(".outer").html("The game lasts 90 seconds and starts now!");
                                            $(".outer").removeClass("fadeOut");
                                            $(".outer").addClass("fadeIn");

                                            setTimeout(function () {
                                                location.replace("cityGame.html");
                                            }, 10000);

                                        }, 800);
                                    }, 13000);

                                }, 800);
                            }, 15000);

                        }, 800);
                    }, 5000);

                }, 800);
            }, 5000);
        }, 2000);

        $(".outer").css("padding", "0");
    });

});

