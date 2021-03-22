console.log("Init");

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

