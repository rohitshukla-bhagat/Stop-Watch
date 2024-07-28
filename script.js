let time = document.querySelector("#time");
let start = document.querySelector(".startBtn");
let stopBtn = document.querySelector(".stopBtn");
let clrtm = document.querySelector(".clrBtn");
let reset = document.querySelector(".rstBtn");
let gettime = document.querySelector(".getBtn");
let newData = document.querySelector(".extra");

let count = 0;

const timeTeller = () => {
  count++;
  time.textContent = count;
};

const deleteChilds = () => {
  while (newData.firstChild) {
    newData.removeChild(newData.firstChild);
  }
};

const timeMain = () => {
  caller = setInterval(timeTeller, 1000);
};

start.addEventListener("click", () => {
  timeMain();
});

stopBtn.addEventListener("click", () => {
  const elem = document.createElement("p");
  elem.textContent = "Time Stoped At " + count;
  elem.classList.add("newdata");
  newData.appendChild(elem);
  clearInterval(caller);
});

reset.addEventListener("click", () => {
  time.textContent = 0;
  count = 0;
  deleteChilds();
  clearInterval(caller);
});

gettime.addEventListener("click", () => {
  const elem = document.createElement("p");
  elem.textContent = "Time Get At " + count;
  elem.classList.add("newdata");
  newData.appendChild(elem);
});

clrtm.addEventListener("click", () => {
  deleteChilds();
});
