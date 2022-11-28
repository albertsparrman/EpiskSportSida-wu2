const left=document.getElementById("left");
const right=document.getElementById("right");
var root = document.querySelector(':root');
let a = 0
let b = 1
let c = 2

left.addEventListener('click', _ => {
   if (a === +2) {

   }
   else {
   root.style.setProperty('--order1', a+=1)
   
   root.style.setProperty('--order2', b+=1)

   root.style.setProperty('--order3', c+=1)
   }
});


right.addEventListener('click', _ => {   
   root.style.setProperty('--order1', a-=1)

   root.style.setProperty('--order2', b-=1)
   
   root.style.setProperty('--order3', c-=1)
});




