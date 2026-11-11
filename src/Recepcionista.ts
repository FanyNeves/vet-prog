import Funcionario from "./Funcionario"

export default class Recepcionista extends Funcionario {
  private agendamentosConfirmados: number

  constructor(nome: string, matricula: string, salario: number, agendamentosConfirmados: number) {
    super(nome, matricula, salario)
    this.agendamentosConfirmados = agendamentosConfirmados
  }

  public getAgendamentosConfirmados(): number {
    return this.agendamentosConfirmados
  }

  public setAgendamentosConfirmados(agendamentosConfirmados: number): void {
    this.agendamentosConfirmados = agendamentosConfirmados
  }

  calcularBonus(): number {
    return this.agendamentosConfirmados * 15
  }
}