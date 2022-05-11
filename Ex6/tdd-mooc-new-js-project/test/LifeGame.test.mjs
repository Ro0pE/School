import { expect } from "chai";
import { LifeGame } from "../src/LifeGame.mjs";

const empty_board = 
 '  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n  '
  const block_in_board = 
 '  11000000000000000000\n\
  11000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n  '
  const blinker_in_board = 
 '  00000000000000000000\n\
  11100000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n  '
  const blinker_in_board_after_cycle = 
  '  01000000000000000000\n\
  01000000000000000000\n\
  01000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n  '
  const glider_in_board = 
'  01000000000000000000\n\
  00100000000000000000\n\
  11100000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n  '
  const glider_in_board_after_cycle = 
  '  00000000000000000000\n\
  10100000000000000000\n\
  01100000000000000000\n\
  01000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n\
  00000000000000000000\n  '

describe("Before game start", () => {
  it("Create a new empty board", () => {
    const new_game = new LifeGame()
    new_game.create_current_board()
    new_game.create_new_board()
    expect(new_game.print_board(new_game.current_board)).to.equal(empty_board);
  });
  it("Board size is 20", () => {
    const new_game = new LifeGame()
    expect(new_game.size).to.equal(20);
  });
  it("Add block to board", () => {
    const new_game = new LifeGame()
    new_game.create_current_board()
    new_game.create_new_board()
    new_game.add_block()
    expect(new_game.print_board(new_game.current_board)).to.equal(block_in_board);
  });
  it("Add blinker to board", () => {
    const new_game = new LifeGame()
    new_game.create_current_board()
    new_game.create_new_board()
    new_game.add_blinker()
    expect(new_game.print_board(new_game.current_board)).to.equal(blinker_in_board);
  });
  it("Add glider to board", () => {
    const new_game = new LifeGame()
    new_game.create_current_board()
    new_game.create_new_board()
    new_game.add_glider()
    expect(new_game.print_board(new_game.current_board)).to.equal(glider_in_board);
  });

  describe("After life cycle", () => {
    it("After one cycle and block on the board", () => {
      const new_game = new LifeGame()
      new_game.create_current_board()
      new_game.create_new_board()
      new_game.add_block()
      new_game.life_cycle()

      expect(new_game.print_board(new_game.current_board)).to.equal(block_in_board)
    })
    it("After one cycle and blinker on the board", () => {
      const new_game = new LifeGame()
      new_game.create_current_board()
      new_game.create_new_board()
      new_game.add_blinker()
      new_game.life_cycle()

      expect(new_game.print_board(new_game.current_board)).to.equal(blinker_in_board_after_cycle)
    })
    it("After two cycle and blinker on the board", () => {
      const new_game = new LifeGame()
      new_game.create_current_board()
      new_game.create_new_board()
      new_game.add_blinker()
      new_game.life_cycle()
      new_game.life_cycle()

      expect(new_game.print_board(new_game.current_board)).to.equal(blinker_in_board)
    })
    it("After one cycle and glider on the board", () => {
      const new_game = new LifeGame()
      new_game.create_current_board()
      new_game.create_new_board()
      new_game.add_glider()
      new_game.life_cycle()
      

      expect(new_game.print_board(new_game.current_board)).to.equal(glider_in_board_after_cycle)
    })

    });
});
