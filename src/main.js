const {TreeNode} = require('./classes/TreeNode');
const {Game} = require('./classes/Game')

!function main(){

    // Limpar tela do console
    console.clear();

    // Criar o nó raiz
    const root = new TreeNode(
        "O animal que voce pensou vive na agua?",
        new TreeNode("Tubarao"),
        new TreeNode("Macaco")
    );

    // Instanciar o jogo
    const game = new Game(root);

    // Rodar o jogo
    game.run();
    
}();
