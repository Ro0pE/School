import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";
import { Scoring} from "../src/Scoring.mjs";

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
  
    it("Drop I's to make 2 full lines, clear 2 lines, settle board'", () => {
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
       // console.log('before')
       // let result = board.countScores()
       // console.log('test result ' , result)
        expect(board.toString()).to.equalShape(
          `..........
           ..........
           ..........
           ..........
           ........XX
           ........XX`
        );
        
       // expect(result).to.equal(1000)
      });

      xit("Drop T's to make 1 full line, clear one line, settle board", () => {
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

      describe("Counting scores", () => {
        let board;
        beforeEach(() => {
          board = new Board(10, 6);
        });
    
        xit("1 line cleared", () => {
            let scoring = new Scoring()
            let points = scoring.linesCleared(1,0)
    
            expect(points).to.equal(40)
          });
        xit("2 lines cleared", () => {
            let scoring = new Scoring()
            let points = scoring.linesCleared(2,0)
    
            expect(points).to.equal(100)
          });
        xit("3 lines cleared", () => {
            let scoring = new Scoring()
            let points = scoring.linesCleared(3,0)
    
            expect(points).to.equal(300)
          });    
        xit("4 lines cleared", () => {
            let scoring = new Scoring()
            let points = scoring.linesCleared(4,0)
    
            expect(points).to.equal(1200)
          });  
        xit("4 lines cleared, and then 2 lines cleared", () => {
            let scoring = new Scoring()
            let points = 0
             points = scoring.linesCleared(4,0)
             points = scoring.linesCleared(2,0)
            
    
            expect(points).to.equal(1300)
          });    
    
    
    });   



});   

