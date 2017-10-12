enum TYPE_ENTITY {
    NOTHING = 0,
    BLOCK = 1,
    CHARACTER = 2,
    WEAPON = 3
}

class Terrain {
    cells = [];
    constructor() {
        for (let i = 0; i < 10; i++) {
            this.cells[i] = [];
            for (let j = 0; j < 10; j++) {
                this.cells[i][j] = TYPE_ENTITY.NOTHING; // 0 = nothing in the cell
            }
        }
    }

    generateTerrain(): number[][] {
        for (let i = 0; i < 30; i++) {
            let coordX = Math.floor(Math.random() * 10);
            let coordY = Math.floor(Math.random() * 10);
            //console.log(coordX, coordY);
            this.cells[coordX][coordY] = TYPE_ENTITY.BLOCK;
        }
        return this.cells;
    }

    getTerrain() {
        return this.cells;
    }

    getRandomFreeCell(character: boolean): { x: number, y: number } {
        let coordX;
        let coordY;
        do {
            coordX = Math.floor(Math.random() * 10);
            coordY = Math.floor(Math.random() * 10);
        } while (this.cells[coordX][coordY] !== TYPE_ENTITY.NOTHING);

        this.cells[coordX][coordY] = (character) ? TYPE_ENTITY.CHARACTER : TYPE_ENTITY.WEAPON;

        return { x: coordX, y: coordY };
    }

    isCellWalkable(coords: { x: number, y: number }): boolean {
        return ((this.cells[coords.x][coords.y] === TYPE_ENTITY.NOTHING) || (this.cells[coords.x][coords.y]=== TYPE_ENTITY.WEAPON)) ? true : false;
    }

    isCellEnemy(coords: { x: number, y: number }): boolean {
        return (this.cells[coords.x][coords.y]=== TYPE_ENTITY.CHARACTER) ? true : false;
    }

    setCellWalkable(coords: { x: number, y: number }, walkable:boolean): void {
        this.cells[coords.x][coords.y] = (walkable) ? TYPE_ENTITY.NOTHING : TYPE_ENTITY.CHARACTER;
    }
}

export { Terrain };
