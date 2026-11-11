import Funcionario from "./Funcionario";
export default class Recepcionista extends Funcionario {
    private agendamentosConfirmados;
    constructor(nome: string, matricula: string, salario: number, agendamentosConfirmados: number);
    getAgendamentosConfirmados(): number;
    setAgendamentosConfirmados(agendamentosConfirmados: number): void;
    calcularBonus(): number;
}
//# sourceMappingURL=Recepcionista.d.ts.map