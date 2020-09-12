// window.onscroll = function() {myFunction()};

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   // document.getElementById("myBar").style.width = scrolled + "%";
//   console.log(scrolled);
//   if (scrolled = 0||1||2||3||4||5||6||7||8||9) {
//     console.log("10 PIXELS DONE");
//   }
// }

// window.onscroll = function() {
//   scrollFunction()
// };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementsByClassName("text").style.opacity = "0";
  } else {
    document.getElementsByClassName("text").style.opacity = "100";
  }
}
