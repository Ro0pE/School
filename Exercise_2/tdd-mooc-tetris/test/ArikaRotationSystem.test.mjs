import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

function fallToBottom(board) {
    for (let i = 0; i < 10; i++) {
      board.tick();
    }
  }
  describe("Rotating different tetrominoes", () => {
    let board;
    beforeEach(() => {
      board = new Board(10, 6);
    });
    xit("Drop S:start from the top middle", () => {
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
      it("Drop S, rotate left", () => {
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
      it("Drop S, rotate right", () => {
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
      it("Drop S, rotate right x 2, left x 1", () => {
        board.drop(Tetromino.S_SHAPE);
        board.rotateRight()
        board.rotateRight()
        board.rotateLeft()
    
        expect(board.toString()).to.equalShape(
          `...S......
           ...SS.....
           ....S.....
           ..........
           ..........
           ..........`
        );
      });
      it("Drop S, rotate right x 2", () => {
        board.drop(Tetromino.S_SHAPE);
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
    xit("Drop Z:start from the top middle", () => {
        board.drop(Tetromino.Z_SHAPE);
    
        expect(board.toString()).to.equalShape(
          `..........
           ...ZZ.....
           ....ZZ....
           ..........
           ..........
           ..........`
        );
      });
      xit("Drop Z, rotate right, left, left, right", () => {
        board.drop(Tetromino.Z_SHAPE);
        board.rotateRight()
        board.rotateLeft()
        board.rotateLeft()
        board.rotateRight()

    
        expect(board.toString()).to.equalShape(
          `..........
           ...ZZ.....
           ....ZZ....
           ..........
           ..........
           ..........`
        );
      });
      xit("Drop Z, rotate left", () => {
        board.drop(Tetromino.Z_SHAPE);
        board.rotateLeft()
    
        expect(board.toString()).to.equalShape(
          `.....Z....
           ....ZZ....
           ....Z.....
           ..........
           ..........
           ..........`
        );
      });
      xit("Drop Z, rotate right", () => {
        board.drop(Tetromino.Z_SHAPE);
        board.rotateRight()
    
        expect(board.toString()).to.equalShape(
          `.....Z....
           ....ZZ....
           ....Z.....
           ..........
           ..........
           ..........`
        );
      });
      xit("Drop Z, rotate right x 2", () => {
        board.drop(Tetromino.Z_SHAPE);
        board.rotateRight()
        board.rotateRight()

        expect(board.toString()).to.equalShape(
            `..........
             ...ZZ.....
             ....ZZ....
             ..........
             ..........
             ..........`
          );
        });
    xit("Drop J:start from the top middle", () => {
        board.drop(Tetromino.J_SHAPE);
    
        expect(board.toString()).to.equalShape(
          `..........
           ...JJJ....
           .....J....
           ..........
           ..........
           ..........`
        );
      });
      xit("Drop J, rotate right x 4", () => {
        board.drop(Tetromino.J_SHAPE);
        board.rotateRight()
        board.rotateRight()
        board.rotateRight()
        board.rotateRight()
        //board.rotateRight()
 
    
        expect(board.toString()).to.equalShape(
            `..........
             ...JJJ....
             .....J....
             ..........
             ..........
             ..........`
          );
        });
        xit("Drop J, rotate left", () => {
            board.drop(Tetromino.J_SHAPE);
            board.rotateLeft()
        
            expect(board.toString()).to.equalShape(
                `....JJ....
                 ....J.....
                 ....J.....
                 ..........
                 ..........
                 ..........`
              );
            });
        xit("Drop J, rotate left x 2", () => {
            board.drop(Tetromino.J_SHAPE);
            board.rotateLeft()
            board.rotateLeft()
        
            expect(board.toString()).to.equalShape(
                   `..........
                    ...J......
                    ...JJJ....
                    ..........
                    ..........
                    ..........`
                );
                });
        xit("Drop J, rotate left x 3", () => {
            board.drop(Tetromino.J_SHAPE);
            board.rotateLeft()
            board.rotateLeft()
            board.rotateLeft()
        
            expect(board.toString()).to.equalShape(
                    `....J.....
                    ....J.....
                    ...JJ.....
                    ..........
                    ..........
                    ..........`
                );
            });
        xit("Drop J, rotate left x 4 then 2 x right", () => {
            board.drop(Tetromino.J_SHAPE);
            board.rotateLeft()
            board.rotateLeft()
            board.rotateLeft()
            board.rotateLeft()
            board.rotateRight()
            board.rotateRight()
        
            expect(board.toString()).to.equalShape(
                   `..........
                    ...J......
                    ...JJJ....
                    ..........
                    ..........
                    ..........`
                );
            });
        xit("Drop J, rotate left x 4", () => {
            board.drop(Tetromino.J_SHAPE);
            board.rotateLeft()
            board.rotateLeft()
            board.rotateLeft()
            board.rotateLeft()
        
            expect(board.toString()).to.equalShape(
                   `..........
                    ...JJJ....
                    .....J....
                    ..........
                    ..........
                    ..........`
                );
            });    
      xit("Drop J, rotate right x 2 and move right", () => {
        board.drop(Tetromino.J_SHAPE);
        board.rotateRight()
        board.rotateRight()
        board.moveRight()
    
        expect(board.toString()).to.equalShape(
          `..........
           ....J.....
           ....JJJ...
           ..........
           ..........
           ..........`
        );
      });
      xit("Drop J, rotate right", () => {
        board.drop(Tetromino.J_SHAPE);
        board.rotateRight()
     
    
        expect(board.toString()).to.equalShape(
          `....J.....
           ....J.....
           ...JJ.....
           ..........
           ..........
           ..........`
        );
      });
    xit("Drop L:start from the top middle", () => {
        board.drop(Tetromino.L_SHAPE);
    
        expect(board.toString()).to.equalShape(
          `..........
           ...LLL....
           ...L......
           ..........
           ..........
           ..........`
        );
      });
      xit("Drop L:start from the top middle, rotate left x 3" , () => {
        board.drop(Tetromino.L_SHAPE);
        board.rotateLeft()
        board.rotateLeft()
        board.rotateLeft()
    
        expect(board.toString()).to.equalShape(
          `...LL.....
           ....L.....
           ....L.....
           ..........
           ..........
           ..........`
        );
      });
      xit("Drop L:start from the top middle, rotate left x 2, then right" , () => {
        board.drop(Tetromino.L_SHAPE);
        board.rotateLeft()
        board.rotateLeft()
        board.rotateRight()
        
    
        expect(board.toString()).to.equalShape(
          `....L.....
           ....L.....
           ....LL....
           ..........
           ..........
           ..........`
        );
      });
      xit("Drop L:start from the top middle, rotate left x 2 ", () => {
        board.drop(Tetromino.L_SHAPE);
        board.rotateLeft()
        board.rotateLeft()
        
    
        expect(board.toString()).to.equalShape(
          `..........
           .....L....
           ...LLL....
           ..........
           ..........
           ..........`
        );
      });
      xit("Drop L:start from the top middle, rotate right x 4", () => {
        board.drop(Tetromino.L_SHAPE);
        board.rotateRight()
        board.rotateRight()
        board.rotateRight()
        board.rotateRight()
    
        expect(board.toString()).to.equalShape(
          `..........
           ...LLL....
           ...L......
           ..........
           ..........
           ..........`
        );
      });
    xit("Drop T:start from the top middle", () => {
        board.drop(Tetromino.T_SHAPE);
    
        expect(board.toString()).to.equalShape(
          `..........
           ...TTT....
           ....T.....
           ..........
           ..........
           ..........`
        );
      });
      xit("Rotate T right / clockwise", () => {
        board.drop(Tetromino.T_SHAPE);
        board.rotateRight()
    
        expect(board.toString()).to.equalShape(
          `....T.....
           ...TT.....
           ....T.....
           ..........
           ..........
           ..........`
        );
      });
    xit("Rotate T right / clockwise x 2", () => {
        board.drop(Tetromino.T_SHAPE);
        board.rotateRight()
        board.rotateRight()
    
        expect(board.toString()).to.equalShape(
          `..........
           ....T.....
           ...TTT....
           ..........
           ..........
           ..........`
        );
      });
      xit("Rotate T right / clockwise x 3", () => {
        board.drop(Tetromino.T_SHAPE);
        board.rotateRight()
        board.rotateRight()
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
      xit("Rotate T right / clockwise x 4", () => {
        board.drop(Tetromino.T_SHAPE);
        board.rotateRight()
        board.rotateRight()
        board.rotateRight()
        board.rotateRight()
    
        expect(board.toString()).to.equalShape(
          `..........
           ...TTT....
           ....T.....
           ..........
           ..........
           ..........`
        );
      });
      xit("Rotate T right / clockwise x 5", () => {
        board.drop(Tetromino.T_SHAPE);
        board.rotateRight()
        board.rotateRight()
        board.rotateRight()
        board.rotateRight()
        board.rotateRight()
    
        expect(board.toString()).to.equalShape(
          `....T.....
           ...TT.....
           ....T.....
           ..........
           ..........
           ..........`
        );
      });
    xit("Rotate T left / counter-clockwise", () => {
        board.drop(Tetromino.T_SHAPE);
        board.rotateLeft()
    
        expect(board.toString()).to.equalShape(
          `....T.....
           ....TT....
           ....T.....
           ..........
           ..........
           ..........`
        );
      });
     xit("Rotate T left and then right", () => {
        board.drop(Tetromino.T_SHAPE);
        board.rotateLeft()
        board.rotateRight()
    
        expect(board.toString()).to.equalShape(
          `..........
           ...TTT....
           ....T.....
           ..........
           ..........
           ..........`
        );
      });
      xit("Rotate T left / counter-clockwise x 2", () => {
        board.drop(Tetromino.T_SHAPE);
        board.rotateLeft()
        board.rotateLeft()
    
        expect(board.toString()).to.equalShape(
          `..........
           ....T.....
           ...TTT....
           ..........
           ..........
           ..........`
        );
      });
      xit("Rotate T left / counter-clockwise x 3", () => {
        board.drop(Tetromino.T_SHAPE);
        board.rotateLeft()
        board.rotateLeft()
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
      xit("Rotate T left / counter-clockwise x 4", () => {
        board.drop(Tetromino.T_SHAPE);
        board.rotateLeft()
        board.rotateLeft()
        board.rotateLeft()
        board.rotateLeft()
    
        expect(board.toString()).to.equalShape(
          `..........
           ...TTT....
           ....T.....
           ..........
           ..........
           ..........`
        );
      });
      xit("Rotate T left,right, right and left", () => {
        board.drop(Tetromino.T_SHAPE);
        board.rotateLeft()
        board.rotateRight()
        board.rotateRight()
        board.rotateLeft()
    
        expect(board.toString()).to.equalShape(
          `..........
           ...TTT....
           ....T.....
           ..........
           ..........
           ..........`
        );
      });
      xit("Rotate T left,right, right, right and left", () => {
        board.drop(Tetromino.T_SHAPE);
        board.rotateLeft()
        board.rotateRight()
        board.rotateRight()
        board.rotateRight()
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
      xit("Rotate O left / counter-clockwise x 2", () => {
        board.drop(Tetromino.O_SHAPE);
        board.rotateLeft()
        board.rotateLeft()
    
        expect(board.toString()).to.equalShape(
          `....OO....
           ....OO....
           ..........
           ..........
           ..........
           ..........`
        );
      });
      xit("Rotate O right / clockwise x 1", () => {
        board.drop(Tetromino.O_SHAPE);
        board.rotateRight()
        
    
        expect(board.toString()).to.equalShape(
          `....OO....
           ....OO....
           ..........
           ..........
           ..........
           ..........`
        );
      });
      xit("Rotate I right / clockwise" , () => {
        board.drop(Tetromino.I_SHAPE);
        board.rotateRight()

    
        expect(board.toString()).to.equalShape(
          `.....I....
           .....I....
           .....I....
           .....I....
           ..........
           ..........`
        );
      });
      xit("Rotate I right / clockwise x 2" , () => {
        board.drop(Tetromino.I_SHAPE);
        board.rotateRight()
        board.rotateRight()

    
        expect(board.toString()).to.equalShape(
          `..........
           ...IIII...
           ..........
           ..........
           ..........
           ..........`
        );
      });
      xit("Rotate I left" , () => {
        board.drop(Tetromino.I_SHAPE);
        board.rotateLeft()

    
        expect(board.toString()).to.equalShape(
          `.....I....
           .....I....
           .....I....
           .....I....
           ..........
           ..........`
        );
      });
      xit("Rotate I left and right" , () => {
        board.drop(Tetromino.I_SHAPE);
        board.rotateLeft()
        board.rotateRight()

    
        expect(board.toString()).to.equalShape(
          `..........
           ...IIII...
           ..........
           ..........
           ..........
           ..........`
        );
      });

});
describe("Fall tetrominoes", () => {
    let board;
    beforeEach(() => {
      board = new Board(10, 6);
    });
    xit("Drop T, After tick, it moves one down", () => {
        board.drop(Tetromino.T_SHAPE);
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
      xit("Drop T,After hit the ground, stop moving", () => {
        board.drop(Tetromino.T_SHAPE);
        fallToBottom(board)
    
        expect(board.toString()).to.equalShape(
          `..........
           ..........
           ..........
           ..........
           ...TTT....
           ....T.....`
        );
      });
      xit("Drop T, rotate right, fall to the ground", () => {
        board.drop(Tetromino.T_SHAPE);
        board.rotateRight()
        fallToBottom(board)
    
        expect(board.toString()).to.equalShape(
          `..........
           ..........
           ..........
           ....T.....
           ...TT.....
           ....T.....`
        );
      });
      xit("Drop O" , () => {
        board.drop(Tetromino.O_SHAPE);

    
        expect(board.toString()).to.equalShape(
          `....OO....
           ....OO....
           ..........
           ..........
           ..........
           ..........`
        );
      });
      xit("Drop O. fall to bottom" , () => {
        board.drop(Tetromino.O_SHAPE);
        fallToBottom(board)

    
        expect(board.toString()).to.equalShape(
          `..........
           ..........
           ..........
           ..........
           ....OO....
           ....OO....`
        );
      });
      xit("Drop I" , () => {
        board.drop(Tetromino.I_SHAPE);

    
        expect(board.toString()).to.equalShape(
          `..........
           ...IIII...
           ..........
           ..........
           ..........
           ..........`
        );
      });
      xit("Drop I, fall to bottom" , () => {
        board.drop(Tetromino.I_SHAPE);
        fallToBottom(board)

    
        expect(board.toString()).to.equalShape(
          `..........
           ..........
           ..........
           ..........
           ..........
           ...IIII...`
        );
      });

    });
    describe("Move tetrominoes left and right", () => {
        let board;
        beforeEach(() => {
          board = new Board(10, 6);
        });
        xit("Drop T, move left" , () => {
            board.drop(Tetromino.T_SHAPE);
            board.moveLeft()
    
        
            expect(board.toString()).to.equalShape(
              `..........
               ..TTT.....
               ...T......
               ..........
               ..........
               ..........`
            );
          });
          xit("Drop T, move left to the wall, and stop" , () => {
            board.drop(Tetromino.T_SHAPE);
            board.moveLeft()
            board.moveLeft()
            board.moveLeft()
            board.moveLeft()
    
        
            expect(board.toString()).to.equalShape(
              `..........
               TTT.......
               .T........
               ..........
               ..........
               ..........`
            );
          });
          xit("Drop T, move right to the wall, and stop" , () => {
            board.drop(Tetromino.T_SHAPE);
            board.moveRight()
            board.moveRight()
            board.moveRight()
            board.moveRight()
            board.moveRight()
            board.moveRight()
    
        
            expect(board.toString()).to.equalShape(
              `..........
               .......TTT
               ........T.
               ..........
               ..........
               ..........`
            );
          });
          xit("Drop T, move right to the wall, and rotate" , () => {
            board.drop(Tetromino.T_SHAPE);
            board.moveRight()
            board.moveRight()
            board.moveRight()
            board.moveRight()
            board.moveRight()
            board.rotateRight()
            board.moveRight()
            board.rotateLeft()
       
    
        
            expect(board.toString()).to.equalShape(
              `..........
               .......TTT
               ........T.
               ..........
               ..........
               ..........`
            );
          });
          xit("Drop T, fall down, *check board status* " , () => {
            board.drop(Tetromino.T_SHAPE);
            fallToBottom(board)
       
    
        
            expect(board.toStringBoardStatus()).to.equalShape(
              `..........
               ..........
               ..........
               ..........
               ...XXX....
               ....X.....`
            );
          });
          xit("Drop T, fall down, *check board status* " , () => {
            board.drop(Tetromino.T_SHAPE);
            fallToBottom(board)
            board.drop(Tetromino.T_SHAPE);
            board.tick()
            board.tick()
            board.tick()
       
    
        
            expect(board.toStringBoardStatus()).to.equalShape(
              `..........
               ..........
               ...XXX....
               ....X.....
               ...XXX....
               ....X.....`
            );
          });
          xit("Drop T, fall down, drop other T, try to collide *check board status* " , () => {
            board.drop(Tetromino.T_SHAPE);
            board.moveLeft()
            board.moveLeft()
            fallToBottom(board)
            board.drop(Tetromino.T_SHAPE);
            board.moveRight()
            board.moveRight()
            board.tick()
            board.tick()
            board.tick()
            board.moveLeft()
            board.moveLeft()
            board.tick()
       
    
        
            expect(board.toStringBoardStatus()).to.equalShape(
              `..........
               ..........
               ..........
               ..........
               .XXXXXX...
               ..X..X....`
            );
          });
    });   
    

/*
  describe("Dropping different tetrominoes", () => {
    let board;
    beforeEach(() => {
      board = new Board(10, 6);
    });
    xit("Drop T:start from the top middle", () => {
        board.drop(Tetromino.T_SHAPE);
    
        expect(board.toString()).to.equalShape(
          `..........
           ...TTT....
           ....T.....
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
           ..........
           ...TTT....
           ....T.....
           ..........
           ..........`
        );
      });
      xit("Drop I:start from the top middle", () => {
        board.drop(Tetromino.I_SHAPE);
    
        expect(board.toString()).to.equalShape(
          `..........
           ...IIII...
           ..........
           ..........
           ..........
           ..........`
        );
      });
      xit("start from the top middle, move down", () => {
        board.drop(Tetromino.I_SHAPE);
        board.moveDown()
    
        expect(board.toString()).to.equalShape(
          `..........
           ..........
           ...IIII...
           ..........
           ..........
           ..........`
        );
      });
      xit("Drop S:start from the top middle", () => {
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
      xit("start from the top middle, move down", () => {
        board.drop(Tetromino.S_SHAPE);
        board.moveDown()
    
        expect(board.toString()).to.equalShape(
          `..........
           ..........
           ....SS....
           ...SS.....
           ..........
           ..........`
        );
      });
      xit("Drop Z:start from the top middle", () => {
        board.drop(Tetromino.Z_SHAPE);
    
        expect(board.toString()).to.equalShape(
          `..........
           ...ZZ.....
           ....ZZ....
           ..........
           ..........
           ..........`
        );
      });
     xit("start from the top middle, move down", () => {
        board.drop(Tetromino.Z_SHAPE);
        board.moveDown()
    
        expect(board.toString()).to.equalShape(
          `..........
           ..........
           ...ZZ.....
           ....ZZ....
           ..........
           ..........`
        );
      });
      xit("Drop O:start from the top middle", () => {
        board.drop(Tetromino.O_SHAPE);
    
        expect(board.toString()).to.equalShape(
          `..........
           ....OO....
           ....OO....
           ..........
           ..........
           ..........`
        );
      });
      xit("start from the top middle, move down", () => {
        board.drop(Tetromino.O_SHAPE);
        board.moveDown()
    
        expect(board.toString()).to.equalShape(
          `..........
           ..........
           ....OO....
           ....OO....
           ..........
           ..........`
        );
      });
      xit("Drop L:start from the top middle", () => {
        board.drop(Tetromino.L_SHAPE);
    
        expect(board.toString()).to.equalShape(
          `..........
           ...LLL....
           ...L......
           ..........
           ..........
           ..........`
        );
      });
      xit("start from the top middle, move down", () => {
        board.drop(Tetromino.L_SHAPE);
        board.moveDown()
    
        expect(board.toString()).to.equalShape(
          `..........
           ..........
           ...LLL....
           ...L......
           ..........
           ..........`
        );
      });
      it("Drop J:start from the top middle", () => {
        board.drop(Tetromino.J_SHAPE);
    
        expect(board.toString()).to.equalShape(
          `..........
           ...JJJ....
           .....J....
           ..........
           ..........
           ..........`
        );
      });
      it("start from the top middle, move down", () => {
        board.drop(Tetromino.J_SHAPE);
        board.moveDown()
    
        expect(board.toString()).to.equalShape(
          `..........
           ..........
           ...JJJ....
           .....J....
           ..........
           ..........`
        );
      });
    });*/