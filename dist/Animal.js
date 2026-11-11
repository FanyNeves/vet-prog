"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    nome;
    idade;
    tutor;
    constructor(nome, idade, tutor) {
        this.nome = nome;
        this.idade = idade;
        this.tutor = tutor;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        if (nome === "") {
            console.log("O nome não pode ser vazio.");
        }
        else {
            this.nome = nome;
        }
    }
    getIdade() {
        return this.idade;
    }
    setIdade(idade) {
        if (idade < 0) {
            console.log("A idade não pode ser menor que zero.");
        }
        else {
            this.idade = idade;
        }
    }
    getTutor() {
        return this.tutor;
    }
    setTutor(tutor) {
        this.tutor = tutor;
    }
}
exports.default = Animal;
//# sourceMappingURL=Animal.js.map