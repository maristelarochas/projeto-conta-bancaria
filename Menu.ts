import readlineSync = require('readline-sync');
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';

export function main() {
    let opcao: number;

    const conta: Conta = new Conta(1, 123, 1, "Maristela", 10000);
    conta.visualizar();
    conta.sacar(10500);
    conta.visualizar();
    conta.depositar(5000);
    conta.visualizar();

    const contacorrente: ContaCorrente = new ContaCorrente(2, 122, 1, "Maria Stela", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 124, 2, "Mari", 1000, 27);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();


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
                console.log(colors.fg.magentastrong,
                             "\n\nCriar Conta\n\n", colors.reset);
                break;
            case 2:
                console.log(colors.fg.magentastrong,
                            "\n\nListar todas as contas\n\n", colors.reset);
                break;
            case 3:
                console.log(colors.fg.magentastrong,
                            "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                break;
            case 4:
                console.log(colors.fg.magentastrong,
                            "Atualizar dados da Conta\n\n", colors.reset);
                break;
            case 5:
                console.log(colors.fg.magentastrong,
                            "\n\nApagar uma Conta\n\n", colors.reset);
                break;
            
            case 6:
                console.log(colors.fg.magentastrong,
                    "\n\nSaque\n\n", colors.reset);
                break;
            
            case 7:
                console.log(colors.fg.magentastrong,
                            "\n\nDeposito\n\n", colors.reset);
                break;
            case 8:
                console.log(colors.fg.magentastrong,
                            "\n\nTransferência entre contas\n\n", colors.reset);
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