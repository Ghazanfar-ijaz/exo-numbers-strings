let auteur = `Gustave Flaubert`
let livre = `Salammbô`
let msg = `C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar.`

console.log(`Cet extrait est écrit par ${auteur} dans son livre ${livre}. Cet extrait contient ${msg.length} caractères.`)

for (let i = 0; i < msg.length; ++i) {
  console.log(`Le caractère ${msg[i]} est à l'index ${i}`)
}