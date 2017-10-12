enum TYPE_ENTITY {
    NOTHING = 0,
    BLOCK = 1,
    CHARACTER = 2,
    WEAPON = 3
}

class Terrain {
    cells = [];
    enum
    constructor() {
        for (let i = 0; i < 10; i++) {
            this.cells[i] = [];
            for (let j = 0; j < 10; j++) {
                this.cells[i][j] = TYPE_ENTITY.NOTHING; // 0 = nothing in the cell
            }
        }
    }

    generateTerrain():number[][] {
        for (let i = 0; i < 30 ; i++) {
            let coordX = Math.floor(Math.random() * 10);
            let coordY = Math.floor(Math.random() * 10);
            console.log(coordX, coordY);
            this.cells[coordX][coordY] = TYPE_ENTITY.BLOCK;
        }
        return this.cells;
    }

    getRandomFreeCell(character:boolean):{x:number,y:number}{
        let coordX;
        let coordY;
        do {
            coordX = Math.floor(Math.random() * 10);
            coordY = Math.floor(Math.random() * 10);
        } while(this.cells[coordX][coordY] !== TYPE_ENTITY.NOTHING);

        this.cells[coordX][coordY] = (character) ? TYPE_ENTITY.CHARACTER : TYPE_ENTITY.WEAPON;

        return {x:coordX, y:coordY};
    }
}

export { Terrain };
