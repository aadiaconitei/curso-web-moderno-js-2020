// Classe
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome eh ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()

// Factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome eh ${nome}`)
    }
}

const p2 = criarPessoa(`Joao`)
p2.falar()