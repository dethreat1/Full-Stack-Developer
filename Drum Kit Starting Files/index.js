for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML)
  });
}

document.addEventListener("keydown", function (e) {
  playSound(e.key)
  buttonAnimation(e.key)
});

function playSound(key) {
  console.log(key);

  switch (key) {
    case "w":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      const kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "k":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
      break;
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey)
  activeButton.classList.add("pressed");

  setTimeout( function (){
    activeButton.classList.remove("pressed");
}, 100)};