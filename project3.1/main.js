
const btn = document.querySelector("button");
const items = document.querySelectorAll("li");
// const items = [...document.getElementsByTagName("li")];
let size =10;


// btn.addEventListener("click",()=>{
// for (let i=0;i<items.length;i++){
    // if (!liItems[i].style.display) {
        //   //  console.log("dodałem block");
        //   //  liItems[i].style.display = "block";
        //   // }




//     items[i].style.display= "block";
//     items[i].style.fontSize= `${size}px`;
// }
// size+=1;
// });



btn.addEventListener("click", ()=>{
    items.forEach((items)=>{
        items.style.display="block";
        items.style.fontSize = size +"px";

    })
size++


})