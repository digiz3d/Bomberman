class Canvas {
    canvas: any;
    ctx: any;
    constructor(canvas: any) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    drawBlocks(x: number, y: number, color: String): void {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * 40, y * 40, 40, 40);
        /*
        this.ctx.beginPath();
        this.ctx.moveTo(1,1);
        this.ctx.strokeStyle = "red";
        this.ctx.strokeWidth = 5;
        this.ctx.lineTo(300,300);
        this.ctx.stroke();
        */
    }

    drawCharacter(coords: { x: number, y: number }, color: String): void {
        this.ctx.beginPath();
        this.ctx.arc(coords.x * 40 + 20, coords.y * 40 + 20, 15, 0, 2 * Math.PI);
        this.ctx.closePath();
        this.ctx.fillStyle = color;
        this.ctx.fill();

    }

    drawTerrain(cells: number[][]): void {
        //cells[0][5] = 2; // 0 = colonne , 5 = ligne
        for (let i = 0; i < cells.length; i++) {
            for (let j = 0; j < cells[i].length; j++) {
                //console.log('subcell=' + i, "cell=" + j);
                if (cells[i][j] === 1) {
                    this.drawBlocks(i, j, 'black');
                }
            }
        }
    }

    drawWeapon(coords: { x: number, y: number }, color: String) {
        this.ctx.beginPath();
        this.ctx.moveTo(coords.x * 40 + 20, coords.y * 40 + 10);
        this.ctx.lineTo(coords.x * 40 + 30, coords.y * 40 + 25);
        this.ctx.lineTo(coords.x * 40 + 10, coords.y * 40 + 25);
        this.ctx.closePath();
        this.ctx.fillStyle = color;
        this.ctx.fill();

    }
}
export { Canvas };
