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
  board_frame;
  current_indexes;



  constructor(width, height) {
    this.game_start = false;
    this.width = width;
    this.height = height;
    this.active_tetromino = "";
    this.board_status = []
    this.active_block_board = []
    this.dropped_block_board = []
    this.board_frame = []
    this.current_indexes = []



  }
  setupCurrentIndexes() {
    this.current_indexes = []
    let start = 3
    let bonus = 0
    let counter = 0
    for (let i = 0; i < 3;i++){
      for (let j = 0; j < 3;j++) { 

         this.current_indexes.push(start+bonus)      
         start++
         counter++


      }
      start = 3
      bonus = bonus + 10
    }
  }

  setupBoard(){ // boards
    let board_full_size = this.height * this.width
    for (let i = 0; i < board_full_size;i++){
      this.dropped_block_board.push('.')
      this.active_block_board.push('.')
      this.board_status.push(false)
      this.board_frame[i] = '.'
    }//setup frames

    
    let bottom_right = board_full_size -1
    let bottom_left = board_full_size - this.width
    let bottom_line = board_full_size
    for (let f = 0; f < this.width;f++){
      this.board_frame[f] ='.'
      this.board_frame[bottom_line-1] = 'B'

      bottom_line = bottom_line -1

    }
    for (let k = 0; k < this.height;k++) {
     this.board_frame[bottom_right] = 'W'
     this.board_frame[bottom_left] = 'W'
      bottom_right = bottom_right - this.width
      bottom_left = bottom_left - this.width 

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

  toStringResult() {  
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
  console.log('dropped\n'+this.testToString(this.dropped_block_board))
  console.log('active\n'+this.testToString(this.active_block_board))
    return final_board;
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
    console.log('FRAMES\n' +this.testToString(this.board_frame))

    this.current_indexes = []

      let T_SHAPE = new Tetromino().T_SHAPE()
      let S_SHAPE = new Tetromino().S_SHAPE()
      this.active_tetromino = T_SHAPE
     // this.active_tetromino = S_SHAPE
      //this.active_block = new Tetromino().T_SHAPE() 
      //let T_ROTATED_RIGHT = new Tetromino().rotateRight()
      let start = 3
      let bonus = 0
      let counter = 0
      for (let i = 0; i < 3;i++){
        for (let j = 0; j < 3;j++) { 
           this.current_indexes.push(start+bonus)
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
  checkBoardLimits(indexes){
    let status = false
 

    for (let i = 0; i < indexes.length; i++){
      if (this.dropped_block_board[indexes[i]+10] !== '.'){
        status = true
      }
    }
    
    return status



  }
  moveLeft(){
    console.log('FRAMES\n' +this.testToString(this.board_frame))
    console.log('board before move Left\n'+this.testToString(this.active_block_board))
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
    if (this.checkWall(move_these) === false){

  
    for (let f = 0; f < move_these.length ; f++) {

      let old_index = move_these[f]
      let new_index = move_these[f] - 1
      if (this.board_frame[old_index] === "W" || this.board_frame[old_index] === "B"){
        console.log('we hit the wall')

        return
      }
      if (this.checkIfBlockedLeft(move_these) === true) {
        console.log("something on the way")
        return
      }

        this.active_block_board[old_index] = "."
        this.active_block_board[new_index] = letter

      
    }
    for (let f = 0; f < this.current_indexes.length; f++){ // update current indexes + 10 when block is falling
      this.current_indexes[f] = this.current_indexes[f]-1

    }
   } else {
      console.log('pum')
    }
 

    console.log('board after move left\n'+this.testToString(this.active_block_board))

  

  }

  moveRight(){
    
    console.log('FRAMES\n' +this.testToString(this.board_frame))
    console.log('board before move Right\n'+this.testToString(this.active_block_board))

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

    if (this.checkWall(move_these) === false) {

   
    for (let f = move_these.length-1; f >= 0; f--) {
   
      let old_index = move_these[f]
      let new_index = move_these[f] + 1
    

        this.active_block_board[old_index] = "."
        this.active_block_board[new_index] = letter

      
    }     
    for (let f = 0; f < this.current_indexes.length; f++){ // update current indexes + 10 when block is falling
      this.current_indexes[f] = this.current_indexes[f]+1

    }
    }else {
      console.log('bääää')
  }
    console.log('board after move right\n'+this.testToString(this.active_block_board))

  

  }
  rotateLeft(){
    console.log('FRAMES\n' +this.testToString(this.board_frame))
    if (this.game_start === false){
      this.setupBoard();
    } 
    let new_form = ''
    for (let f = 0; f < this.active_tetromino.length;f++){
      new_form = new_form+[this.active_tetromino[f]]
    }

    let rotated_piece = new Tetromino(new_form).rotateLeft()
   
    this.active_tetromino = rotated_piece

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
    console.log('FRAMES\n' +this.testToString(this.board_frame))
    console.log('indexes to rotate ' ,this.current_indexes)
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
    let counter = 0
    for (let i = 0; i < 3;i++){
      for (let j = 0; j < 3;j++) {
         this.active_block_board[this.current_indexes[counter]] = this.active_tetromino[counter]
         if (this.active_tetromino[counter] !== ".") {
          this.board_status[this.current_indexes[counter]] = true 
         }
         

         counter++


      }

    }
    
    
    console.log('board after rotate\n'+this.testToString(this.active_block_board))
    

  }

  tick(){
    console.log('TICK!')
    console.log('board before tick\n'+this.testToString(this.active_block_board))
    console.log('dropped before tick\n'+this.testToString(this.dropped_block_board))
    console.log('FRAMES\n' +this.testToString(this.board_frame))
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

    for (let f = move_these.length-1; f >= 0; f--) {
      let old_index = move_these[f]
      let new_index = move_these[f] + 10
      
      
      if (new_index > this.width * this.height){
        console.log('over board')

        this.setupDroppedBlockBoard(this.active_block_board)
        this.setupActiveBoard()
        this.setupCurrentIndexes()
        console.log('block is dropped\n'+this.testToString(this.dropped_block_board))
        return
      }
      if (this.checkPossibleMoves(move_these) === true){
        this.setupDroppedBlockBoard(this.active_block_board)
        console.log('block is dropped\n'+this.testToString(this.dropped_block_board))
        this.setupActiveBoard()
        this.setupCurrentIndexes()
        
        return
      } 
      console.log('WWWTTFF')


        this.active_block_board[old_index] = "."
        this.active_block_board[new_index] = letter

      
    }
    if (this.checkBottom(move_these) === true){
      console.log('at the bottom')
      this.setupDroppedBlockBoard(this.active_block_board)

      this.setupActiveBoard()
      this.setupCurrentIndexes()
      console.log('block is dropped\n'+this.testToString(this.dropped_block_board))
      return
    }
    console.log('board after tick\n'+this.testToString(this.active_block_board))


    for (let f = 0; f < this.current_indexes.length; f++){ // update current indexes + 10 when block is falling
      this.current_indexes[f] = this.current_indexes[f]+10

    }
    console.log('STATUS\n'+this.testToString(this.dropped_block_board))
    

  }
  checkIfBlockedLeft(indexes) {
    console.log('checking indexes : ' , indexes)
    let status = false
 

    for (let i = 0; i < indexes.length; i++){
      if (this.dropped_block_board[indexes[i]-1] !== '.'){
        console.log('varattu')
        status = true
      }
    }
    return status

  }

  checkPossibleMoves(indexes){
    console.log('checking indexes : ' , indexes)
    let status = false
 

    for (let i = 0; i < indexes.length; i++){
      if (this.dropped_block_board[indexes[i]+10] !== '.'){
        console.log('mitäs tässä')
        status = true
      }
    }
    return status

  }
  
  checkWall(indexes){
    
    let status = false
    for (let i = 0; i < indexes.length; i++){
      if (this.board_frame[indexes[i]] !== "."){
        console.log('BANG wall')
        status = true
      }
    }
    return status
  }
  checkBottom(indexes){
    let status = false
    for (let i = 0; i < indexes.length; i++){
      if (this.board_frame[indexes[i]+10] ==="B"){
        status = true
      }
    }
    return status
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