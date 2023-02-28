const body = document.querySelector("body");

setInterval(() => {
  const bubble = document.createElement("span");

  body.appendChild(bubble);
  bubble.classList.add("bubble");
}, 300);
