"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
/*
export class Perguntas
    public Perguntas(){
        prompt(
                [
                    {
                        name: 'name',
                        type: 'input',
                        message: 'Qual o seu nome',
                    }
                ]
            ).then(
                    (answers : any) => {
                        console.log(`\nOlá ${answers.name}!\n`);
                    }
                );
    }
*/
var pizza = /** @class */ (function () {
    function pizza() {
    }
    pizza.prototype.pizza = function () {
        inquirer_1.prompt([
            {
                name: 'sabor',
                type: 'input',
                message: 'Olá, qual sabor de pizza você deseja? ~Escolha somente um!',
                choices: ['Portuguesa', '4 Queijos', 'Mussarela', 'Milho com Cheddar', 'Frango com Cheddar'],
                default: '0',
            },
            {
                name: 'quantidade',
                type: 'input',
                message: 'Quantas pizzas?',
                choices: ['1', '2', '3', '4', '5'],
                default: '0',
            },
            {
                name: 'tamanho',
                type: 'input',
                message: 'Qual será o tamanho da pizza?',
                choices: ['Pequena', 'Média', 'Grande', 'Extra', 'Gigante'],
                default: '0',
            },
            {
                name: 'delivery',
                type: 'input',
                message: 'Deseja que entregamos sua pizza para você?',
                choices: ['Sim', 'Não'],
                default: '0',
            }
        ]).then(function (answers) {
            console.log("\nOl\u00E1 " + answers.name + "!\n");
        });
    };
    return pizza;
}());
exports.pizza = pizza;
