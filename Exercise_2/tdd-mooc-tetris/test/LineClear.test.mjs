import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

function fallToBottom(board) {
    for (let i = 0; i < 10; i++) {
      board.tick();
    }
  }

  describe("Clearing lines", () => {
    let board;
    beforeEach(() => {
      board = new Board(10, 6);
    });
  
    xit("Drop I's to make 2 full lines, delete lines, settle board'", () => {
        board.drop(Tetromino.I_SHAPE);
        board.moveLeft()
        board.moveLeft()
        board.moveLeft()
        fallToBottom(board)
        board.drop(Tetromino.I_SHAPE);
        board.moveLeft()
        board.moveLeft()
        board.moveLeft()
        fallToBottom(board)
        board.drop(Tetromino.I_SHAPE);
        board.moveRight()
        fallToBottom(board)
        board.drop(Tetromino.I_SHAPE);
        board.moveRight()
        fallToBottom(board)
        board.drop(Tetromino.I_SHAPE);
        board.rotateRight()
        board.moveRight()
        board.moveRight()
        board.moveRight()
        board.moveRight()
        fallToBottom(board)
        board.drop(Tetromino.I_SHAPE);
        board.rotateRight()
        board.moveRight()
        board.moveRight()
        board.moveRight()
        board.tick()
        board.tick()
        board.tick()
 
        expect(board.toString()).to.equalShape(
          `..........
           ..........
           ..........
           ..........
           ........XX
           ........XX`
        );
      });

      it("Drop T's, clear one line, settle board", () => {
        board.drop(Tetromino.T_SHAPE);
        fallToBottom(board)
        board.drop(Tetromino.T_SHAPE);
        board.moveLeft()
        board.moveLeft()
        board.moveLeft()
        fallToBottom(board)
        board.drop(Tetromino.T_SHAPE);
        board.moveRight()
        board.moveRight()
        board.moveRight()
        fallToBottom(board)
        board.drop(Tetromino.T_SHAPE);
        board.moveRight()
        board.moveRight()
        board.moveRight()
        board.moveRight()
        board.rotateRight()
        board.moveRight()
        board.tick()
        board.tick()
        board.tick()
    
        expect(board.toString()).to.equalShape(
          `..........
           ..........
           ..........
           .........X
           ........XX
           .X..X..X..`
        );
      });



});   

