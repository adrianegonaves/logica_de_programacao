function mostarOla() {
  let name = document.getElementById("name").value;
  document.getElementById("resposta").textContent = "Olá " + name;
}

let mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", mostarOla);
