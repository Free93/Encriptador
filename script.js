function encriptar() {
  let textoOriginal = document.getElementById("texto-original").value;
  let textoEncriptado = "";

  textoEncriptado = textoOriginal
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  document.getElementById("texto-encriptado").value = textoEncriptado;
  ocultarImagenFondo();
}

function desencriptar() {
  let textoEncriptado = document.getElementById("texto-original").value;
  let textoDesencriptado = "";

  textoDesencriptado = textoEncriptado
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById("texto-encriptado").value = textoDesencriptado;
  ocultarImagenFondo();
}

function ocultarImagenFondo() {
  document.querySelector(".mensaje").style.backgroundImage = "none";
}

function copiarTexto() {
  let textoEncriptado = document.getElementById("texto-encriptado").value;
  let textarea = document.createElement("textarea");
  textarea.value = textoEncriptado;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}
