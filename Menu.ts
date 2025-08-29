import readlineSync = require('readline-sync');
import { colors } from './src/util/Colors';

export function main() {
    let opcao: number;

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

        console.log("Entre com a opção desejada: ");
        opcao = readlineSync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.crimson, "\nBanco Nullbank - Os melhores juros (para nos)!");
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
    console.log("*****************************************************");
}

export function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlineSync.prompt();
}

main();