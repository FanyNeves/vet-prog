import Animal from "./Animal"

export default class Ave extends Animal {
  constructor(nome: string, idade: number, tutor: string) {
    super(nome, idade, tutor)
  }

  emitirSom(): void {
    console.log("canta")
  }

  descreverCuidados(): void {
    console.log("precisa de gaiola")
  }
}