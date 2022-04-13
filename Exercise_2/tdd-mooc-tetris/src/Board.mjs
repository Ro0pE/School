import { Block } from "./Block.mjs";
import { Tetromino } from "./Tetromino.mjs";

export class Board {
  width;
  height;
  game_start;
  board_status;
  active_block_board;
  dropped_block_board;
  active_tetromino;



  constructor(width, height) {
    this.game_start = false;
    this.width = width;
    this.height = height;
    this.active_tetromino = "";
    this.board_status = []
    this.active_block_board = []
    this.dropped_block_board = []



  }

  setupBoard(){ // boards
    for (let i = 0; i < (this.width * this.height);i++){
      this.dropped_block_board.push('.')
      this.active_block_board.push('.')
      this.board_status.push(false)
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




  toString() {  
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

    if (this.game_start === false){
      this.setupBoard();
      
    } 

      let T_SHAPE = new Tetromino().T_SHAPE()
      let S_SHAPE = new Tetromino().S_SHAPE()
      this.active_tetromino = T_SHAPE
     // this.active_tetromino = S_SHAPE
      console.log('block status ' ,this.active_tetromino)
      //this.active_block = new Tetromino().T_SHAPE() 
      //let T_ROTATED_RIGHT = new Tetromino().rotateRight()
      let start = 3
      let bonus = 0
      let counter = 0
      for (let i = 0; i < 3;i++){
        for (let j = 0; j < 3;j++) { 
           this.active_block_board[start+bonus] = this.active_tetromino[counter]
           if (this.active_tetromino[counter] !== ".") {
            this.board_status[start+bonus] = true 
           }
           
           start++
           counter++
 
 
        }
        start = 3
        bonus = bonus + 10
      }
      console.log('board after drop\n'+this.testToString(this.active_block_board))
  
  }
  rotateLeft(){
    if (this.game_start === false){
      this.setupBoard();
    } 
    let new_form = ''
    for (let f = 0; f < this.active_tetromino.length;f++){
      new_form = new_form+[this.active_tetromino[f]]
    }

    let rotated_piece = new Tetromino(new_form).rotateLeft()
   
    this.active_tetromino = rotated_piece
    console.log('rotated piece', this.active_tetromino)
    console.log('board before rotate\n'+this.testToString(this.active_block_board))
    let start = 3
    let bonus = 0
    let counter = 0
    for (let i = 0; i < 3;i++){
      for (let j = 0; j < 3;j++) {
         this.active_block_board[start+bonus] = this.active_tetromino[counter]
         if (this.active_tetromino[counter] !== ".") {
          this.board_status[start+bonus] = true 
         }
         
         start++
         counter++


      }
      start = 3
      bonus = bonus + 10
    }
    
    
    console.log('board after rotate\n'+this.testToString(this.active_block_board))
    

  }
  rotateRight(){
    if (this.game_start === false){
      this.setupBoard();
    } 
    let new_form = ''
    for (let f = 0; f < this.active_tetromino.length;f++){
      new_form = new_form+[this.active_tetromino[f]]
    }

    let rotated_piece = new Tetromino(new_form).rotateRight()
   
    this.active_tetromino = rotated_piece
    console.log('rotated piece', this.active_tetromino)
    console.log('board before rotate\n'+this.testToString(this.active_block_board))
    let start = 3
    let bonus = 0
    let counter = 0
    for (let i = 0; i < 3;i++){
      for (let j = 0; j < 3;j++) {
         this.active_block_board[start+bonus] = this.active_tetromino[counter]
         if (this.active_tetromino[counter] !== ".") {
          this.board_status[start+bonus] = true 
         }
         
         start++
         counter++


      }
      start = 3
      bonus = bonus + 10
    }
    
    
    console.log('board after rotate\n'+this.testToString(this.active_block_board))
    

  }

  tick(){
    console.log('TICK!')
    console.log('board before tick\n'+this.testToString(this.active_block_board))
    let letter = ""

    let move_these = []
    let counter = 0;
    for (let i = 0; i < this.width; i++){
      for (let j = 0; j < this.height; j++) {
        if (this.active_block_board[counter] !== '.'){
          letter = this.active_block_board[counter] 
          move_these.push(counter)
          
        }
        counter++

      }
    }
  console.log('move these ', move_these)
  console.log('LETTER ' , letter)
    for (let f = move_these.length-1; f >= 0; f--) {
      let old_index = move_these[f]
      let new_index = move_these[f] + 10
      
      if (new_index > this.width * this.height){
        console.log('over board')

        this.setupDroppedBlockBoard(this.active_block_board)
        this.setupActiveBoard()
        console.log('block is dropped\n'+this.testToString(this.dropped_block_board))
        break
      }
      if (this.checkPossibleMoves(move_these) === true){
        this.setupDroppedBlockBoard(this.active_block_board)
        console.log('block is dropped\n'+this.testToString(this.dropped_block_board))
        this.setupActiveBoard()
        
        break
      } 
        this.active_block_board[old_index] = "."
        this.active_block_board[new_index] = letter

      
    }
    console.log('board after tick\n'+this.testToString(this.active_block_board))
    

  }

  checkPossibleMoves(indexes){
    let status = false
 

    for (let i = 0; i < indexes.length; i++){
      if (this.dropped_block_board[indexes[i]+10] !== '.'){
        status = true
      }
    }
    return status

  }
  


  

  checkSurroundings(){

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