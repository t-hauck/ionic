"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var vphttp_1 = require("./http/vphttp");
var Delivery = /** @class */ (function () {
    function Delivery() {
        this.dadosPedido = null;
        this.dadosEntrega = null;
    }
    Delivery.prototype.fazerPedido = function () {
        this.perguntarDadosPedido();
    };
    Delivery.prototype.perguntarDadosPedido = function () {
        var _this = this;
        inquirer_1.prompt([
            {
                name: 'delivery',
                type: 'list',
                message: 'Deseja que seu pedido seja entregue?',
                choices: ['Sim', 'Não']
            }
        ]).then(function (answers) {
            _this.dadosPedido = answers;
            if (answers.delivery === 'Sim') {
                _this.perguntarDadosEntrega();
            }
            else {
                _this.imprimirRelatorio();
            }
        });
    };
    Delivery.prototype.perguntarDadosEntrega = function () {
        var _this = this;
        inquirer_1.prompt([
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
        ]).then(function (entrega) {
            _this.dadosEntrega = entrega;
            _this.imprimirRelatorio();
            //    this.relatorio();
        });
    };
    //Imprimir dados da entrega
    Delivery.prototype.imprimirRelatorio = function () {
        console.log('\nDados do Pedido:' +
            ("\nNome: " + this.dadosPedido.nome) +
            ("\nTelefone: " + this.dadosPedido.telefone) +
            ("\nTamanho: " + this.dadosPedido.tamanho) +
            ("\nSabor: " + this.dadosPedido.sabor) +
            ("\nQuantidade: " + this.dadosPedido.quantidade) +
            ("\nEntregar: " + this.dadosPedido.entrega));
        if (this.dadosEntrega != null) {
            console.log('\nDados de Entrega:' +
                ("\nCidade: " + this.dadosEntrega.cidade) +
                ("\nBairro: " + this.dadosEntrega.bairro) +
                ("\nRua: " + this.dadosEntrega.rua + " - n\u00BA " + this.dadosEntrega.num) +
                ("\nComplemento: " + this.dadosEntrega.comp));
        }
    };
    Delivery.prototype.getSabores = function () {
        new vphttp_1.VpHttp('http://5c649b61c969210014a32eb6.mockapi.io/sabor').get().subscribe(
        // http://5c64a0b5c969210014a32ed3.mockapi.io/sabor -> hauck
        function (data) {
            console.log('Dados', data);
        }, function (error) {
            console.log(error);
        });
    };
    return Delivery;
}());
exports.Delivery = Delivery;
;
