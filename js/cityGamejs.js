$(function () {



    function UrlExists(url){
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        return http.status!=404;
    }

    var used=[];
    var maxN;
    var alphabet = [];
    var adata=[];
    var adding=1;
    for (let i = 0; i< 26; i++)
        alphabet.push((i+10).toString(36).toUpperCase());
    var last = alphabet[Math.floor((Math.random() * 26))];


    function newWord() {
        var count = $("tbody > *").length;
        if (count>6){
            $("tbody > *").first().addClass("fadeOutUp");
            setTimeout(function () {
                $("tbody > *").first().remove();
                $("tbody > *").first().addClass("fadeOutUp");
                setTimeout(function () {
                    $("tbody > *").first().remove();
                }, 500);
            }, 500);
        }
        $(".scoretab").removeClass("pulse");
        let nlist = [];
        let first = -1;
        for (let i = 0; i < maxN; i++) {
            if (adata[i].name[0].toString() == last&&used[adata[i].id]==0) {
                nlist.push(adata[i]);
            }
        }
        if (nlist.length===0){
            $("tbody").append(`<tr class="animated fadeIn"><td class="typewr"></td></td></tr>`);
            $(".scoretab").addClass("pulse");
            var typed = new Typed(".typewr",{
                strings: ["You won this time, human!"],
                typespeed: 59,
                loop: false
            });
            $('.scorecnt').html(parseInt($('.scorecnt').html(), 10)+50);
            localStorage.setItem("countryScore", parseInt($('.scorecnt').html(), 10));
            if (localStorage.getItem("highscore")===null||localStorage.getItem("highscore")<parseInt($('.scorecnt').html(), 10))
                localStorage.setItem("highscore", parseInt($('.scorecnt').html(), 10));
            $("input").remove();
            $(".submitbut").html("Continue");
            $(".submitbut").attr("href", "result2.html");
            clearInterval(intervalHandle);
            return;
        }
        var ind = Math.floor(Math.random() * nlist.length);
        var next = nlist[ind];
        used[parseInt(next.id, 10)]=1;
        last = next.name[next.name.length - 1].toUpperCase();
        $("tbody").append(`<tr class="animated fadeIn"><td><img style="visibility: hidden" class="flagicon" src="${"img/"+next.code2l.toLowerCase()+".png"}" alt=""></td><td><span class="typewr"></span></td><td><a href='https://www.google.com/?#q=${(next.name).replace(/ /g, "+").toString()}' target="_blank">Learn more</a></td></tr>`);
        setTimeout(function () {
            var typed = new Typed(".typewr",{
                strings: [next.name],
                typespeed: 59,
                loop: false,
                onComplete: function(){
                    $("img").css("visibility", "");
                }
            });
        }, 1000);
        $("#inputcountry").val(last);
    }


    $.getJSON("json/countries.json").done(function (data){
        for (let i=0; i < data.length; i++) {
            if (UrlExists("img/" + (data[i].code2l).toLowerCase() + ".png"))
                adata.push(data[i]);
        }
        maxN = (adata.length);
        for (let i=0; i <1000;i++)
            used[i]=0;
        newWord();
    });

    $(".submitbut").click(function (evt) {
        //evt.stopPropagation();
        //evt.preventDefault();
        var country = $("#inputcountry").val();
        if (country===null) {
            alert("Please, check if the input is correct!");
            $("#inputcountry").val(last);
            return;
        }
        if (country[0]==last){
            var ok=0, index;
            for (var i=0;i<maxN;i++){
                if (adata[i].name==country){
                    ok++;
                    index=i;
                    break;
                }
            }
            if (ok==0){
                alert("I can't find this country on the map... Try another one/");
                $("#inputcountry").val(last);
                return;
            }
            if (used[parseInt(adata[index].id, 10)]){
                alert("This country has been already used!");
                $("#inputcountry").val(last);
                return;
            }
            else{
                $('.scorecnt').html(parseInt($('.scorecnt').html(), 10)+adding);
                $(".scoretab").addClass("pulse");
                $("tbody").append(`<tr class="animated fadeIn"><td><img class="flagicon" src="${"img/"+adata[index].code2l.toLowerCase()+".png"}" alt=""></td><td>${adata[i].name}</td><td><a href='https://www.google.com/?#q=${(adata[i].name).replace(/ /g, "+").toString()}' target="_blank">Learn more</a></td></tr>`);
                last=country[country.length-1].toUpperCase();
                $("#inputcountry").val("");
                $(".typewr").removeClass("typewr");
                $(".typed-cursor").remove();
                adding++;
                used[parseInt(adata[index].id, 10)]=1;
                var count = $("tbody > *").length;
                if (count>6){
                    $("tbody > *").first().addClass("fadeOutUp");
                    setTimeout(function () {
                        $("tbody > *").first().remove();
                        $("tbody > *").first().addClass("fadeOutUp");
                        setTimeout(function () {
                            $("tbody > *").first().remove();
                        }, 600);
                    }, 600);
                }
                setTimeout(function () {
                    newWord();
                }, 2000);


            }
        }
        else{
            alert("The first letter must be the same as last in the last country's name");
            $("#inputcity").val(last);
            $("#inputcountry").val("");
            return;
        }
    });


    function tick(){
        var timeDisplay = document.getElementById("time");

        var min = Math.floor(secondsRemaining / 60);
        var sec = secondsRemaining - (min * 60);
        if (sec < 10) {
            sec = "0" + sec;
        }
        var message = min.toString() + ":" + sec;
        timeDisplay.innerHTML = message;
        if (secondsRemaining === 0){
            localStorage.setItem("countryScore", parseInt($('.scorecnt').html(), 10));
            $("input").remove();
            $(".submitbut").html("Continue");
            $(".submitbut").attr("href", "result2.html");
            clearInterval(intervalHandle);
        }
        secondsRemaining--;
    }

    function startCountdown(){
        var minutes = 2;
        secondsRemaining = minutes * 60;
        intervalHandle = setInterval(tick, 1000);
    }
    startCountdown();
});