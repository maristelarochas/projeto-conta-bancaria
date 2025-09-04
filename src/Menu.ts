import readlineSync = require('readline-sync');
import { colors } from './util/Colors';
import { Conta } from './model/Conta';
import { ContaCorrente } from './model/ContaCorrente';
import { ContaPoupanca } from './model/ContaPoupanca';
import { ContaController } from './controller/ContaController';

export function main() {
    let contas: ContaController = new ContaController();
    let opcao: number, numero: number, agencia: number, tipo: number, saldo: number, limite: number, aniversario: number;
    let titular: string;
    const tiposContas = ['Conta Corrente', 'Conta Poupanca'];

    console.log("\nCriar Contas\n");

    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "Maristela", 1000, 100.0);
    contas.cadastrar(cc1);

    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria Stela", 2000, 100.0);
    contas.cadastrar(cc2);

    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mari", 4000, 12);
    contas.cadastrar(cp1);

    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Stela", 8000, 15);
    contas.cadastrar(cp2);

    contas.listarTodas();


    while (true) {
        console.log(colors.bg.magentabright, colors.fg.whitestrong,
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                   BANCO NULLBANK                    ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
        colors.reset);

        console.log(colors.fg.magentastrong,
                    "Entre com a opção desejada: ", colors.reset);
        opcao = readlineSync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.magentastrong, "\nBanco Nullbank - Os melhores juros (para nos)!");
            sobre();
            console.log(colors.reset, "");
            stop;
        }
        
        switch (opcao) {
            case 1:
                console.log(colors.fg.magentastrong, "\n\nCriar Conta\n\n", colors.reset);
                
                console.log("Digite o numero da agencia: ");
                agencia = readlineSync.questionInt("");

                console.log("Digite o nome do titular da conta: ");
                titular = readlineSync.question("");

                console.log("\nDigite o tipo da conta: ");
                tipo = readlineSync.keyInSelect(tiposContas, "", { cancel: false }) + 1;

                console.log("\nDigite o saldo da conta: R$ ");
                saldo = readlineSync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log("Digite o limite da conta: R$ ");
                        limite = readlineSync.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                        break;
                    case 2:
                        console.log("Digite o dia do aniversario da conta poupanca: ");
                        aniversario = readlineSync.questionInt("");
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular,
                            saldo, aniversario));
                        break;
                }

                keyPress();
                break;
            
            case 2:
                console.log(colors.fg.magentastrong,
                            "\n\nListar todas as contas\n\n", colors.reset);
                contas.listarTodas();
                
                keyPress();
                break;
            case 3:
                console.log(colors.fg.magentastrong,
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                
                console.log("Digite o número da conta: ");
                numero = readlineSync.questionInt("");
                contas.procurarPorNumero(numero);

                keyPress();
                break;
            case 4:
                console.log(colors.fg.magentastrong,
                    "Atualizar dados da Conta\n\n", colors.reset);
                
                console.log("Digite o número da conta: ");
                numero = readlineSync.questionInt("");

                let conta = contas.buscarNoArray(numero);

                if (conta != null) {
                    console.log("Digite o numero da agencia: ");
                    agencia = readlineSync.questionInt("");

                    console.log("Digite o nome do titular da conta: ");
                    titular = readlineSync.question("");

                    tipo = conta.tipo;

                    console.log("\nDigite o saldo da conta: R$ ");
                    saldo = readlineSync.questionFloat("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite o limite da conta: R$ ");
                            limite = readlineSync.questionFloat("");
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                            break;
                        case 2:
                            console.log("Digite o dia do aniversario da conta poupanca: ");
                            aniversario = readlineSync.questionInt("");
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo,
                                aniversario));
                            break;
                    }
                } else {
                    console.log(colors.fg.red, "\nA conta numero: " + numero +
                        " nao foi encontrada!", colors.reset);
                }
                
                keyPress();
                break;
            case 5:
                console.log(colors.fg.magentastrong,
                    "\n\nApagar uma Conta\n\n", colors.reset);
                
                console.log("Digite o numero da conta: ");
                numero = readlineSync.questionInt("");
                contas.deletar(numero);
                
                keyPress();
                break;
            case 6:
                console.log(colors.fg.magentastrong,
                    "\n\nSaque\n\n", colors.reset);
                
                keyPress();    
                break;
            
            case 7:
                console.log(colors.fg.magentastrong,
                            "\n\nDeposito\n\n", colors.reset);
                keyPress();
                break;
            
            case 8:
                console.log(colors.fg.magentastrong,
                            "\n\nTransferência entre contas\n\n", colors.reset);
                keyPress();
                break;
            
            default:
                console.log(colors.fg.magentastrong,
                    "\nOpcao invalida!\n", colors.reset);
                keyPress();
                break;
        }
    }
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Maristela Rocha - maristela.rocha.silva@gmail.com");
    console.log("https://github.com/maristelarochas/projeto-conta-bancaria");
    console.log("Generation - Formacao de Pessoa Fullstack");
    console.log("*****************************************************");
}

export function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlineSync.prompt();
}

main();