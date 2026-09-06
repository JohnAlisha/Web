// const listItems = document.querySelectorAll("li");
// function toggleDone(e) {
//   if (!e.target.className) {
//     e.target.className = "done";
//   } else {
//     e.target.className = "";
//   }
// }
// listItems.forEach((item) => {
//   item.addEventListener("click", toggleDone);
// });

// // Store a reference to the <h1> in a variable
// const myHeading = document.querySelector("h1");
// // Update the text content of the <h1>
// myHeading.textContent = "Hello world!";

// const test = document.querySelector("li");

// const myimage = document.querySelector("img");

// myimage.addEventListener("click", () => {
//   const mysource = myimage.getAttribute("src");
//   //   console.log("image clicked");
//   if (mysource == "images/firefox-icon.png") {
//     myimage.setAttribute("src", "images/firefox2.png");
//   } else {
//     myimage.setAttribute("src", "images/firefox-icon.png");
//   }
// });

// const myimage = document.querySelector("img");

// myimage.addEventListener("click", () => {
//   const mysource = myimage.getAttribute("src");
//   if (mysource == "images/firefox-icon.png") {
//     myimage.setAttribute("src", "images/firefox2.png");
//   } else {
//     myimage.setAttribute("src", "images/firefox-icon.png");
//   }
// });

// const myimage = document.querySelector("img");

// myimage.addEventListener("click", () => {
//   const mysource = myimage.getAttribute("src");
//   if (mysource == "images/firefox2.png") {
//     myimage.setAttribute("src", "images/firefox-icon.png");
//   } else {
//     myimage.setAttribute("src", "images/firefox2.png");
//   }
// });

const myimage = document.querySelector("img");
const firstimage = "images/firefox2.png";
const secondimage = "images/firefox-icon.png";

myimage.addEventListener("click", () => {
  const mysource = myimage.getAttribute("src");

  if (mysource == firstimage) {
    myimage.setAttribute("src", secondimage);
  } else {
    myimage.setAttribute("src", firstimage);
  }
});

// let mybutton = document.querySelector("button");
// let myheading = document.querySelector("h1");

// function setUserName() {
//   const myname = prompt("Please enter your username");
//   localStorage.setItem("name", myname);
//   myheading.textContent = `Mozila is Cool, ${myname}`;
// }

// let myheading = document.querySelector("h1");
// let mybutton = document.querySelector("button");

// function setUserName() {
//   const myname = prompt("Please Enter your name");
//   localStorage.setItem("name", myname);
//   myheading.textContent = `Mozila is Cool, ${myname}`;
// }

// if (!localStorage.getItem("name")) {
//   setUserName();
// } else {
//   const storedname = localStorage.getItem("name");
//   myheading.textContent = `Mozila is Cool, ${storedname}`;
// }

// mybutton.addEventListener("click", () => {
//   setUserName();
// });

let myheading = document.querySelector("h1");
let mybutton = document.querySelector("button");

function setUserName() {
  const myname = prompt("Please Enter your Name");
  if (!myname) {
    setUserName();
  }
  localStorage.setItem("name", myname);
  myheading.textContent = `Mozila is Cool, ${myname}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedname = localStorage.getItem("name");
  myheading.textContent = `Mozila is Cool, ${storedname}`;
}
mybutton.addEventListener("click", () => {
  setUserName();
});
