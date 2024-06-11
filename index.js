const containerEl = document.querySelector(".container");

const careers = ["YouTuber", "Web Developed", "Front End", "Conteudista","Matemática", "Docente", "Física"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
    <h1>Sou ${careers[careerIndex].slice(0, 1) === "Sou" ? "um" : "uma"} ${careers[
    careerIndex
  ].slice(0, characterIndex)}</h1>
    `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 200);
}