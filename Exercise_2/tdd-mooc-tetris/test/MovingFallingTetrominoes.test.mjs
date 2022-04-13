
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
      xit("start from the top middle and rotate right", () => {
        board.drop(Tetromino.T_SHAPE);
        board.rotateRight()
     
    
        expect(board.toString()).to.equalShape(
          `....T.....
           ....TT....
           ....T.....
           ..........
           ..........
           ..........`
        );
      });
      it("start from the top middle and rotate left", () => {
        board.drop(Tetromino.T_SHAPE);
        board.rotateLeft()
     
    
        expect(board.toString()).to.equalShape(
          `....T.....
           ...TT.....
           ....T.....
           ..........
           ..........
           ..........`
        );
      });
      xit("start from the top middle,rotate twice right and moves down after tick", () => {
        board.drop(Tetromino.T_SHAPE);
        board.rotateRight()
        board.rotateRight()
        board.tick()
    
        expect(board.toString()).to.equalShape(
          `..........
           ..........
           ...TTT....
           ....T.....
           ..........
           ..........`
        );
      });
      xit("Start mid, rotate right twice, drop until bottom", () => {
        board.drop(Tetromino.T_SHAPE);
        board.rotateRight()
        board.rotateRight()
        board.tick()
        board.tick()
        board.tick()
        board.tick()
    
        expect(board.toString()).to.equalShape(
          `..........
           ..........
           ..........
           ..........
           ...XXX....
           ....X.....`
        );
      });
      xit("It moves down after tick", () => {
        board.drop(Tetromino.T_SHAPE);
        board.tick();
  
    
        expect(board.toString()).to.equalShape(
          `..........
           ....T.....
           ...TTT....
           ..........
           ..........
           ..........`
        );
      });
      xit("Stops when it hits bottom", () => {
        board.drop(Tetromino.T_SHAPE);
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        board.tick();
  
    
        expect(board.toString()).to.equalShape(
          `..........
           ..........
           ..........
           ..........
           ....X.....
           ...XXX....`
        );
      });

      xit("Drop another block", () => {
        board.drop(Tetromino.T_SHAPE);
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        board.drop(Tetromino.T_SHAPE);
  
    
        expect(board.toString()).to.equalShape(
          `....T.....
           ...TTT....
           ..........
           ..........
           ....X.....
           ...XXX....`
        );
      });
      xit("Drop new block, rotate right and drop it on the other block", () => {
        board.drop(Tetromino.T_SHAPE);
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        board.drop(Tetromino.T_SHAPE);
        board.rotateRight()
        board.tick();
        board.tick();
        board.tick();
 
   
  
    
        expect(board.toString()).to.equalShape(
          `..........
           ....X.....
           ....XX....
           ....X.....
           ....X.....
           ...XXX....`
        );
      });
      

      xit("Can rotate right", () => {
        board.drop(Tetromino.T_SHAPE);
        board.rotateRight(); 
        board.rotateRight();   
        expect(board.toString()).to.equalShape(
          `..........
           ...TTT....
           ....T.....
           ..........
           ..........
           ..........`
        );
      });
      xit("Can rotate right and drop", () => {
        board.rotateRight();
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        expect(board.toString()).to.equalShape(
          `..........
           ..........
           ..........
           ....X.....
           ....XX....
           ....X.....`
        );
      });

    xit("stop when they hit the bottom", () => {
        board.drop(Tetromino.T_SHAPE);
        fallToBottom(board);
        board.drop(Tetromino.T_SHAPE);
        fallToBottom(board);
        board.drop(Tetromino.T_SHAPE);
        fallToBottom(board);
    
        expect(board.toString()).to.equalShape(
         `....X.....
          ...XXX....
          ....X.....
          ...XXX....
          ....X.....
          ...XXX....`
        );
      });

      xit("Drop S-shaped block", () => {
        board.drop(Tetromino.S_SHAPE);

    
        expect(board.toString()).to.equalShape(
         `..........
          ....SS....
          ...SS.....
          ..........
          ..........
          ..........`
        );
      });
      xit("Drop S-shaped block and tick one down", () => {
        board.drop(Tetromino.S_SHAPE);
        board.tick()

    
        expect(board.toString()).to.equalShape(
         `..........
          ..........
          ....SS....
          ...SS.....
          ..........
          ..........`
        );
      });
      xit("Drop S and turn right", () => {
        board.drop(Tetromino.S_SHAPE);
        board.rotateRight()

    
        expect(board.toString()).to.equalShape(
         `...S......
          ...SS.....
          ....S.....
          ..........
          ..........
          ..........`
        );
      });
      xit("Drop S and turn right twice", () => {
        board.drop(Tetromino.S_SHAPE);
        board.rotateRight()
        board.rotateRight()
      

    
        expect(board.toString()).to.equalShape(
         `....SS....
          ...SS.....
          ..........
          ..........
          ..........
          ..........`
        );
      });
      xit("Drop S and turn right 4x", () => {
        board.drop(Tetromino.S_SHAPE);
        board.rotateRight()
        board.rotateRight()
        board.rotateRight()
        board.rotateRight()
      

    
        expect(board.toString()).to.equalShape(
            `..........
             ....SS....
             ...SS.....
             ..........
             ..........
             ..........`
           );
      });
      

    });