
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

describe("Moving Falling Tetrominoes", () => {
    let board;
    beforeEach(() => {
      board = new Board(10, 6);
    });
    xit("start from the top middle", () => {
        board.drop(Tetromino.T_SHAPE);
    
        expect(board.toString()).to.equalShape(
          `....T.....
           ...TTT....
           ..........
           ..........
           ..........
           ..........`
        );
      });
      xit("start mid, move left", () => {
        board.drop(Tetromino.T_SHAPE);
        board.moveLeft()
    
        expect(board.toString()).to.equalShape(
          `...T......
           ..TTT.....
           ..........
           ..........
           ..........
           ..........`
        );
      });
      xit("start mid, move left and stop to wall", () => {
        board.drop(Tetromino.T_SHAPE);
        board.moveLeft()
        board.moveLeft()
        board.moveLeft()
        board.moveLeft()
        board.moveLeft()
        board.moveLeft()
    
        expect(board.toString()).to.equalShape(
          `.T........
           TTT.......
           ..........
           ..........
           ..........
           ..........`
        );
      });
      xit("Start mid, drop 2 down, move right", () => {
        board.drop(Tetromino.T_SHAPE);
        board.tick()
        board.tick()
        board.moveRight()
    
        expect(board.toString()).to.equalShape(
          `..........
           ..........
           .....T....
           ....TTT...
           ..........
           ..........`
        );
      });
      it("Drop 2 T:s top of each other and move 3rd T through them", () => {
        board.drop(Tetromino.T_SHAPE);
        board.moveLeft()
        board.moveLeft()
        board.moveLeft()
        board.tick()
        board.tick()
        board.tick()
        board.tick()
        board.drop(Tetromino.T_SHAPE);
        board.moveLeft()
        board.moveLeft()
        board.moveLeft()
        board.tick()
        board.tick()
        board.tick()
        board.drop(Tetromino.T_SHAPE);
        board.moveRight()
        board.tick()
        board.tick()
        board.moveLeft()
        board.moveLeft()
        board.moveLeft()
        board.tick()
        board.moveLeft()
        board.tick()
        
   
    
        expect(board.toStringResult()).to.equalShape(
          `..........
           ..........
           .X........
           XXXX......
           .XXXX.....
           XXX.......`
        );
      });
      xit("Drop 3 x t, move blocks around and drop to bottom", () => {
        board.drop(Tetromino.T_SHAPE);
        board.tick()
        board.moveLeft()
        board.moveLeft()
        board.tick()
        board.tick()
        board.tick()
        board.tick()
        board.tick()
        board.drop(Tetromino.T_SHAPE);
        board.moveRight()
        board.moveRight()
        board.tick()
        board.tick()
        board.tick()
        board.tick()
        board.tick()
        board.drop(Tetromino.T_SHAPE);
        board.tick()
        board.rotateRight()
        board.rotateRight()
        board.tick()
        board.tick()
        board.tick()

    
        expect(board.toStringResult()).to.equalShape(
            `..........
             ..........
             ..........
             ..........
             ..XXXXX...
             .XXXXXXX..`
           );
      });
    });
    