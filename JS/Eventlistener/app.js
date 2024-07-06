// var btn = document.getElementById("btn");
// var div_container = document.getElementById("div_container");

// // function , 2 , event , function
// btn.addEventListener("click", function () {
//   alert("Hello Click Event");
// });

// btn.addEventListener("mouseover", function () {
//   alert("Mouse upar agya");
// });

// div_container.addEventListener("mouseover", function () {
//   console.log(div_container.src);
//   div_container.src = "https://i.giphy.com/h55EUEsTG9224.webp";

//   div_container.style.height = "400px";
//   div_container.style.width = "400px";
//   div_container.style.borderRadius = "100%";
// });
// div_container.addEventListener("mouseout", function () {
//   div_container.src =
//     "https://images.unsplash.com/photo-1502590464431-3b66d77494d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvd3N8ZW58MHx8MHx8fDA%3D";
// });

var preview = document.getElementById("preview");
var allColors = document.getElementsByClassName("sm-box");
// var allDiv = document.getElementsByTagName("div");
// console.log("allDiv=>", allDiv);

// var box1 = document.getElementById("box1");
// var box2 = document.getElementById("box2");
// var box3 = document.getElementById("box3");

for (var i = 0; i < allColors.length; i++) {
  console.log("Box", i + 1, allColors[i]);

  allColors[i].style.borderRadius = "6px";
  allColors[i].addEventListener("click", function () {
    // console.log(allColors, i, allColors[i]);
    preview.style.backgroundColor = this.style.backgroundColor;
  });
}

// box1.addEventListener("click", function () {
//   console.log(this);
//   preview.style.backgroundColor = this.style.backgroundColor;
// });

// box2.addEventListener("click", function () {
//   preview.style.backgroundColor = this.style.backgroundColor;
// });

// box3.addEventListener("click", function () {
//   preview.style.backgroundColor = this.style.backgroundColor;
// });
