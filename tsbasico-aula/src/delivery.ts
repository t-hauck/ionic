import {prompt} from 'inquirer';
import {VpHttp} from './http/vphttp';

export class Delivery {
    private dadosPedido : any = null;
    private dadosEntrega : any = null;

    public fazerPedido(){
        this.perguntarDadosPedido();
    }

    private perguntarDadosPedido(){
        prompt(
            [
                {
                    name: 'delivery',
                    type: 'list',
                    message: 'Deseja que seu pedido seja entregue?',
                    choices : ['Sim', 'Não']
                }
            ]
        ).then(
                (answers : any) => {
                    this.dadosPedido = answers;

                    if (answers.delivery === 'Sim'){
                        this.perguntarDadosEntrega();
                    } else {
                        this.imprimirRelatorio();
                    }
                }
            );
    }

    private perguntarDadosEntrega() {
        prompt (
            [
                {
                    name: 'cidade',
                    type: 'input',
                    message: 'Cidade:'
                },
                {
                    name: 'bairro',
                    type: 'input',
                    message: 'Bairro:'
                },
                {
                    name: 'rua',
                    type: 'input',
                    message: 'Rua:'
                },
                {
                    name: 'num',
                    type: 'input',
                    message: 'Número:'
                },
                {
                    name: 'comp',
                    type: 'input',
                    message: 'Complemento:'
                }
            ]
        ).then(
            (entrega : any) => {
                this.dadosEntrega = entrega;

                this.imprimirRelatorio();
            //    this.relatorio();
            }
        )
    }

 //Imprimir dados da entrega
private imprimirRelatorio() { 
    console.log(
        '\nDados do Pedido:' +
        `\nNome: ${this.dadosPedido.nome}` +
        `\nTelefone: ${this.dadosPedido.telefone}` +
        `\nTamanho: ${this.dadosPedido.tamanho}` +
        `\nSabor: ${this.dadosPedido.sabor}` +
        `\nQuantidade: ${this.dadosPedido.quantidade}` +
        `\nEntregar: ${this.dadosPedido.entrega}`
    );

    if (this.dadosEntrega != null) {
        console.log(
            '\nDados de Entrega:' +
            `\nCidade: ${this.dadosEntrega.cidade}` +
            `\nBairro: ${this.dadosEntrega.bairro}` +
            `\nRua: ${this.dadosEntrega.rua} - nº ${this.dadosEntrega.num}` +
            `\nComplemento: ${this.dadosEntrega.comp}`);
    }
}

public getSabores(){
    new VpHttp('http://5c649b61c969210014a32eb6.mockapi.io/sabor').get().subscribe(
        // http://5c64a0b5c969210014a32ed3.mockapi.io/sabor -> hauck
        (data : any) => {
            console.log('Dados', data);
        },
        (error : any) => {
            console.log(error);
        }
    );
}
};
