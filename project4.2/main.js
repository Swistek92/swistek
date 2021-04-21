// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony

document.body.addEventListener('click',(event) => {
    console.log(event.clientX, event.clientY);
    const color = getColor(event);
    document.body.style.backgroundColor = color;
})

const getColor = (e) => {  
    if(e.clientX%2 ===0){
        if (e.clientY%2 ===0){
            return "red";
        
    } else {
        return "green"
    }
}
else {
    if (e.clientY%2 ===0){
        return "green";
    }else {
        return "blue"
     }
    }
}














// document.body.addEventListener('click',(e)=>{
//     let red = 0;
//     let green = 255;
//     let blue = 0;
//     const szerokosc = e.clientX;
//     const wysokosc = e.clientY;

//     console.log(Math.round(szerokosc), Math.round(wysokosc));

//     document.body.style.backgroundColor= `rgb(${red}, ${green}, ${blue})`

//     if(Math.round(wysokosc)%2 && Math.round(szerokosc)%2     ){
//         let red = 0;
//     let green = 0;
//     let blue = 255;
//     document.body.style.backgroundColor= `rgb(${red}, ${green}, ${blue})`
// console.log("kupa");
// }
// else if (!(Math.round(wysokosc)%2 && Math.round(szerokosc)%2==0)){
//     let red = 255;
//     let green = 0;
//     let blue = 0;
//     document.body.style.backgroundColor= `rgb(${red}, ${green}, ${blue})`

// }
//     })
