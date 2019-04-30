import { MySQLFactory } from './mysql/mysql_factory';
import {MySQL} from './mysql/mysql';
import express = require("express");

var cors = require('cors');
var bodyParser = require('body-parser');

const app: express.Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port: number = 33333;

app.get('/tamanho', (req,res,next) =>{

        let tamanhos : any = [];
        let tamanhosSQL : string = 'select * from tamanho'

        new MySQLFactory().getConnection().select(tamanhosSQL).subscribe(
            (data : any) => {

                data.forEach((element : any) => {
                    console.log
            
                    tamanhos.push({
                        id : element.idtamanhos,
                        name : element.name,
                        quantidade_sabores : element.quantidade_sabores
                    })
                });
                res.send(tamanhos)
            },

            (error : any) =>{
                console.log(error);
                res.send(error);
            }
        );
});

app.get('/sabor/:idsabor', (req,res,next) =>{

        let sabor : any = [];
        let saboresSQL : string = 'select * from sabor where tamanho_idtamanho = \''+ req.params.idsabor + '\''
        console.log(saboresSQL);

    
        new MySQLFactory().getConnection().select(saboresSQL).subscribe(
            (data : any) => {

                data.forEach((element : any) => {
                    console.log
                    
                    sabor.push({
                        sabor : element.sabor,
                        preco : element.preco
                    })
                });

                res.send(sabor)
            },

            (error : any) =>{
                console.log(error);
                res.send(error);
            }
        );
});


app.post('/cadastrosabor', (req,res,next)=>{

    let cadastreSabor : string ='insert into sabores(sabor,preco,tamanhos_idTamanhos) values(\'' + req.body.sabor + '\' ,\'' + req.body.preco +'\' ,\'' + req.body.tamanhos_idTamanhos + '\')'
                                                                                         
    console.log(cadastreSabor);
    new MySQLFactory().getConnection().insert(cadastreSabor).subscribe(
        (data : any) => {
            res.send({msg : "Usuário criado com sucesso"});
            return;
        },
        (error : any) =>{
            res.send(error);
        }
    );
}); 

app.get('/cidade', (req,res,next)=>{
    let cidade : any = [];
    let cidadeSQL : string = 'select * from cidade'

    new MySQLFactory().getConnection().select(cidadeSQL).subscribe(
        (data : any) => {

            data.forEach((element : any) => {
                console.log
                
                cidade.push({
                    id : element.idcidade,
                    name : element.name,
                })
            });

            res.send(cidade)
        },

        (error : any) =>{
            console.log(error);
            res.send(error);
        }
    );
});

app.get('/bairro/:idcidades', (req,res,next)=>{
    let bairro : any = [];
    let bairroSQL : string = 'select * from bairro where cidade_idcidade = \''+ req.params.idcidades + '\''
    console.log(bairroSQL);

    new MySQLFactory().getConnection().select(bairroSQL).subscribe(
        (data : any) => {

            data.forEach((element : any) => {
                console.log
                
                bairro.push({
                    name : element.name,
                    value : element.value
                })
            });

            res.send(bairro)
        },

        (error : any) =>{
            console.log(error);
            res.send(error);
        }
    );
});

app.post('/login', (req,res,next) =>{ // where login.usuario                                 // and login
    let generateSQL : string = 'select * from usuario where usuario.userName = \'' + req.body.userName + '\' and usuario.password = \'' + req.body.password + '\''

    new MySQLFactory().getConnection().select(generateSQL).subscribe(
        (data : any) => {
            if (!data.length || data.length != 1){
                res.status(401).send('Conta invalida!');
                return;
            }
            
            res.send({
                userName : req.body.userName,
                password : req.body.password
            });
        },
        
        (error : any) =>{
            console.log(error);
            res.send(error);
        }
    );
})

app.post('/cadastro', (req,res,next)=>{

    let cadastro : string ='insert into usuario(userName,password) values(\'' + req.body.newUser + '\' ,\'' +req.body.newPass +'\' )'

    console.log(cadastro);
    new MySQLFactory().getConnection().insert(cadastro).subscribe(
        (data : any) => {
            res.send({msg : "Usuário criado com sucesso!"});
            return;
        },
        (error : any) =>{
            res.send(error);
        }
    );
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
})
