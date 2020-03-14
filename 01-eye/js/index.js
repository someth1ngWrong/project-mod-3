var balls = document.getElementsByClassName("eyeball");
document.onmousemove = function(){
  var x = event.clientX * 100 / window.innerWidth + "%";
  var y = event.clientY * 100 / window.innerHeight + "%";

  for(var i=0;i<balls.length;i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-"+x+",-"+y+")";
  }
}












//
// function getOffset(el) {
//   el = el.getBoundingClientRect();
//   return {
//     x: el.left + window.scrollX,
//     y: el.top + window.scrollY
//   };
// }
//
// let cursorPos = { x: 0, y: 0 };
// let eye = document.querySelector(".eyes");
// let eyeOffset = getOffset(eye);
// let centerX = eyeOffset.x + eye.offsetWidth / 2;
// let centerY = eyeOffset.y + eye.offsetHeight / 2;
//
// function rotateEye() {
//     let angle = -Math.atan2(cursorPos.x - centerX, cursorPos.y - centerY) * 180 / Math.PI - 180;
//     eye.style.transform = `rotate(${angle}deg) translateX(0.1em)`;
// };
//
// window.addEventListener("mousemove", mousemove);
// function mousemove(e) {
//   cursorPos = {
//     x: e.clientX,
//     y: e.clientY
//   };
//   rotateEye();
// }
