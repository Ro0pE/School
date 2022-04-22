
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
      xit("start from the top middle, move down", () => {
        board.drop(Tetromino.T_SHAPE);
        board.moveDown()
    
        expect(board.toString()).to.equalShape(
          `..........
           ....T.....
           ...TTT....
           ..........
           ..........
           ..........`
        );
      });
      xit("start from the top middle, move down,rotate right", () => {
        board.drop(Tetromino.T_SHAPE);
        board.moveDown()
        board.rotateLeft()
        board.rotateLeft()
        board.rotateRight()
    
        expect(board.toString()).to.equalShape(
          `..........
           ....T.....
           ...TT.....
           ....T.....
           ..........
           ..........`
        );
      });
      xit("start from the top middle, move down, rotate right 2 x", () => {
        board.drop(Tetromino.T_SHAPE);
        board.moveDown()
        board.rotateRight()
        //board.moveRight()
        board.rotateRight()
    
        expect(board.toString()).to.equalShape(
          `..........
           ..........
           ....TTT...
           .....T....
           ..........
           ..........`
        );
      });
      xit("start from the top middle, go to right wall", () => {
        board.drop(Tetromino.T_SHAPE);
        board.moveRight()
        board.moveRight()
        board.moveRight()
        board.moveRight()
        board.moveDown()
        board.rotateRight()
        board.rotateLeft()
        board.rotateLeft()
        board.moveRight()
        board.rotateRight()
   
   
 
    
        expect(board.toString()).to.equalShape(
          `........T.
           .......TTT
           ..........
           ..........
           ..........
           ..........`
        );
      });
      it("Drop one, move it left until next to wall, rotate and move towards wall again then try to rotate", () => {
        board.drop(Tetromino.T_SHAPE);
        board.moveLeft()
        board.moveLeft()
        board.moveLeft()
        board.moveLeft()
        board.rotateRight()
        board.moveLeft()
        board.moveLeft()
        board.rotateLeft()

    
        expect(board.toString()).to.equalShape(
          `.T........
           TTT.......
           ..........
           ..........
           ..........
           ..........`
        );
      });
      xit("Drop one down, drop other next to it, move the other through first one", () => {
        board.drop(Tetromino.T_SHAPE);
        fallToBottom(board)
        board.drop(Tetromino.T_SHAPE);
        board.moveLeft()
        board.moveLeft()
        board.moveLeft()
        board.tick()
        board.tick()
        board.tick()
        board.moveRight()
        board.moveLeft()
        board.moveLeft()
        board.moveRight()
        board.moveRight()
        board.tick()


    
        expect(board.toStringBoardStatus()).to.equalShape(
          `..........
           ..........
           ..........
           ..X.......
           .XXXX.....
           ...XXX....`
        );
      });
      xit("start from the top middle, move down,stops when hit bottom", () => {
        board.drop(Tetromino.T_SHAPE);
        board.moveDown()
        board.moveDown()
        board.moveDown()
        board.moveDown()
        board.moveDown()
        board.moveDown()
        board.moveDown()
        board.moveDown()
    
        expect(board.toStringBoardStatus()).to.equalShape(
          `..........
           ..........
           ..........
           ..........
           ....X.....
           ...XXX....`
        );
      });
      xit("start from the top middle, move down,stops when hit other block", () => {
        board.drop(Tetromino.T_SHAPE);
        fallToBottom(board)
        board.drop(Tetromino.T_SHAPE)
        board.moveDown()
        board.moveDown()
        board.moveDown()
        board.moveDown()
    

    
        expect(board.toStringBoardStatus()).to.equalShape(
          `..........
           ..........
           ....X.....
           ...XXX....
           ....X.....
           ...XXX....`
        );
      });
      xit("Drop 1 to bottom, other on it and rotate it ", () => {
        board.drop(Tetromino.T_SHAPE);
        fallToBottom(board)
        board.drop(Tetromino.T_SHAPE)
        board.moveDown()
        board.moveDown()
        board.rotateRight()
        board.moveDown()
    
        
    

    
        expect(board.toStringBoardStatus()).to.equalShape(
          `..........
           ..........
           ....X.....
           ...XXX....
           ....X.....
           ...XXX....`
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
      xit("start from middle, move right", () => {
        board.drop(Tetromino.T_SHAPE);
        board.moveRight()
    
        expect(board.toString()).to.equalShape(
          `.....T....
           ....TTT...
           ..........
           ..........
           ..........
           ..........`
        );
      });
      xit("start from middle, move right until hit the wall", () => {
        board.drop(Tetromino.T_SHAPE);
        board.moveRight()
        board.moveRight()
        board.moveRight()
        board.moveRight()
        board.moveRight()
        board.rotateLeft()
        board.moveRight()
        board.rotateRight()
    
        expect(board.toString()).to.equalShape(
          `........T.
           .......TTT
           ..........
           ..........
           ..........
           ..........`
        );
      });
      xit("start from middle, move right until hit the wall,then drop till bottom", () => {
        board.drop(Tetromino.T_SHAPE);
        board.moveRight()
        board.moveRight()
        board.moveRight()
        board.moveRight()
        board.moveRight()
        fallToBottom(board)
    
    
        expect(board.toStringBoardStatus()).to.equalShape(
          `..........
           ..........
           ..........
           ..........
           ........X.
           .......XXX`
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
      xit("Drop 2 T:s top of each other and move 3rd T through them", () => {
        board.drop(Tetromino.T_SHAPE);
        board.moveLeft()
        board.moveLeft()
        board.moveLeft()
        fallToBottom(board)
        board.drop(Tetromino.T_SHAPE);
        board.moveLeft()
        board.moveLeft()
        board.moveLeft()
        fallToBottom(board)
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
        
   
    
        expect(board.toStringBoardStatus()).to.equalShape(
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
        fallToBottom(board)
        board.drop(Tetromino.T_SHAPE);
        board.moveRight()
        board.moveRight()
        fallToBottom(board)
        board.drop(Tetromino.T_SHAPE);
        board.tick()
        board.rotateRight()
        board.rotateRight()
        fallToBottom(board)

    
        expect(board.toStringBoardStatus()).to.equalShape(
            `..........
             ..........
             ..........
             ..........
             ..XXXXX...
             .XXXXXXX..`
           );
      });
    });
    