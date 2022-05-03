import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";
import { Scoring} from "../src/Scoring.mjs";
/*
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
  
    xit("Drop I's to make 2 full lines, clear 2 lines, settle board'", () => {
        board.drop();
        board.moveLeft()
        board.moveLeft()
        board.moveLeft()
        fallToBottom(board)
        board.drop();
        board.moveLeft()
        board.moveLeft()
        board.moveLeft()
        fallToBottom(board)
        board.drop();
        board.moveRight()
        fallToBottom(board)
        board.drop();
        board.moveRight()
        fallToBottom(board)
        board.drop();
        board.rotateRight()
        board.moveRight()
        board.moveRight()
        board.moveRight()
        board.moveRight()
        fallToBottom(board)
        board.drop();
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

      xit("Drop T's to make 1 full line, clear one line, settle board", () => {
        board.drop();
        fallToBottom(board)
        board.drop();
        board.moveLeft()
        board.moveLeft()
        board.moveLeft()
        fallToBottom(board)
        board.drop();
        board.moveRight()
        board.moveRight()
        board.moveRight()
        fallToBottom(board)
        board.drop();
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

        it("Drop I", () => {
            board.drop()
            expect(board.toString()).to.equalShape(
                `..........
                 ...IIII...
                 ..........
                 ..........
                 ..........
                 ..........`
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
        it("4 lines cleared, and then 3 lines cleared, level 4", () => {
        let scoring = new Scoring()
        let points = 0
            points = scoring.linesCleared(4,4)
            points = scoring.linesCleared(3,4)
        

        expect(points).to.equal(7500)
        });  
        it("4 lines cleared, and then 4 lines cleared, level 9", () => {
        let scoring = new Scoring()
        let points = 0
            points = scoring.linesCleared(4,9)
            points = scoring.linesCleared(4,9)
        

        expect(points).to.equal(24000)
        });        
    
    
    });   



});   */

