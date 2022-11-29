const news1 = "Herrar Div 2 tar hem tredje raka segern efter säsongsinledningen"
const news2 = "GUIF-stugan stänger för resten av säsongen"
const news3 = "IBK Dalen bjuder spelare och ledare i Gimonäs innebandy på föreningskväll"
const news4 = "Nytt avtal med Select och XXL från 2023"
       
window.onload = function() {
    for (newsnumber = 0; newsnumber <= 4; newsnumber++) {
       
        if (newsnumber == 1) {
            document.getElementById('NewsHeader').innerHTML = news2
        }
        if (newsnumber == 2) {
            document.getElementById('NewsHeader').innerHTML = news3
        }
        else if (newsnumber == 2) {
            document.getElementById('NewsHeader').innerHTML = news4    
        }
    }
}