import Cell from "./Cell";


class AsciiEffect {
    #imageCellArray = [];
    #pixels = [];
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height, image){
        this.#ctx = ctx;
        this.#width = width;
        this.#height = height;
        this.#ctx.drawImage(image, 0, 0, this.#width, this.#height);
        this.#pixels = this.#ctx.getImageData(0, 0, this.#width, this.#height);
        console.log(this.#pixels);
    }
    #convertToSymbol(g){
        if(g> 245) return 'G';
        else if(g > 225) return 'H';
        else if(g > 200) return '&';
        else if(g > 185) return 'S';
        else if(g > 165) return '%';
        else if(g > 145) return 'W';
        else if(g > 120) return '+';
        else if(g > 100) return '=';
        else if(g > 80) return '-';
        else if(g > 60) return ':';
        else if(g > 45) return '.';
        else return ' ';

    }
    #scanImage(cellSize, color){
        this.#imageCellArray = [];
        for(let y  = 0; y < this.#pixels.height; y += cellSize){
            for(let x = 0; x < this.#pixels.width; x += cellSize){
                let posX = (x*4), posY = y*4;
                const pos = (posY*this.#pixels.width) + posX;
                if(this.#pixels.data[pos+3]>120){
                    let total = this.#pixels.data[pos]+this.#pixels.data[pos+1]+this.#pixels.data[pos+2];
                    const avgColorValue = total/3;
                    const symbol = this.#convertToSymbol(avgColorValue);
                    this.#imageCellArray.push(new Cell(x,y, symbol, color));
                }
            }
        }
        console.log(this.#imageCellArray);
    }
    #drawAscii(){
        this.#ctx.fillStyle = "#000000"
        this.#ctx.fillRect(0,0, this.#width, this.#height);
        for(let i=0;i<this.#imageCellArray.length;i++){
            this.#imageCellArray[i].draw(this.#ctx);
        }
    }
    draw(cellSize, color){
        this.#scanImage(cellSize, color);
        this.#drawAscii();
    }
}


export default AsciiEffect