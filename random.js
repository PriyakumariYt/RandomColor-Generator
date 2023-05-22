
 let button = document.getElementById("btn");
 let displayCode = document.getElementById("colorCode");
 let color;
 let randomColor = () => {
   color = "#";
   let hexaDecimal = "0123456789ABCDEFHIJK";
   for (let i = 0; i < 6; i++) {
     color = color + hexaDecimal[Math.floor(Math.random() * 16)];
   }
   return color;
 };
 button.addEventListener("click", () => {
   document.body.style.backgroundColor = randomColor();
   displayCode.innerHTML = color;
 });