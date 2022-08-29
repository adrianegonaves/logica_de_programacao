function convertHoursToMinutes() {
  // cria referência aos elementos da página
  let inMovie = document.getElementById("inMovie");
  let inTime = document.getElementById("inTime");
  let outMovies = document.getElementById("outMovies");
  let outAnswer = document.getElementById("outAnswer");

  // obtém conteúdos dos campos de entrada
  let movies = inMovie.value;
  let time = Number(inTime.value);

  // arredonda para baixo o resultado da divisão
  let hours = Math.floor(time / 60);
  // obtém o resto da divisão entre os números
  let minutes = time % 60;

  // altera o conteúdo dos parágrafos de resposta
  outMovies.textContent = movies;
  outAnswer.textContent = hours + "hora(s) e " + minutes + "minutos";
}

// cria uma referência ao elemento btConverter (botão)
let btConvert = document.getElementById("btConvert");
// registra um evento associado ao botão, para carregar uma função
btConvert.addEventListener("click", convertHoursToMinutes);
