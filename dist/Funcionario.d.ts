export default abstract class Funcionario {
    private nome;
    private matricula;
    private salario;
    constructor(nome: string, matricula: string, salario: number);
    getNome(): string;
    setNome(nome: string): void;
    getMatricula(): string;
    setMatricula(matricula: string): void;
    getSalario(): number;
    setSalario(salario: number): void;
    abstract calcularBonus(): number;
}
//# sourceMappingURL=Funcionario.d.ts.map