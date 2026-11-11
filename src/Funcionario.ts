export default abstract class Funcionario {
  private nome: string
  private matricula: string
  private salario: number

  constructor(nome: string, matricula: string, salario: number) {
    this.nome = nome
    this.matricula = matricula
    this.salario = salario
  }

  public getNome(): string {
    return this.nome
  }

  public setNome(nome: string): void {
    this.nome = nome
  }




  public getMatricula(): string {
    return this.matricula
  }

  public setMatricula(matricula: string): void {
    this.matricula = matricula
  }





  public getSalario(): number {
    return this.salario
  }

  public setSalario(salario: number): void {
    if (salario <= 0) {
      console.log("O salário deve ser maior que zero.")
    } else {
      this.salario = salario
    }
  }



  

  abstract calcularBonus(): number
}