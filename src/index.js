/*
v ou v = v | v e f = v | v xor v = f | !v = f <-negação
v ou f = v \ v e f = f \ v xor f = v \ !f = v
f ou f = f | f e f = f | f xor f = f |
*/

// o OU é representado por 2 pipes ||
// o E é representado pelos 2 &&
// podemos usar o diferente para substituir o xor

function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2; //OU
  const comprarTV50 = trabalho1 && trabalho2; //E
  //const comprarTV32 = !!(trabalho1 ^ trabalho2) //bitwise xor
  const comprarTV32 = trabalho1 != trabalho2; //xor
  const manterSaudavel = !comprarSorvete; //negação

  return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel };
}

console.log(compras(false, false));
