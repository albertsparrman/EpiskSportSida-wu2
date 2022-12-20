const news1 = "Herrar Div 2 tar hem tredje raka segern efter säsongsinledningen"
const news2 = "GUIF-stugan stänger för resten av säsongen"
const news3 = "IBK Dalen bjuder spelare och ledare i Gimonäs innebandy på föreningskväll"
const news4 = "Nytt avtal med Select och XXL från 2023"


var div = document.getElementsByClassName(".news-background");
let i = 1;

setInterval(myFunc, 7000, "param1", "param2");

function myFunc(p1, p2) {
    if (i == 0) {
        document.getElementById("NewsHeader").innerHTML = news1
        document.getElementById("small-news-1").style.color = "white"
        document.getElementById("small-news-4").style.color = "#ffffff6f"
        document.getElementById("progress1").style.backgroundColor = "white"
        document.getElementById("progress4").style.backgroundColor = "#ffffff6f"
        document.getElementById("news").style.backgroundImage="url(/img/4UUdcc6JtM-600.jpeg)"
        document.getElementById('bar1').style.transition="linear 7s"
        document.getElementById('bar1').style.width="100%"
        document.getElementById('bar4').style.transition="0s"
        document.getElementById('bar4').style.width="0%"
    }
    if (i == 1) {
        document.getElementById("NewsHeader").innerHTML = news2 
        document.getElementById("small-news-2").style.color = "white"
        document.getElementById("small-news-1").style.color = "#ffffff6f"
        document.getElementById("progress2").style.backgroundColor = "white"
        document.getElementById("progress1").style.backgroundColor = "#ffffff6f"
        document.getElementById("news").style.backgroundImage = "url(/img/news2.png)"
        document.getElementById('bar2').style.transition="linear 7s"
        document.getElementById('bar2').style.width="100%"
        document.getElementById('bar1').style.transition="0s"
        document.getElementById('bar1').style.width="0%"    
    }
    if (i == 2) {
        document.getElementById("NewsHeader").innerHTML = news3
        document.getElementById("small-news-3").style.color = "white"
        document.getElementById("small-news-2").style.color = "#ffffff6f"
        document.getElementById("progress3").style.backgroundColor = "white"
        document.getElementById("progress2").style.backgroundColor = "#ffffff6f"
        document.getElementById("news").style.backgroundImage="url(/img/news3.jpg)"
        document.getElementById('bar3').style.transition="linear 7s"
        document.getElementById('bar3').style.width="100%"
        document.getElementById('bar2').style.transition="0s"
        document.getElementById('bar2').style.width="0%"
    }
    if (i == 3) {
        document.getElementById("NewsHeader").innerHTML = news4
        document.getElementById("small-news-4").style.color = "white"
        document.getElementById("small-news-3").style.color = "#ffffff6f"
        document.getElementById("progress4").style.backgroundColor = "white"
        document.getElementById("progress3").style.backgroundColor = "#ffffff6f"
        document.getElementById("news").style.backgroundImage="url(/img/news4.png)"
        document.getElementById('bar4').style.transition="linear 7s"
        document.getElementById('bar4').style.width="100%"
        document.getElementById('bar3').style.transition="0s"
        document.getElementById('bar3').style.width="0%"
    }
    
    i++

    if (i == 4) {
        i = 0
    }
}