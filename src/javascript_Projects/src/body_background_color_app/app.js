//body background color
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let x = Math.floor(Math.random() * 256); // rgb (255,0,0)
  let y = Math.floor(Math.random() * 256); // rgb (0,255,0)
  let z = Math.floor(Math.random() * 256); // rgb (0,0,255)

  let bgColor = "rgb(" + x + "," + y + "," + z + " )";
  document.body.style.background = bgColor;
});
