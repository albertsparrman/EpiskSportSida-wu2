const menu=document.getElementById("menu");
let open = 1 

menu.addEventListener('click', _ => {
    if (open == 1) {
        document.getElementById("menu-btn").innerHTML = "close"            
        document.getElementById("ul2").style.top = "6rem"
        document.getElementById("ul2").style.transition = "1.7s"
        open = 0
    }  
    else if (open == 0) {
        document.getElementById("menu-btn").innerHTML = "menu"
        document.getElementById("ul2").style.top = "-14rem"  
        open = 1 
    }
});


