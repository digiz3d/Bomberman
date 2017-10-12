class Weapon {
    coordX:number;
    coordY:number;
    constructor (freeCell:{x:number,y:number}) {
        this.coordX = freeCell.x;
        this.coordY = freeCell.y;
    }
    getCoords():{x:number,y:number} {
        return {x: this.coordX, y: this.coordY};
    }
}

export {Weapon};
