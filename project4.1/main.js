

const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove',function(e){
  const x = e.clientX;
  const y = e.clientY;
  const height = window.innerHeight;
  const width = window.innerWidth;
 const red =(x/width)*100;
 const green =(y/height)*100;
 const blue = (((x/width)*100) + ((y/height)*100) )/2;


  h1.textContent = x +", " + y;

  document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%`;

})


// const h1 = document.querySelector('h1');
// document.body.addEventListener('mousemove',function(e){
//   // console.log(e.clientX, e.clientY);
//   h1.textContent = `${e.clientX}, ${e.clientY}`;
//   // h1.textContent = `${e.pageX}, ${e.pageY}`;
//   // h1.textContent = `${e.screenX}, ${e.screenY}`;
//   document.body.style.backgroundColor = `rgb(${e.clientX}, ${e.clientY}, 100)`;

// })






// const h1 = document.querySelector('h1');
// document.body.addEventListener('mousemove', function(e) {
//   // console.log(e.clientX, e.clientY);
//   // h1.textContent = `${e.screenX}, ${e.screenY}`;
//   // h1.textContent = `${e.pageX}, ${e.pageY}`;
//   h1.textContent = e.clientX + ", " + e.clientY;


// })