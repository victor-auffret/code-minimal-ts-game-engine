interface IGame {
  start(): void;
  load(): Promise<any>;
  update(): void;
}

class AbstractGame implements IGame {
  start(): void {}
  load(): Promise<any> {
    return new Promise(() => {});
  }
  update(): void {}
}

export type { IGame, AbstractGame };
