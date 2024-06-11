let btns = document.querySelectorAll(".btn");
let h2 = document.querySelectorAll("h2");
let first = true;
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (first) {
      btn.innerHTML = "X";
      console.log(btn);
      first = false;
    } else {
      btn.innerHTML = "O";
      first = true;
    }
    checkwinner();
  });
});
const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let effect = true;
let result = document.querySelector(".result");
let reload = document.querySelector(".reload");
let message = document.querySelector(".message");
reload.addEventListener("click", () =>
  btns.forEach((btn) => {
    reload.classList.add("turn");
    btn.innerHTML = "";
    result.innerHTML = "";
    if (!effect) {
      message.style.visibility = "hidden";
    }
  })
);
let checkwinner = () => {
  for (let pattern of winpattern) {
    let pos1 = btns[pattern[0]].innerText;
    let pos2 = btns[pattern[1]].innerText;
    let pos3 = btns[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        message.style.visibility = "visible";
        effect = false;
        result.innerHTML = "Player " + pos1 + " won the game";
        result.classList.add("ani");
      }
    }
  }
};
