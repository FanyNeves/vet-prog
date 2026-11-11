import Funcionario from "./Funcionario";
export default class Veterinario extends Funcionario {
    private consultasRealizadas;
    constructor(nome: string, matricula: string, salario: number, consultasRealizadas: number);
    getConsultasRealizadas(): number;
    setConsultasRealizadas(consultasRealizadas: number): void;
    calcularBonus(): number;
}
//# sourceMappingURL=Veterinario.d.ts.map