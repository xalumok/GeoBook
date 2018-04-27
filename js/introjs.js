$(function(){
    $(".outer").html("Hello...");
    $(".outer").addClass("fadeIn");
    setTimeout(function () {
        $(".outer").removeClass("fadeIn");
        $(".outer").addClass("fadeOut");
        setTimeout(function () {
            $(".outer").addClass("smallerText");
            $(".outer").removeClass("fadeOut");
            $(".outer").addClass("fadeIn");
            $(".outer").html("...and welcome to GeoBook - a program for exploring geography at its most mesmerizing");

            setTimeout(function () {
                $(".outer").removeClass("fadeIn");
                $(".outer").addClass("fadeOut");
                setTimeout(function () {
                    $(".outer").removeClass("fadeOut");
                    $(".outer").addClass("fadeIn");
                    $(".outer").html("You will learn by playing simple, but cognitive games");

                    setTimeout(function () {
                        $(".outer").removeClass("fadeIn");
                        $(".outer").addClass("fadeOut");
                        setTimeout(function () {
                            $(".outer").removeClass("fadeOut");
                            $(".outer").addClass("fadeIn");
                            $(".outer").html("Try to score as much points as possible");

                            setTimeout(function () {
                                $(".outer").removeClass("fadeIn");
                                $(".outer").addClass("fadeOut");
                                setTimeout(function () {
                                    $(".outer").removeClass("fadeOut");
                                    $(".outer").addClass("fadeIn");
                                    $(".outer").html("So, let's start!");
                                    setTimeout(function () {
                                        $(".outer").removeClass("fadeIn");
                                        $(".outer").addClass("fadeOut");
                                        setTimeout(function () {
                                            $(".outer").removeClass("fadeOut");
                                            $(".outer").addClass("fadeIn");
                                            $(".outer").html("In the first game you will  guess flags of countries all around the world");
                                            setTimeout(function () {
                                                window.location.replace("flagGuess.html");
                                                //$(".outer").removeClass("smallerText");
                                            }, 5000);
                                        }, 800);
                                    }, 4000);

                                }, 800);
                            }, 4000);

                        }, 800);
                    }, 4000);

                }, 800);
            }, 6000);

        }, 800);
    }, 2000);
});
