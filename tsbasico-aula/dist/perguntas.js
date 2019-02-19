"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var delivery_1 = require("./delivery");
var pizza = /** @class */ (function () {
    function pizza() {
    }
    pizza.prototype.pizza = function () {
        inquirer_1.prompt([
            {
                name: 'sabor',
                type: 'list',
                message: 'Olá, qual sabor de pizza você deseja?',
                choices: ['Portuguesa', '4 Queijos', 'Mussarela', 'Milho com Cheddar', 'Frango com Cheddar'],
                default: '1',
            },
            {
                name: 'quantidade',
                type: 'input ',
                message: 'Quantas pizzas?',
                default: '1',
            },
            {
                name: 'tamanho',
                type: 'list',
                message: 'Qual será o tamanho da pizza?',
                choices: ['Pequena', 'Média', 'Grande', 'Extra', 'Gigante'],
                default: '1',
            },
        ]).then(function (answers) {
            new delivery_1.Delivery().fazerPedido();
            // console.log(`\nOlá ${answers.name}!\n`);
        });
    };
    return pizza;
}());
exports.pizza = pizza;
