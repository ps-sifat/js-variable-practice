let nav = document.createElement("nav");
let div = document.createElement("div");
let div1 = document.createElement("div");
let img = document.createElement("img");
let ul = document.createElement("ul");
let li = document.createElement("li");
let a = document.createElement("a");
let a1 = document.createElement("a");
let a2 = document.createElement("a");
let a3 = document.createElement("a");
let button = document.createElement("button");
const body = document.querySelector("body");

// images
img.setAttribute("src", "./images/logo.png");
img.setAttribute("alt", "./images/logo.png");

// nav iteam 
a.innerText = "Home"
a1.innerText = "Our Service"
a2.innerText = "About us"
a3.innerText = "What's New?"
button.innerText = "Contact us"

// ul list 
li.appendChild(a);
li.appendChild(a1);
li.appendChild(a2);
li.appendChild(a3);

// ul
ul.appendChild(li);

// menu div 
div1.appendChild(ul);

// main div 
div.appendChild(img);
div.appendChild(div1);
div.appendChild(button);

div.style.display = "flex";
// div.style.justifyContent = "space-between";
div.style.alignItems = "center";
div.style.padding = "10px 50px ";

div1.style.marginLeft ="550px"

li.style.listStyle = "none";
li.style.display = "flex";
li.style.columnGap = "50px";
li.style.color = "#817382";

a.style.color = "#F95C19"

button.style.marginLeft = "140px"
button.style.padding = "12px 20px"
button.style.borderRadius = "5px"
button.style.background = "#FFE4D9"
button.style.color = "#F95C19"
button.style.border = "none"

div.style.border = "2px solid #F95C19"
div.style.borderRadius = "5px"

body.appendChild(div)



console.log( body);


