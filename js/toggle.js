let flag = true;
function myFunction() {
  const element = document.getElementById("marquee_btn");
  if (flag) {
    element.classList.remove("fa-play");
    element.classList.add("fa-pause");
    flag = false;
  } else {
    element.classList.remove("fa-pause");
    element.classList.add("fa-play");
    flag = true;
  }
}