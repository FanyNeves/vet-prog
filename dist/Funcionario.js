"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    nome;
    matricula;
    salario;
    constructor(nome, matricula, salario) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getMatricula() {
        return this.matricula;
    }
    setMatricula(matricula) {
        this.matricula = matricula;
    }
    getSalario() {
        return this.salario;
    }
    setSalario(salario) {
        if (salario <= 0) {
            console.log("O salário deve ser maior que zero.");
        }
        else {
            this.salario = salario;
        }
    }
}
exports.default = Funcionario;
//# sourceMappingURL=Funcionario.js.map