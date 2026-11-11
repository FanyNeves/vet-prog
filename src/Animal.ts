
export default abstract class Animal {
    private nome: string
    private idade: number
    private tutor: string

    constructor(nome: string, idade: number, tutor: string) { 
        this.nome = nome
        this.idade = idade
        this.tutor = tutor

        } 
        public getNome(): string { 
            return this.nome 
        }
         public setNome(nome: string): void {
             if (nome === "") { 
                console.log("O nome não pode ser vazio.") 
            } else { this.nome = nome

            } 
        }
public getIdade(): number { 
    return this.idade
 } 
 public setIdade(idade: number): void { 
    if (idade < 0) { 
        console.log("A idade não pode ser menor que zero.")
    } else { 
        this.idade = idade
    } 
} 
        public getTutor(): string { 
            return this.tutor
         } 
         public setTutor(tutor: string): void { 
            this.tutor = tutor 
        } 
        abstract emitirSom(): void
        abstract descreverCuidados(): void 
    
    }
