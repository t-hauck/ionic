import {prompt} from 'inquirer';
import {Delivery} from './delivery';

export class pizza {
	public pizza(){
		prompt([
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

			 ]
            ).then(
                    (answers : any) => {
                    	new Delivery().fazerPedido();
                       // console.log(`\nOlá ${answers.name}!\n`);
                    }
                );
        }
    }
