import { IGame } from "./game";

interface GameOptions<T extends IGame> {
  canvasWidth?: number;
  canvasHeight?: number;
  putMyCanvasHere: HTMLElement;
  game: T;
}

class GameEngine<T extends IGame> {
  #root: HTMLElement;
  #game: T;
  #canvas: HTMLCanvasElement;

  constructor(options: GameOptions<T>) {
    this.#root = options.putMyCanvasHere;
    this.#game = options.game;
    this.#canvas = document.createElement("canvas");
    this.#canvas.width = options?.canvasWidth ?? 800;
    this.#canvas.height = options?.canvasHeight ?? 450;
  }

  load(): Promise<any> {
    this.#root.appendChild(this.#canvas);
    return this.#game.load();
  }

  start() {
    this.#game.start();
  }
}

export { GameEngine };
