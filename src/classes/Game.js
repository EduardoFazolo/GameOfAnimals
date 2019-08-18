const {TreeNode} = require('./TreeNode');
const readLineSync = require('readline-sync');

module.exports.Game = class Game{
    /**
     * 
     * @param {TreeNode} root 
     */
    constructor(root){
        this.root = root;
        
    }

    run(){
        // Instanciar o nó para não perder a referência
        let node;

        // Mostrar instruções para o jogador
        this.showInstructions();

        // Loop para continuar jogando
        while(this.ask("Pense em um animal")){
            node = this.root;
            
            // Enquanto o nó não for nó final
            while(node.left && node.right){
                if(this.ask(node.data)){
                    node = node.left;
                }else{
                    node = node.right;
                }
            }
            
            // Quando o nó for final, tentar adivinhar o animal
            if(this.ask('Seu animal eh um ' + node.data + '?')){
                console.log("Acertei de novo!");
                readLineSync.question();
                console.clear();
            }
            else{
                // Caso o animal não esteja correto
                // aprender sobre o novo animal
                this.learn(node);
                console.clear();
            }            
        }

    }

    showInstructions(){
        console.log("Instucoes:\n")
        console.log('Use "s" ou enter para continuar')
        console.log('Use "n" para negar')
        console.log("\n\n\n");
    }

    ask(question){
        if(question){
            // Default vai garantir que um input vazio tambem seja true
            let resp = readLineSync.question(question + '\n',{defaultInput:'s'});
            return (resp[0].toLowerCase() === 's');
        }
        return false

    }

    learn(node){
            
        const guessed = node.data;

        let animal = readLineSync.question("Qual foi o animal que voce pensou?\n");

        let differential = readLineSync.question("Um(a) " + animal + " mas um(a) " + guessed + " nao.\n");

        node.data = "O animal que voce pensou " + differential;
        
        node.left = new TreeNode(animal);
        node.right = new TreeNode(guessed);
    }
}