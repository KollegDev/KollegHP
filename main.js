console.log("Init");
setInterval(animateTitle, 500);

//Closes mobile menu at the beginning
document.getElementById('transMenu').classList.toggle('transform-gpu');

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

document.getElementById("hamburger-full").onclick = function toggleMenu() {
  NavToggle(document.getElementsByClassName("toggle-full"));
};


document.getElementById("ham").onclick = function() {ToggleNav()};
  function ToggleNav() {
    document.getElementById("ham").classList.toggle("is-active");
    document.getElementById('transMenu').classList.toggle('transform-gpu');
  }
