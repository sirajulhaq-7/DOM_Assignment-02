// Select Element By ID
const head = document.getElementById("head");
head.innerText = "DOM Element Selected By ID";

// Select Element By Tag Name
const para = document.getElementsByTagName("p");
console.log(para.length);
para[0].textContent = "First Paragraph Updated";

// Select Element By Tag Name
const button = document.getElementsByClassName("button");
console.log(button.length);
button[1].textContent = "Click Me";

// Select Element By Using uerySelector
const heading = document.querySelector("h3");
heading.style.color = "blue";

// Select Element By querSelectorAll
const list = document.querySelectorAll(".list");
console.log(list.length);
list.forEach((list) => {
  list.style.color = "green";
});
// li.forEach(function (list) {
//   list.style.color = "green";
// });

// Change Style Using Selected Element
const select = document.querySelector(".select");
select.style.color = "white";
select.style.backgroundColor = "black";
select.style.fontSize = "30px";
