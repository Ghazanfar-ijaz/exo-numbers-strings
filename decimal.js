// Un programme qui affiche sur la console, les nombres suivants en base 10 (c'est à dire en décimal)

let nombres = [0x123, 0123, 0b10011001, 0xdeadbeef, 0xea7beef, 0b1111111111111111, 0777]

for (let i = 0; i < 7; i++) {
  console.log(nombres[i].toString(10))
}
