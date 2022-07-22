document.getElementById("tab_1").onclick = function () {
  document.getElementById("txt_1").className = "visible";
  document.getElementById("tab_1").classList.toggle("border_bottom_button");
  document.getElementById("tab_2").classList.remove("border_bottom_button");
  document.getElementById("txt_2").className = "unvisible";
};

document.getElementById("tab_2").onclick = function () {
  document.getElementById("txt_1").className = "unvisible";
  document.getElementById("tab_2").classList.toggle("border_bottom_button");
  document.getElementById("tab_1").classList.remove("border_bottom_button");
  document.getElementById("txt_2").className = "visible";
};
