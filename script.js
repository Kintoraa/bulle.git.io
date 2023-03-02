const body = document.querySelector("body");
const inter = document.getElementById("interface");
let counter = 0;
const count = document.querySelector("h1");
const over = document.querySelector("h3");

over.classList.add("gameover");

const bubbleGame = () => {
  const bubble = document.createElement("span");
  let size = Math.random() * 300 + 80 + "px";

  body.appendChild(bubble);
  bubble.classList.add("bubble");

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.left = Math.random() * 100 + "%";

  bubble.style.setProperty("--left", Math.random() * 100 + "%");

  bubble.addEventListener("click", () => {
    if (counter <= 9) {
      counter++;
      count.innerHTML = counter;
      bubble.remove();
    }

    if (counter > 3) count.style.color = "black";

    if (counter > 0) over.style.opacity = "0";

    if (counter === 10) {
      alert("Vous avez atteint les 10 Points ! Félicitation ! ");
      counter = 0;
      count.innerHTML = counter;
    }
  });

  setTimeout(() => {
    bubble.remove();
  }, 4000);
};

const gameOver = () => {
  inter.addEventListener("click", () => {
    if (counter > 3) {
      counter--;
      count.innerHTML = counter;
      console.log("test");
    } else if (counter > 1 && counter <= 3) {
      counter--;
      count.innerHTML = counter;
      count.style.color = "red";
    } else if (counter <= 1) {
      over.style.opacity = "0.3";
      counter--;
      count.innerHTML = counter;
      count.style.color = "red";
    }

    if (counter < 0) {
      alert("Game Over ! ");
      location.reload();
    }
  });
};

setInterval(bubbleGame, 200);
gameOver();
