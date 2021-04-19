const square = document.createElement('div');
document.body.appendChild(square); 


let size = 100; 
let grow;
square.style.width ="100%";


document.body.style.height =10000 +"px";
square.style.setProperty('position','fixed');
square.style.top= 0+"px";
square.style.left= 0 +"px";




window.addEventListener("scroll", ()=>{

    if(grow === true){
        square.style.height= size +"px";
        size += 5;
    }else {
        
        square.style.height= size +"px";
        size -=5;
    }

    if (size <= 0){
        grow = true; 
        square.style.backgroundColor = "green";
        document.body.style.backgroundColor = "red"

    }else if(size > window.innerHeight/2) {
        grow =false;
        square.style.backgroundColor= "red";
        document.body.style.backgroundColor= "green"
    }
});
