import Cachorro from "./Cachorro"
import Gato from "./Gato"
import Ave from "./Ave"
import Veterinario from "./Veterinario"
import Recepcionista from "./Recepcionista"


let c1 = new Cachorro("Rex", 3, "Ana")
let g1 = new Gato("Mingau", 2, "Dori")
let a1 = new Ave("Louro", 5, "Lala")


let v1 = new Veterinario("Dr. Souza", "vet1", 4500, 2)
let r1 = new Recepcionista("Laura", "rec1", 2200, 3)



console.log(c1);

console.log("Faz:")
c1.emitirSom()
console.log("Cuidados:")
c1.descreverCuidados()


console.log(g1)
console.log("Faz:")
g1.emitirSom()
console.log("Cuidados:")
g1.descreverCuidados()



console.log(a1)
console.log("Faz:")
a1.emitirSom()
console.log("Cuidados:")
a1.descreverCuidados()



console.log(v1)
console.log("Bônus")
v1.calcularBonus()

console.log(r1)
console.log("Bônus")
r1.calcularBonus()  
