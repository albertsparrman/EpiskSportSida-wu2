const menu=document.getElementById("menu");
let open = 1 

menu.addEventListener('click', _ => {
    if (open == 1) {        
        document.getElementById("ul2").style.top = "6rem"
        document.getElementById("ul2").style.transition = "2s"
        open = 0
    }  
    else if (open == 0) {
        document.getElementById("ul2").style.top = "-14rem"  
        open = 1 
    }
});


