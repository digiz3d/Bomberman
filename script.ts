import { Game } from './Game';

let canvas = document.getElementById('game');
let game: Game = new Game(canvas);

document.addEventListener("keydown", function(e){
    game.keyDownHandler(e.key);
    console.log(e.key);
}, false);
