import _ from "lodash";
import { Block } from "./Block.mjs";
import { Tetromino } from "./Tetromino.mjs";
import { Scoring } from "./Scoring.mjs";
import { ShuffleBag } from "./ShuffleBag.mjs";

export class Board {
  width;
  height;
  game_start;
  board_status;
  active_block_board;
  dropped_block_board;
  active_tetromino;
  board_frame;
  old_tetro;
  tetro_is_rotated;
  disable_wall_check;
  lines_cleared;
  scoring_bot;
  level;

  constructor(width, height) {
    this.game_start = false;
    this.tetro_is_rotated = false;
    this.width = width;
    this.height = height;
    this.active_tetromino = "";
    this.old_tetro = "";
    this.board_status = []
    this.active_block_board = []
    this.dropped_block_board = []
    this.board_frame = []
    this.disable_wall_check = false;
    this.lines_cleared = 0;
    this.scoring_bot = new Scoring()
    this.level = 0

  }

  setupBoard(){ //setup boards

    let board_full_size = this.height * this.width
    for (let i = 0; i < board_full_size;i++){
      this.dropped_block_board.push('.')
      this.active_block_board.push('.')
      this.board_status.push(false)
      this.board_frame[i] = '.'
    }

    
    let bottom_right = board_full_size -1
    let bottom_left = board_full_size - this.width
    let bottom_line = board_full_size

    for (let k = 0; k < this.height;k++) { //setup frames - walls
     this.board_frame[bottom_right] = 'R'
     this.board_frame[bottom_left] = 'L'
      bottom_right = bottom_right - this.width
      bottom_left = bottom_left - this.width 

    }
    for (let f = 0; f < this.width;f++){ //setup frames - bottom
      this.board_frame[f] ='.'
      this.board_frame[bottom_line-1] = 'B'

      bottom_line = bottom_line -1

    }
  

    this.game_start = true
  }

  setupActiveBoard() {
    this.active_block_board = []
    for (let i = 0; i < (this.width * this.height);i++){
      this.active_block_board.push('.')
    }
  }

  setupDroppedBlockBoard(active_block_board){ // change blocked spots to X
    for (let j = 0; j < active_block_board.length; j++){
      
      if (active_block_board[j] !== "."){
      
      
        this.dropped_block_board.splice(j, 1, active_block_board[j])

      
      }

    }



    for (let i = 0; i < this.dropped_block_board.length;i++){  

      if (this.dropped_block_board[i] !== ".") {
        //console.log('index ' , i ,'shit ' , this.dropped_block_board[i])
        this.dropped_block_board[i] = "X"
      }
 
    }
  }

  toStringBoardStatus() {  
    if (this.game_start === false){
      this.setupBoard();
    }
    let final_board = "";
    let f = 0
    for (let y = 0; y < this.height; y++){
    for (let i = 0; i < this.width; i++){
      final_board = final_board + this.dropped_block_board[f] // change this depending your test
      f++
    }
    final_board = final_board + "\n"
  } 
  console.log('Status\n'+this.testToString(this.dropped_block_board))
  console.log('Active\n'+this.testToString(this.active_block_board))
    return final_board;
  }



  toString() {  
    console.log(this.active_tetromino.coords)
    if (this.game_start === false){
      this.setupBoard();
    }
    let final_board = "";
    let f = 0
    for (let y = 0; y < this.height; y++){
    for (let i = 0; i < this.width; i++){
      final_board = final_board + this.active_block_board[f] // change this depending your test
      f++
    }
    final_board = final_board + "\n"
  } 
    console.log('Status\n'+this.testToString(this.dropped_block_board))
    console.log('Active\n'+this.testToString(this.active_block_board))
    return final_board;
  }
  testToString(lista) {
 

    let final_board = "";
    let f = 0
    for (let y = 0; y < this.height; y++){
    for (let i = 0; i < this.width; i++){
      final_board = final_board + lista[f]
      f++
    }
    final_board = final_board + "\n"
  } 
    return final_board;
  }


  drop(){
    console.log('dropping one')
    if (this.game_start === false){
      this.setupBoard();
    } 
    console.log(this.testToString(this.board_frame))
     let SHUFFLEBAG = new ShuffleBag()
     let random_block = SHUFFLEBAG.getTetromino()
     console.log('random block ' , random_block)
    


      let BLOCK = new Tetromino()
      //BLOCK.S_SHAPE()
      //BLOCK.Z_SHAPE()
      //BLOCK.J_SHAPE()
      //BLOCK.L_SHAPE()
      //BLOCK.O_SHAPE()
      BLOCK.I_SHAPE()
      //BLOCK.T_SHAPE()
      this.active_tetromino = BLOCK
   

    

      this.setupActiveBoard() // clearing the board
      for (let f = 0; f < this.active_tetromino.coords.length; f++){ // setup new board status
        this.active_block_board[this.active_tetromino.coords[f]] = this.active_tetromino.name
      }

      console.log(this.active_tetromino.coords)
     } 
     

  moveDown(){
    console.log('moving down')
    this.tick()
  }
  moveLeft(){
    console.log('moving left')
    console.log('block:  ' , this.active_tetromino)
    if (this.disable_wall_check === false){
      for (let f = 0; f < this.active_tetromino.coords.length; f++){  
        if (this.board_frame[this.active_tetromino.coords[f]-1] === 'R' && this.board_frame[this.active_tetromino.coords[f]] === 'L'){ // check wall
          console.log('cant go to through wall, abort')
          return
        }
        if (this.dropped_block_board[this.active_tetromino.coords[f]-1] ==='X'){ // check other block
          console.log("can't go though other pieces")
          return
        }
      }
    }
    this.setupActiveBoard() // clearing the board
    for (let f = 0; f < this.active_tetromino.coords.length; f++){ // setup new board status and update coords
      if (this.board_frame[this.active_tetromino.coords[f]-1] === 'L'){
        console.log('at the left edge')
      }
      this.active_block_board[this.active_tetromino.coords[f]-1] = this.active_tetromino.name
      this.active_tetromino.coords[f] = this.active_tetromino.coords[f]-1
    }

    console.log('active status after left\n'+this.testToString(this.active_block_board))
  }

  moveRight(){
    console.log('moving right')
    console.log('Status before move right\n'+this.testToString(this.dropped_block_board))
    console.log('active status before right\n'+this.testToString(this.active_block_board))
    console.log('block:  ' , this.active_tetromino)
    if (this.disable_wall_check === false){
    for (let f = 0; f < this.active_tetromino.coords.length; f++){ 
      if (this.board_frame[this.active_tetromino.coords[f]+1] === 'L' && this.board_frame[this.active_tetromino.coords[f]] === 'R'){ // check wall
        console.log('cant go to through wall, abort')
        return
      }
      if (this.dropped_block_board[this.active_tetromino.coords[f]+1] ==='X'){ // check other block
        console.log("can't go through other pieces")
        return
      }
    }
  }
    this.setupActiveBoard() // clearing the board
      for (let f = 0; f < this.active_tetromino.coords.length; f++){ // setup new board status and update coords
        if (this.board_frame[this.active_tetromino.coords[f]+1] === 'R'){
          console.log('at the right edge')
        }
        this.active_block_board[this.active_tetromino.coords[f]+1] = this.active_tetromino.name
        this.active_tetromino.coords[f] = this.active_tetromino.coords[f]+1
      }
  }
  rotateLeft(){
    let left = false
    let right = false
    console.log('rotating left')

    console.log('Active before rotateLEFT\n'+this.testToString(this.active_block_board))

    if (this.game_start === false){
      this.setupBoard();
    } 
    for (let f = 0; f < this.active_tetromino.coords.length; f++){
      if (this.board_frame[this.active_tetromino.coords[f]] === 'L'){
        left = true
      }
      if (this.board_frame[this.active_tetromino.coords[f]] === 'R'){
        right = true
      }
    }
    let coords_before_rotate = this.active_tetromino.coords
    this.active_tetromino.rotateLeft()
    let coords_after_rotate = this.active_tetromino.coords
    
    for (let i = 0; i < this.dropped_block_board.length;i++){ // check if rotate is possible
      if (this.dropped_block_board[i] === 'X'){
      for(let f = 0; f < coords_after_rotate.length; f++){
          if (coords_after_rotate[f] === i){
            console.log("can't rotate left, blocked")
            this.active_tetromino.coords = coords_before_rotate
            return
          }
        }
      }
    }



    for (let f = 0; f < this.active_tetromino.coords.length; f++){  // check wallkick
      if (this.board_frame[this.active_tetromino.coords[f]] === 'R'){
        if (left){
          this.disable_wall_check = true
          this.moveRight()
          this.disable_wall_check = false
          return
        }
        if (right) {
          this.disable_wall_check = true
          this.moveLeft()
          this.disable_wall_check = false
          return
        }
      }

    }
    this.setupActiveBoard() // clearing the board
    for (let f = 0; f < this.active_tetromino.coords.length; f++){ // setup new board status
      this.active_block_board[this.active_tetromino.coords[f]] = this.active_tetromino.name
    }
  
}
  rotateRight(){
    let left = false
    let right = false
    
    console.log('rotating right')
    console.log('Active before rotate right\n'+this.testToString(this.active_block_board))

      if (this.game_start === false){
        this.setupBoard();
      } 
      for (let f = 0; f < this.active_tetromino.coords.length; f++){
        if (this.board_frame[this.active_tetromino.coords[f]] === 'L'){
          left = true
        }
        if (this.board_frame[this.active_tetromino.coords[f]] === 'R'){
          right = true
        }
      }
      let coords_before_rotate = this.active_tetromino.coords
      this.active_tetromino.rotateRight()
      let coords_after_rotate = this.active_tetromino.coords
      
      for (let i = 0; i < this.dropped_block_board.length;i++){ // check if rotate is possible
        if (this.dropped_block_board[i] === 'X'){
        for(let f = 0; f < coords_after_rotate.length; f++){
            if (coords_after_rotate[f] === i){
              console.log("can't rotate right, blocked")
              this.active_tetromino.coords = coords_before_rotate
              return
            }
          }
        }
      }


      for (let f = 0; f < this.active_tetromino.coords.length; f++){  // check wallkick
        if (this.board_frame[this.active_tetromino.coords[f]] === 'R'){
          if (left){
            this.disable_wall_check = true
            this.moveRight()
            this.disable_wall_check = false
            return
          }
          if (right) {
            this.disable_wall_check = true
            this.moveLeft()
            this.disable_wall_check = false
            return
          }
        }
  
      }

      this.setupActiveBoard()
      for (let f = 0; f < this.active_tetromino.coords.length; f++){ // setup new board status
        this.active_block_board[this.active_tetromino.coords[f]] = this.active_tetromino.name
      }
      console.log('Active after rotate RIGHT\n'+this.testToString(this.active_block_board))
  }

  tick(){
    console.log('Status before tick\n'+this.testToString(this.dropped_block_board))

    console.log('active status before tick\n'+this.testToString(this.active_block_board))

    for (let i = 0; i < this.active_block_board.length; i++){  // check if bottom already
      if (this.active_block_board[i] !== '.') {
        if(this.board_frame[i] === 'B'){
          console.log('block is at the bottom')
          this.active_tetromino.isFallen = true
          this.setupDroppedBlockBoard(this.active_block_board)
          this.checkLineClear()
          this.setupActiveBoard()
          return
        }
      }
      if(this.dropped_block_board[this.active_tetromino.coords[i]+10] === 'X'){ // check if top of other block
        console.log('block is top of other block')        
        this.setupDroppedBlockBoard(this.active_block_board)
        this.checkLineClear()
        this.setupActiveBoard()
        return
      }
    }

    this.setupActiveBoard()
    for (let f = 0; f < this.active_tetromino.coords.length; f++){ // setup new board status and update coords
      this.active_block_board[this.active_tetromino.coords[f]+10] = this.active_tetromino.name
      this.active_tetromino.coords[f] = this.active_tetromino.coords[f]+10
    }
    console.log('active status after tick\n'+this.testToString(this.active_block_board))

  }
  checkLineClear(){
    console.log('checking lines ... ')
    let start = (this.height * this.width) - this.width
    let counter = 0
    let indexes_to_clear = []
    let helper = []
    let activate_clear = false
    for (let f = start; f > -1; f-=10) {
      for (let i = 0; i < this.width; i++){
        //console.log('index ' , f+i)
        if (this.dropped_block_board[f+i] === 'X') {
          counter++
          helper.push(i+f)
        }
        if (counter === 10){
         console.log('clearing activated!')
         activate_clear = true
          let helper_list = indexes_to_clear.concat(helper)
          indexes_to_clear = helper_list
          this.lines_cleared++
          helper = []
        }
      }
      helper = []
      counter = 0

    }
    let final_indexes = indexes_to_clear.sort()
   
    if (activate_clear === true) {
      console.log('clearing lines! HOW MANY?  ' , this.lines_cleared)
      for (let f = 0; f < final_indexes.length; f++){
        this.dropped_block_board[final_indexes[f]] = '.'
      }
      for (let i = 0; i < this.dropped_block_board.length;i++){
        if (this.dropped_block_board[i] === 'X' && i+10 < this.dropped_block_board.length){
        }
      }
      let y = this.lines_cleared * this.width // settle board this much
      for (let k = final_indexes[0]-1; k > -1;k--){ // find the biggest index, move every X rows * linescleared to down
        if (this.dropped_block_board[k] === 'X'){
          this.dropped_block_board[k] = '.'
          this.dropped_block_board[k+y] = 'X'
        }
      }
      activate_clear = false
      this.countScores()
      this.lines_cleared = 0;
      

    }

   

  }
  countScores(){
    console.log('set level to 9')
    this.level = 9
    console.log('Scores!!: ' + this.scoring_bot.linesCleared(this.lines_cleared,this.level))
    return this.scoring_bot.linesCleared(this.lines_cleared,this.level)

  }


  hasFalling(){
/*
    if (this.active_block.getMoving() === true){
    return true
    } else {
      return false
    }
    
    */
  }
}