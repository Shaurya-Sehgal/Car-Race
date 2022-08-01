let position = 1;
let position2 = 20;
function moveCar1() {
  let speed = Math.random() * 10;
  let speed2 = Math.random() * 10;
  speed = (Math.floor(speed) % 3) + 1;
  speed2 = (Math.floor(speed2) % 3) + 1;
  document.getElementById(position).src =
    "https://kyimages.kyinbridges.com/why-was-the-wood-from-sequoias-not-used-in-construction-.jpg";
  document.getElementById(position2).src =
    "https://kyimages.kyinbridges.com/why-was-the-wood-from-sequoias-not-used-in-construction-.jpg";
  position = position + speed;
  position2 = position2 + speed2;
  if (position > 9) {
    location.href = "win.html";
  } else if (position2 > 28) {
    location.href = "lose.html";
  }
  document.getElementById(position).src =
    "https://static.vecteezy.com/system/resources/previews/001/193/929/large_2x/vintage-car-png.png";
  document.getElementById(position2).src =
    "https://static.vecteezy.com/system/resources/previews/001/193/929/large_2x/vintage-car-png.png";
}
