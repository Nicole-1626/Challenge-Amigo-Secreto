// Código para sorteo de amigo secreto

//Declaración
const inputAmigo = document.getElementById("amigo");
let listaAmigos = [];
const listaAmigosWeb = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

//Función para agregar un amigo a la lista:
function agregarAmigo() {

// Ver que no esté vacío:
  if (inputAmigo.value === "") {
    alert("Debes ingresar nombre de un amigo");
    return;
  } else {
  listaAmigos.push(inputAmigo.value);
  console.log(listaAmigos);
  actualizarLista();
  inputAmigo.value = "";
  }

} 

//Función para actualizar la lista de amigos:
function actualizarLista() {
  listaAmigosWeb.innerHTML += `<li>${inputAmigo.value}</li>`;
}

//Función para sortear un amigo:
function sortearAmigo() {
if (listaAmigos.length < 2) {
  alert("Debes tener al menos dos amigos para sortear el juego");
  return;
} else {
const varAleatorio = Math.floor(Math.random() * listaAmigos.length);
const amigoSorteado = listaAmigos[varAleatorio];
resultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSorteado}</li>`;
}
}

//Función para reiniciar el sorteo:
function reiniciarSorteo() {
  listaAmigos = [];
  listaAmigosWeb.innerHTML = "";
  resultado.innerHTML = "";
}
