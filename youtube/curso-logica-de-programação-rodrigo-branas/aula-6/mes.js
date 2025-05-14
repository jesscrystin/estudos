class Mes {
    constructor(nome, saldoInicial) {
        if (nome === "") throw new Error("Mês inválido: O nome é obrigatório");

        this.nome = nome;
        this.saldoInicial = saldoInicial;
        this.lancamentos = [];
        this.totalizadorDoMes = {
            saldo: 0, juros: 0, saldoInicial, rendimentos: 0, receitas: 0, despesas: 0, distribuicaoDeDespesas: []
        }
    }
    adicionarLancamento(lancamento) {
        this.lancamentos.push(lancamento);
    }

    calcularJuros(valor) {
        const juros = arredondar(valor * 0.1);
        return juros;
    }

    calcularRendimentos(valor) {
        const rendimentos = arredondar(valor * 0.005);
        return rendimentos;
    }

    distribuirDespesas() {
        const distribuicaoDeDespesas = []
        for (const lancamento of this.lancamentos) {
            if (lancamento.tipo === "despesa") {
                const percentual = arredondar((lancamento.valor / this.totalizadorDoMes.despesas) * 100);
                distribuicaoDeDespesas.push({ categoria: lancamento.categoria, percentual });
            }
        }

        return distribuicaoDeDespesas
    }


    apurarJuros() {
        if (this.totalizadorDoMes.saldo < 0) {
            this.totalizadorDoMes.juros = this.calcularJuros(this.totalizadorDoMes.saldo);
            this.totalizadorDoMes.saldo = arredondar(this.totalizadorDoMes.saldo + this.totalizadorDoMes.juros);
        }
    }

    apurarRendimento() {
        if (this.totalizadorDoMes.saldo < 0) {
            this.totalizadorDoMes.rendimentos = this.calcularRendimentos(this.totalizadorDoMes.saldo);
            this.totalizadorDoMes.saldo = arredondar(this.totalizadorDoMes.saldo + this.totalizadorDoMes.rendimentos);
        }
    }

    calcularSaldo() {

        this.totalizadorDoMes.saldo = this.saldoInicial;

        // para(for) cada item(lancamento) do(of) array/vetor(lancamentos)
        for (const lancamento of this.lancamentos) {
            if (lancamento.tipo === "receita") {
                this.totalizadorDoMes.saldo += lancamento.valor;
                this.totalizadorDoMes.receitas += lancamento.valor;
            } else {
                this.totalizadorDoMes.saldo -= lancamento.valor;
                this.totalizadorDoMes.despesas += lancamento.valor;
            }
        }

        this.totalizadorDoMes.distribuicaoDeDespesas = this.distribuirDespesas();
    }
}