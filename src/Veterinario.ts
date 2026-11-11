import Funcionario from "./Funcionario"

export default class Veterinario extends Funcionario {
  private consultasRealizadas: number

  constructor(nome: string, matricula: string, salario: number, consultasRealizadas: number) {
    super(nome, matricula, salario)
    this.consultasRealizadas = consultasRealizadas
  }

  public getConsultasRealizadas(): number {
    return this.consultasRealizadas
  }

  public setConsultasRealizadas(consultasRealizadas: number): void {
    this.consultasRealizadas = consultasRealizadas
  }

  calcularBonus(): number {
    return this.consultasRealizadas * 50
  }
}