
class Cell{
    constructor(x,y,symbol,color){
        this.x = x;
        this.y = y;
        this.symbol  = symbol;
        this.color = color;
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillText(this.symbol, this.x, this.y);
    }
}


export default Cell