class Enemy {
    coordX: number;
    coordY: number;
    constructor(freeCell: { x: number, y: number }) {
        this.coordX = freeCell.x;
        this.coordY = freeCell.y;
    }
    getCoords(): { x: number, y: number } {
        return { x: this.coordX, y: this.coordY };
    }
    setCoords(coords: { x: number, y: number }): void {
        this.coordX = coords.x;
        this.coordY = coords.y;
    }
}

export { Enemy };
