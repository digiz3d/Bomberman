import { Bomberman } from './Bomberman';
import { Enemy } from './Enemy';
import { Weapon } from './Weapon';
import { Canvas } from './Canvas';
import { Terrain } from './Terrain';

class Game {

    bomberman:Bomberman;
    enemy:Enemy;
    weapon:Weapon;
    canvas:Canvas;
    terrain:Terrain;

    constructor(canvas:any) {
        this.canvas = new Canvas(canvas);

        this.terrain = new Terrain();

        let cells:number[][] = this.terrain.generateTerrain();
        this.canvas.drawTerrain(cells);

        this.bomberman = new Bomberman(this.terrain.getRandomFreeCell(true));
        this.canvas.drawCharacter(this.bomberman.getCoords(), "blue");

        this.enemy = new Enemy(this.terrain.getRandomFreeCell(true));
        this.canvas.drawCharacter(this.enemy.getCoords(), "red");

        this.weapon = new Weapon(this.terrain.getRandomFreeCell(false));
        this.canvas.drawWeapon(this.weapon.getCoords(), "green");
    }
}

export { Game };
