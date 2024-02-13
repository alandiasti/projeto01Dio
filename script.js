//// Projeto da DIO 
/// Classaificar um Herói 
console.log("=".repeat(50))
console.log("PROGRAMA CLASSIFICADOR DE HERÓI")
console.log("=".repeat(50))
let horoi = "Saitama"
let nivel = 2000
if (nivel <= 1000) {
    nivel = "Ferro";
} else if (nivel <= 2000) {
    nivel = "Bronze"
} else if (nivel <= 5000) {
    nivel = "Prata"
} else if (nivel <= 700) {
    nivel = "Ouro"
} else if (nivel <= 800) {
    nivel = "Platina"
} else if (nivel <= 9000) {
    nivel = "Ascendente"
} else if (nivel <= 10000) {
    nivel = "Imortal"
} else if (nivel >= 10001) {
    nivel = "Radiante"
}

console.log("=".repeat(50))
console.log("O Herói de nome: " + horoi + " está no nivel: " + nivel)
console.log("=".repeat(50))