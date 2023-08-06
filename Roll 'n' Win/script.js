const btn = document.querySelector(".btn");
const cubeImage = document.querySelector(".cube-image");
const result = document.querySelector(".result");

let counter = 0;
let clicks = 0;

//refactoring
const createParagraph = (content) => {
  const p = document.createElement("p");
  p.textContent = content;
  result.append(p);
};

btn.addEventListener("click", () => {
  const randomNumber = Math.ceil(Math.random() * 6);
  cubeImage.src = "img/" + randomNumber + ".jpg";
  counter += randomNumber;

  result.textContent = "";

  createParagraph(counter);

  clicks++;

  if (clicks <= 5 && counter >= 20) {
    createParagraph("Vyhráli jste");
    btn.style.visibility = "hidden";
  } else if (clicks >= 5 && counter < 20) {
    createParagraph("Prohráli jste");
    btn.style.visibility = "hidden";
  } else if (clicks < 5 && counter < 20) {
    createParagraph("Házejte dál");
  }
});
