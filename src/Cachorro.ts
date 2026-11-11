import Animal from "./Animal"

export default class Cachorro extends Animal {
constructor(nome: string, idade: number, tutor: string) {
super(nome, idade, tutor)
}

emitirSom(): void {
console.log("au au")
}

descreverCuidados(): void {
console.log("precisa de passeio diário")
}
}