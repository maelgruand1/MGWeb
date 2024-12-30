const element = {
  img: document.getElementById("logo"),
  projects: document.getElementById("loadProj"),
  images: document.getElementById("loadImages"),
};
let pages = [];
pages[0] = "index.html";
pages[1] = "projects.html";
pages[2] = "codeImages.html";
var defaultVal = {
  redirection: "Redirige vers " + pages[0],
  redirection1: "Redirige vers " + pages[1],
  redirection2: "Redirige vers " + pages[2],
};
//fonction permettant la redirection vers des pages
function pageReload() {
  window.location.reload();
}

function loadProjects() {
  window.location.href = pages[1];
  console.log(defaultVal.redirection1);
  alert(defaultVal.redirection1);
}
function loadIndex() {
  window.location.href = pages[0];
  console.log(defaultVal.redirection);
  alert(defaultVal.redirection);
}
function loadImages() {
  window.location.href = pages[2];
  console.log(defaultVal.redirection2);
  alert(defaultVal.redirection2);
}
element.img.addEventListener("click", loadIndex);
element.images.addEventListener("click", loadImages);
element.projects.addEventListener("click", loadProjects);
