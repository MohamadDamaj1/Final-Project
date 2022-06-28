export class UI {
    constructor(game){
        this.game = game;
        this.fontsize = 30;
        this.fontFamily = 'Rubik Moonrocks'
    }
    draw(context){
        context.save();
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = 'white';
        context.shadowBlur = 1;
        context.font = this.fontSize + ' px' + this.fontFamily;
        context.textAlign = 'left';
        context.fillStyle = this.game.fontColor;
        context.fillText('score: ' + this.game.score, 20, 50);
        context.font = this.fontSize * 0.8 + ' px' + this.fontFamily;
        context.fillText('Time:' + (this.game.time * 0.001).toFixed(1), 20, 80);

        if (this.game.gameOver){
            context.textAlign = 'center';
            context.font = this.fontSize * 2 + ' px' + this.fontFamily;
            if (this.game.score > 5){
                context.fillText('Success!', this.game.width * 0.5,this.game.height * 0.5);
                context.font = this.fontSize * 0.7 + this.fontFamily;
                context.fillText('Who is the strongest warrior? You!', this.game.width * 0.5, this.game.height * 0.5 + 20);
            } else {
                 context.fillText('Failure', this.game.width * 0.5,this.game.height * 0.5);
                 context.font = this.fontSize * 0.7 + this.fontFamily;
                 context.fillText('Try again', this.game.width * 0.5, this.game.height * 0.5 + 20);
            }
           
        }
        context.restore();
    }
}