import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";
import { Scoring} from "../src/Scoring.mjs";
import { ShuffleBag } from "../src/ShuffleBag.mjs";

describe("Shuffling the bag", () => {
    let board;
    beforeEach(() => {
      board = new Board(10, 6);
    });

    it("gives tetromino out", () => {
        const shuffleBag = new ShuffleBag()
        const tetromino = shuffleBag.getTetromino()
        expect(tetromino instanceof Tetromino).to.be.true
    });
    it("second tetro is not same as the next one", () => {
        const shuffleBag = new ShuffleBag()
        const tetromino1 = shuffleBag.getTetromino()
        const tetromino2 = shuffleBag.getTetromino()

        console.log(tetromino1)
        console.log(tetromino2)
        expect(tetromino1).not.equal(tetromino2)
    });
    it("if all the tetrominoes (T,I,O,J,L,S,Z) is taken out, bag is empty", () => {
        const shuffleBag = new ShuffleBag()
        const tetromino1 = shuffleBag.getTetromino()
        const tetromino2 = shuffleBag.getTetromino()
        const tetromino3 = shuffleBag.getTetromino()
        const tetromino4 = shuffleBag.getTetromino()
        const tetromino5 = shuffleBag.getTetromino()
        const tetromino6 = shuffleBag.getTetromino()
        const tetromino7 = shuffleBag.getTetromino()


        expect(shuffleBag.getBagSize()).equal(0)
    });
    it("if bag is empty, shuffle a new on", () => {
        const shuffleBag = new ShuffleBag()
        const tetromino1 = shuffleBag.getTetromino()
        const tetromino2 = shuffleBag.getTetromino()
        const tetromino3 = shuffleBag.getTetromino()
        const tetromino4 = shuffleBag.getTetromino()
        const tetromino5 = shuffleBag.getTetromino()
        const tetromino6 = shuffleBag.getTetromino()
        const tetromino7 = shuffleBag.getTetromino()
        const tetromino8 = shuffleBag.getTetromino()
        console.log('size',shuffleBag.getBagSize())

        expect(shuffleBag.getBagSize()).equal(6)
    });
});
  