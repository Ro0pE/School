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
  old_tetro;
  tetro_is_rotated;


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
     this.board_frame[bottom_right] = 'R'
     this.board_frame[bottom_left] = 'L'
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
  moveDown(){
    console.log('moving down')
    this.tick()
  }
  moveLeft(){
    console.log('moving left')
    console.log(this.testToString(this.board_frame))
    console.log('active status before left\n'+this.testToString(this.active_block_board))
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
    if (this.checkWallLeft(move_these) === false){

  
    for (let f = 0; f < move_these.length ; f++) {

      let old_index = move_these[f]
      let new_index = move_these[f] - 1
      if (this.checkIfBlockedLeft(move_these) === true) {
        console.log('left blocked')
        return
      }
      console.log('udpate')
        this.active_block_board[old_index] = "."
        this.active_block_board[new_index] = letter

      
    }
    for (let f = 0; f < this.current_indexes.length; f++){ // update current indexes + 10 when block is falling
      this.current_indexes[f] = this.current_indexes[f]-1

    }
   } else {
    console.log('Cant go through wall')
     return
    
    }
    console.log('active status after left\n'+this.testToString(this.active_block_board))
  }

  moveRight(){
    console.log('moving right')
    console.log('active status before right\n'+this.testToString(this.active_block_board))
    console.log('move right indedxes ' , this.current_indexes)
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

    if (this.checkWallRight(move_these) === false) {
      console.log('right not blocked' )
    
    for (let f = move_these.length-1; f >= 0; f--) {
   
      let old_index = move_these[f]
      let new_index = move_these[f] + 1

      if (this.checkIfBlockedRight(move_these) === true) {
        console.log('right blocked')
        return
      }

      

        this.active_block_board[old_index] = "."
        this.active_block_board[new_index] = letter

      
    }     
    for (let f = 0; f < this.current_indexes.length; f++){ // update current indexes + 10 when block is falling
      this.current_indexes[f] = this.current_indexes[f]+1

    }
    }else {
      console.log('Cant go through walll')
      return
     
  }


  

  }
  rotateLeft(){
    console.log('rotating left')
    let taken_spots = []  // check already occupied spots
    for (let f = 0 ; f < this.dropped_block_board.length;f++){
      if (this.dropped_block_board[f] === 'X'){
        console.log('spot taken: ' , f)
        taken_spots.push(f)
      }
    }

    console.log('Active before rotateLEFT\n'+this.testToString(this.active_block_board))
    console.log('tetro status ' , this.tetro_is_rotated)

    if (this.game_start === false){
      this.setupBoard();
    } 
    let mid_piece = this.current_indexes[4]  // check "pieces mid piece", if its next to wall, try to wallkick
    for (let i = 0; i < 3;i++){
      for (let j = 0; j < 3;j++) {
        if (this.board_frame[mid_piece] === 'R' && this.board_frame[mid_piece+1] === 'L') {
          console.log('yli menee')
          console.log('try to move left')
          this.moveLeft()
          console.log('try to rotate again')
          this.rotateLeft()
          return
        }
        if (this.board_frame[mid_piece] === 'L' && this.board_frame[mid_piece-1] === 'R') {
          console.log('yli menee')
          console.log('try to move right')
          this.moveRight()
          console.log('try to rotate again')
          this.rotateLeft()
          return
        }

     }
    
    }
    console.log('mid piece ' , this.current_indexes[4])
    let new_T_list = []
 
    for (let f = 0; f < this.current_indexes.length;f++){  // refactor, update current indexes
      if (this.active_block_board[this.current_indexes[f]] === 'T'){
        console.log('T!  at index ' , this.current_indexes[f])
       

      if (f == 0 ){

        new_T_list.push(this.current_indexes[f]+20)
      
      }
      if (f == 1){ 

        new_T_list.push(this.current_indexes[f]+9)
        


      }
      if (f == 2){

        new_T_list.push(this.current_indexes[f]-2)
    

      }
      if (f == 3){

        new_T_list.push(this.current_indexes[f]+11)


        
      }
      if (f == 4){
        new_T_list.push(this.current_indexes[f])
      
        
      }
      if (f == 5){

        new_T_list.push(this.current_indexes[f]-11)

        
      }
      if (f == 6){

        new_T_list.push(this.current_indexes[f]+2)
      
        
      }
      if (f == 7){

        new_T_list.push(this.current_indexes[f]-9)
      
        
      }
      if (f == 8){
        new_T_list.push(this.current_indexes[f]-20)
      
        
      }
    }
    }
    console.log('new t ' , new_T_list)
    console.log('taken spotsw ' , taken_spots)
    for (let f = 0; f < taken_spots.length;f++){
      for(let k = 0; k < new_T_list.length;k++){
        if(new_T_list[k] === taken_spots[f]){
          console.log(new_T_list[k] ,' vs ',  taken_spots[f])
          console.log('Cant rotate, something is blocking')
          taken_spots = []
          return
        }
      }
  

    }

    for (let f = 0 ; f < this.active_block_board.length; f++){ // clear
      this.active_block_board[f] = '.'
    }
    for (let i = 0 ; i < new_T_list.length; i++){  // fill
      this.active_block_board[new_T_list[i]] = 'T'
    }


  

  

    console.log('current indexes after mvoe right' + this.current_indexes)
    console.log('Active after rotateLEFT\n'+this.testToString(this.active_block_board))
    console.log('Status\n'+this.testToString(this.dropped_block_board))
   

  }
  rotateRight(){
    
    console.log('rotating right')
    console.log('Active before rotate RIGHT\n'+this.testToString(this.active_block_board))
    console.log('current indexes',this.current_indexes)
    let taken_spots = []
    for (let f = 0 ; f < this.dropped_block_board.length;f++){
      if (this.dropped_block_board[f] === 'X'){
        console.log('spot taken: ' , f)
        taken_spots.push(f)
      }
    }

      if (this.game_start === false){
        this.setupBoard();
      } 
      let mid_piece = this.current_indexes[4]
      for (let i = 0; i < 3;i++){
        for (let j = 0; j < 3;j++) {
          if (this.board_frame[mid_piece] === 'R' && this.board_frame[mid_piece+1] === 'L') {
            console.log('yli menee')
            console.log('try to move left')
            this.moveLeft()
            console.log('try to rotate again')
            this.rotateRight()
            return
          }
          if (this.board_frame[mid_piece] === 'L' && this.board_frame[mid_piece-1] === 'R') {
            console.log('yli menee')
            console.log('try to move right')
            this.moveRight()
            console.log('try to rotate again')
            this.rotateRight()
            return
          }

       }
      
      }

 
    let new_T_list = []
    for (let f = 0; f < this.current_indexes.length;f++){  // refactor, update current indexes
      if (this.active_block_board[this.current_indexes[f]] === 'T'){
        console.log('T!  at index ' , this.current_indexes[f])

      if (f == 0 ){

        new_T_list.push(this.current_indexes[f]+11)
      
      }
      if (f == 1){ 

        new_T_list.push(this.current_indexes[f]+11)
        


      }
      if (f == 2){

        new_T_list.push(this.current_indexes[f]+20)
    

      }
      if (f == 3){

        new_T_list.push(this.current_indexes[f]-9)


        
      }
      if (f == 4){
        new_T_list.push(this.current_indexes[f])
      
        
      }
      if (f == 5){

        new_T_list.push(this.current_indexes[f]+9)

        
      }
      if (f == 6){

        new_T_list.push(this.current_indexes[f]-20)
      
        
      }
      if (f == 7){

        new_T_list.push(this.current_indexes[f]-11)
      
        
      }
      if (f == 8){
        new_T_list.push(this.current_indexes[f]-2)
      
        
      }
    }
    }
    console.log('new t ' , new_T_list)
    console.log('taken spotsw ' , taken_spots)
    for (let f = 0; f < taken_spots.length;f++){
      for(let k = 0; k < new_T_list.length;k++){
        if(new_T_list[k] === taken_spots[f]){
          console.log(new_T_list[k] ,' vs ',  taken_spots[f])
          console.log('Cant rotate, something is blocking')
          taken_spots = []
          return
        }
      }
  

    }

    for (let f = 0 ; f < this.active_block_board.length; f++){ // clear
      this.active_block_board[f] = '.'
    }
    for (let i = 0 ; i < new_T_list.length; i++){  // fill
      this.active_block_board[new_T_list[i]] = 'T'
    }

    console.log('Active after rotate RIGHT\n'+this.testToString(this.active_block_board))
    console.log('indexes after method ' , this.current_indexes)
    console.log('Status\n'+this.testToString(this.dropped_block_board))
    
    

  }

  tick(){
    console.log('active status before tick\n'+this.testToString(this.active_block_board))
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

    for (let f = move_these.length-1; f >= 0; f--) {
      let old_index = move_these[f]
      let new_index = move_these[f] + 10
      
      
      if (new_index > this.width * this.height){
        this.setupDroppedBlockBoard(this.active_block_board)
        this.setupActiveBoard()
        this.setupCurrentIndexes()
        return
      }
      if (this.checkPossibleMoves(move_these) === true){
        this.setupDroppedBlockBoard(this.active_block_board)
        this.setupActiveBoard()
        this.setupCurrentIndexes()
        
        return
      } 

        this.active_block_board[old_index] = "."
        this.active_block_board[new_index] = letter

      
    }
    if (this.checkBottom(move_these) === true){
      this.setupDroppedBlockBoard(this.active_block_board)
      this.setupActiveBoard()
      this.setupCurrentIndexes()
    
      return
    }
   


    for (let f = 0; f < this.current_indexes.length; f++){ // update current indexes + 10 when block is falling
      this.current_indexes[f] = this.current_indexes[f]+10

    }
    console.log('Status\n'+this.testToString(this.dropped_block_board))
 
    

  }
  checkRotate(indexes){
    let status = false
    for (let i = 0; i < indexes.length; i++){ 
      if (this.active_block_board[indexes[i]] !== '.' && this.dropped_block_board[indexes[i]] !== '.'){
        console.log('rotate no goooo')
        status = true
      }
    }
    return status

  }

  checkIfBlockedRight(indexes) {
    let status = false
    for (let i = 0; i < indexes.length; i++){
      if (this.dropped_block_board[indexes[i]+1] !== '.'){
        console.log('mikä blokkaa ' , this.dropped_block_board[indexes[i]+1] )
        status = true
      }
    }
    console.log('stattttus ' , status)
    return status

  }


  checkIfBlockedLeft(indexes) {
    let status = false
    for (let i = 0; i < indexes.length; i++){
      if (this.dropped_block_board[indexes[i]-1] !== '.'){
        status = true
      }
    }
    return status

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
  checkWallRight(indexes){

    let status = false
    for (let i = 0; i < indexes.length; i++){
      if (this.board_frame[indexes[i]+1] === "L" && this.board_frame[indexes[i]] === "R" ){
        status = true
      }
    }
    return status
  }
  checkWallLeft(indexes){

    let status = false
    for (let i = 0; i < indexes.length; i++){
      if (this.board_frame[indexes[i]-1] === "R" && this.board_frame[indexes[i]] === "L" ){
        console.log('hep')
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