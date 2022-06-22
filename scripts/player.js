export class Player {
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 91.3;
        this.x = 0;
        this.y = this.game.height - this.height;
    }
    update(){

    }
    draw(context){
        context.fillstyle = 'red';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}