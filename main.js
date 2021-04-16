console.log("Init");
setInterval(animateTitle, 500);


function animateTitle() {
  if (document.title == "Informatik_") {
    document.title = "Informatik";
  } else {
    document.title = "Informatik_";
  }
}


function NavToggle(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements.item(i).classList.toggle("hidden");
  }
}


document.getElementById("hamburger").onclick = function toggleMenu() {
  NavToggle(document.getElementsByClassName("toggle"));
};
document.getElementById("hamburger-full").onclick = function toggleMenu() {
  NavToggle(document.getElementsByClassName("toggle-full"));
};
