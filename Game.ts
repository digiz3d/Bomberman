import { Bomberman } from './Bomberman';
import { Enemy } from './Enemy';
import { Weapon } from './Weapon';
import { Canvas } from './Canvas';
import { Terrain } from './Terrain';

class Game {

    bomberman: Bomberman;
    enemy: Enemy;
    weapon: Weapon;
    canvas: Canvas;
    terrain: Terrain;

    constructor(canvas: any) {
        this.canvas = new Canvas(canvas);

        this.terrain = new Terrain();
        this.terrain.generateTerrain();
        this.canvas.drawTerrain(this.terrain.getTerrain());
        this.bomberman = new Bomberman(this.terrain.getRandomFreeCell(true));
        this.canvas.drawCharacter(this.bomberman.getCoords(), "blue");
        this.enemy = new Enemy(this.terrain.getRandomFreeCell(true));
        this.canvas.drawCharacter(this.enemy.getCoords(), "red");
        this.weapon = new Weapon(this.terrain.getRandomFreeCell(false));
        this.canvas.drawWeapon(this.weapon.getCoords(), "green");
    }
    theEnd(): void {
        alert("GG :)");
        document.location = document.location;
    }
    keyDownHandler(key: String) {
        let coords = this.bomberman.getCoords();
        switch (key) {
            case "ArrowUp":
                if (this.terrain.isCellWalkable({ x: coords.x, y: coords.y - 1 })) {
                    this.bomberman.setCoords({ x: coords.x, y: coords.y - 1 });
                    this.terrain.setCellWalkable({ x: coords.x, y: coords.y - 1 }, false);
                    this.terrain.setCellWalkable({ x: coords.x, y: coords.y }, true);
                }
                else if (this.bomberman.isArmed() && this.terrain.isCellEnemy({ x: coords.x, y: coords.y - 1 })) {
                    this.theEnd();
                }
                break;

            case "ArrowRight":
                if (this.terrain.isCellWalkable({ x: coords.x + 1, y: coords.y })) {
                    this.bomberman.setCoords({ x: coords.x + 1, y: coords.y });
                    this.terrain.setCellWalkable({ x: coords.x + 1, y: coords.y }, false);
                    this.terrain.setCellWalkable({ x: coords.x, y: coords.y }, true);
                }
                else if (this.bomberman.isArmed() && this.terrain.isCellEnemy({ x: coords.x + 1, y: coords.y })) {
                    this.theEnd();
                }
                break;

            case "ArrowDown":
                if (this.terrain.isCellWalkable({ x: coords.x, y: coords.y + 1 })) {
                    this.bomberman.setCoords({ x: coords.x, y: coords.y + 1 });
                    this.terrain.setCellWalkable({ x: coords.x, y: coords.y + 1 }, false);
                    this.terrain.setCellWalkable({ x: coords.x, y: coords.y }, true);
                }
                else if (this.bomberman.isArmed() && this.terrain.isCellEnemy({ x: coords.x, y: coords.y + 1 })) {
                    this.theEnd();
                }
                break;

            case "ArrowLeft":
                if (this.terrain.isCellWalkable({ x: coords.x - 1, y: coords.y })) {
                    this.bomberman.setCoords({ x: coords.x - 1, y: coords.y });
                    this.terrain.setCellWalkable({ x: coords.x - 1, y: coords.y }, false);
                    this.terrain.setCellWalkable({ x: coords.x, y: coords.y }, true);
                }
                else if (this.bomberman.isArmed() && this.terrain.isCellEnemy({ x: coords.x - 1, y: coords.y })) {
                    this.theEnd();
                }
                break;
        }
        if (this.bomberman.getCoords().x == this.weapon.getCoords().x &&
            this.bomberman.getCoords().y == this.weapon.getCoords().y) {
            this.bomberman.setArmed(true);
        }
        if (this.bomberman.isArmed() === true) {
            this.weapon.setCoords(this.bomberman.getCoords());
        }
        this.canvas.clearCanvas();
        this.canvas.drawTerrain(this.terrain.getTerrain());
        this.canvas.drawCharacter(this.bomberman.getCoords(), "blue");
        this.canvas.drawCharacter(this.enemy.getCoords(), "red");
        this.canvas.drawWeapon(this.weapon.getCoords(), "green");

    }
}

export { Game };
