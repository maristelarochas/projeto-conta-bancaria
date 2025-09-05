import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {
    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }
        return null;
    }
    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            buscaConta.visualizar();
        } else
            console.log(colors.fg.red, "\nA conta numero: " + numero
                + " nao foi encontrada!", colors.reset);
    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.cyan, "\nA conta numero: " + conta.numero +
            " foi criada com sucesso!", colors.reset);
    }
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.green, "\nA conta numero: " + conta.numero +
                " foi atualizada com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nA conta numero: " + conta.numero +
                " nao foi encontrada!", colors.reset);
    }
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.green, "\nA conta numero: " + numero +
                " foi apagada com sucesso!", colors.reset);
        } else {
            console.log(colors.fg.red, "\nA conta numero: " + numero +
                " nao foi encontrada!", colors.reset);
        }
    }
    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            if (conta.sacar(valor) == true)
                console.log(colors.fg.green, "\nO saque na conta numero " + numero + " foi efetuado com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nA conta numero: " + numero + " nao foi encontrada!", colors.reset);
    }
    public depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            conta.depositar(valor);
            console.log(colors.fg.green, "\nO deposito na conta numero: " + numero + " foi efetuado com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nA conta numero: " + numero + " nao foi encontrada!", colors.reset);
    }
    public transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem != null && contaDestino != null) {
            if (contaOrigem.sacar(valor) == true) {
                contaDestino.depositar(valor);
                console.log(colors.fg.green, "\nA transferencia da conta numero: " + numeroOrigem +
                    " para a conta numero: " + numeroDestino + " foi efetuada com sucesso!", colors.reset);
            }
        } else
            console.log(colors.fg.red, "\nA conta numero: " + numeroOrigem + " e/ou conta numero: " + numeroDestino + " nao foram encontradas!",
                colors.reset);
    }
    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }
    public gerarNumero(): number {
        return ++this.numero;
    }
}