import { Block } from "./Block.mjs";

export class Board {
  width;
  height;
  board_status;
  game_status;
  block_position;
  active_block;
  game_start;
  block_is_falling;
  block_cant_move;


  constructor(width, height) {
    this.block_is_falling = false;
    this.game_start = false;
    this.width = width;
    this.height = height;
    this.board_status = []
    this.game_status = false;
    this.block_position = null;
    this.active_block = "";
    this.block_cant_move = false;


  }

  setupBoard(){
    for (let i = 0; i < (this.width * this.height);i++){

      this.board_status.push('.')
    }

    this.game_start = true
  }


  toString() {
    if (this.game_start === false){
      this.setupBoard();
    }
    let final_board = "";
    let f = 0
    for (let y = 0; y < this.height; y++){
    for (let i = 0; i < this.width; i++){
      final_board = final_board + this.board_status[f]
      f++
    }
    final_board = final_board + "\n"
  }
  console.log('board \n' +final_board)

    return final_board;
  }


  drop(){
    
    if (this.game_start === false){
      this.setupBoard();
    }
    if (this.block_is_falling === true){
      throw new Error("already falling")
   }
    if (this.board_status[7] === 'X'){
      this.active_block = new Block("Y")
      this.board_status[this.active_block.getStartPosition()] = this.active_block.color
      this.block_is_falling = true;

    } else {
      this.active_block = new Block("X")
      this.board_status[this.active_block.getStartPosition()] = this.active_block.color
      this.block_is_falling = true;
      

    }


  }

  tick(){
    console.log('active block ' , this.active_block)

    if (this.active_block.getCollapsed() === false){ // if block is not collapsed
    let old_pos = this.active_block.getPosition();
    let new_pos = old_pos + 3
    this.board_status[old_pos] = "."
    this.board_status[new_pos] = this.active_block.color
    this.active_block.setPosition(new_pos)
    this.checkSurroundings()
  } else {
    this.active_block.setMoving(false)
   
  }
  


  }
  checkSurroundings(){
    let position = this.active_block.getPosition()
    let next_position = position + 3
    let last_possible_position = this.width * this.height
    if (next_position > last_possible_position){  // check if block next position would be out of board

      this.active_block.setCollapsed(true)  // if true, block is in it's last position === collapsed
      this.active_block.setMoving(true)
      this.block_is_falling = false;
    } else {
      
      if (this.board_status[next_position] === 'X'){
        console.log('slot is taken with:  ' , this.board_status[next_position])
        this.active_block.setCollapsed(true) 
        this.active_block.setMoving(true)
        this.block_is_falling = false;

      }
  
    }
  }

  hasFalling(){
    console.log(this.active_block)
    if (this.active_block.getMoving() === true){
    return true

    } else {
      return false
    }
    
    
  }
}