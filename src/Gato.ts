import Animal from "./Animal"

export default class Gato extends Animal {
  constructor(nome: string, idade: number, tutor: string) {
    super(nome, idade, tutor)
  }

  emitirSom(): void {
    console.log("miau")
  }

  descreverCuidados(): void {
    console.log("precisa de arranhador")
  }
}