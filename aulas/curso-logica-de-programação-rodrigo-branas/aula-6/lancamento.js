class Lancamento {
    constructor(categoria, tipo, valor) {

        if (tipo !== "receita" && tipo !== "despesa") {
            // throw = lançar
            throw new Error("Lançamento Inválido: Tipo deve ser receita ou desepesa.");
        }

        if (valor <= 0) {
            throw new Error("Lançamento Inválido: O Valor deve maior que 0");
        }

        if (categoria === "") {
            throw new Error("Lançamento Inválido: A Categoria é obrigatória");
        }
        this.categoria = categoria;
        this.tipo = tipo;
        this.valor = valor;
    }
}