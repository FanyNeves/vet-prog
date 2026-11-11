"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = __importDefault(require("./Funcionario"));
class Veterinario extends Funcionario_1.default {
    consultasRealizadas;
    constructor(nome, matricula, salario, consultasRealizadas) {
        super(nome, matricula, salario);
        this.consultasRealizadas = consultasRealizadas;
    }
    getConsultasRealizadas() {
        return this.consultasRealizadas;
    }
    setConsultasRealizadas(consultasRealizadas) {
        this.consultasRealizadas = consultasRealizadas;
    }
    calcularBonus() {
        return this.consultasRealizadas * 50;
    }
}
exports.default = Veterinario;
//# sourceMappingURL=Veterinario.js.map