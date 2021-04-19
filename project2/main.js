
const square = document.createElement('div');
square.src = "https://d-art.ppstatic.pl/kadry/k/r/1/1e/5c/5f9933db25467_o_medium.jpg";
square.style.setProperty('background-image','url(' +square.src + ')' );
square.style.setProperty('backgruound-size', 'auto');
document.body.appendChild(square); 
 
let grow = true;


let size = 10; // 
square.style.width =size + "vh";
square.style.height =size + "vh";


 window.addEventListener("scroll", ()=> {
     if(grow == true){
        size +=10;
        square.style.width=size +"vh";
        square.style.height=size +"vh";
     } else {
        size -=10;
        square.style.width=size +"vh";
        square.style.height=size +"vh";
     }

     if(size >= window.innerHeight){
         grow = false;
     }else if (size == 10) {
        grow = true;
     }
 });



 window.addEventListener("click", ()=> {
    if(grow == true){
       size +=10;
       square.style.width=size +"vh";
       square.style.height=size +"vh";
    } else {
       size -=10;
       square.style.width=size +"vh";
       square.style.height=size +"vh";
    }

    if(size >= window.innerHeight){
        grow = false;
    }else if (size == 10) {
       grow = true;
    }
});


window.addEventListener("mousemove", ()=> {
    if(grow == true){
       size +=10;
       square.style.width=size +"vh";
       square.style.height=size +"vh";
    } else {
       size -=10;
       square.style.width=size +"vh";
       square.style.height=size +"vh";
    }

    if(size >= window.innerHeight){
        grow = false;
    }else if (size == 10) {
       grow = true;
    }
});



