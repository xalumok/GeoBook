

$(function() {
    var coments = ["That's right!", "You got it!", "Good work!", "Fantastic!", "Super!", "Excellent!", "Brilliant!", "Wonderful!", "Perfect!"];
    var main = $("main");
    var used = [], quecnt=0, ans, answered=0;
    function newQue(){
        $(".radio").each(function(){
            $(this).prop("checked", false);
        });

        $.getJSON("json/countries.json", function (data) {
            var maxN = data.length;
            var seq = [];
            while (seq.length <= 4) {
                var rand = Math.floor(Math.random() * maxN);
                if ($.inArray(rand, seq) === -1 && $.inArray(rand, used) === -1)
                    seq.push(rand);
            }
            ans = Math.floor(Math.random() * 3);
            used.push(seq[ans]);
            $(".flagimg").attr("src", "img/"+(data[seq[ans]].code2l).toLowerCase()+".png");
            $(".radio-label").each(function (index) {
                $(this).text(data[seq[index]].name);
            });
        });
        setTimeout(function () {
            main.fadeIn();
        }, 100);

        quecnt++;
        answered=0;
    }

    newQue();

    $(".answerform .ansOuter").click(function(evt){
        evt.stopPropagation();
        evt.preventDefault();
        if (answered===1) return;
        var number = $(this).index();
        number/=2;
        var tthis = this;
        $(this).addClass("makeRed");
        document.getElementsByClassName("ansOuter")[ans].classList.add("makeGreen");
        if (number===ans) {
            $('.scoreCnt').html(parseInt($('.scoreCnt').html(), 10) + 1);
            var comentn = Math.floor(Math.random() * coments.length);
            $(".coment").html(coments[comentn]);
            $(".coment").addClass("flipInY");
            $(".coment").addClass("green");
        }
        else{
            $(".coment").html("Sorry, incorrect");
            $(".coment").addClass("jackInTheBox");
            $(".coment").addClass("red");
        }
        answered=1;
        setTimeout(
            function(){
                // main.removeClass("fadeInUp");
                // main.addClass("fadeOutDown");
                main.fadeOut();
                if (quecnt===10){
                    localStorage.setItem("score", parseInt($('.scoreCnt').html(), 10));
                    setTimeout(function () {
                        window.location.replace("result1.html");
                        return 0;
                    }, 300);

                }
                setTimeout(
                    function () {
                        $(".coment").removeClass("jackInTheBox");
                        $(".coment").removeClass("green");
                        $(".coment").removeClass("red");
                        $(".coment").removeClass("flipInY");
                        $(".coment").html("");
                        $(tthis).removeClass("makeRed");
                        document.getElementsByClassName("ansOuter")[ans].classList.remove("makeGreen");
                        newQue();
                    }, 700);
            }, 2000);
    });

});