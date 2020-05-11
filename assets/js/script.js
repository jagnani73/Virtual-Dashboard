const pointer = document.querySelector(".pointer");
const currentSpeed = document.querySelector(".currentSpeed");

setInterval(() => {
  axios
    .get("https://speedometer-jagnani73-11052020.herokuapp.com/")
    .then((res) => {
      currentSpeed.innerHTML = `${res.data.speed}`;
      pointer.style.transform = `rotate(${res.data.speed}deg)`;
    });
}, 100);
