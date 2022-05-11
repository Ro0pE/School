
// https://www.youtube.com/watch?v=1r52b3UXqSk
export class LifeGame {

  constructor(){
    this.size = 20  // 20  x 20 hardcoded board
    this.current_board = [] // current board
    this.new_board = [] // board with new values

  }
  create_new_board(){

    for (let i = 0; i < this.size; i++){
      this.new_board[i] = []
      for (let f = 0; f < this.size; f++){
        this.new_board[i][f] = 0 
      }
    }


  }


  create_current_board(){
    for (let i = 0; i < this.size; i++){
      this.current_board[i] = []
      for (let f = 0; f < this.size; f++){
        this.current_board[i][f] = 0   // all zeros
      }
    }


  }

  print_board(board){
    let pretty_print = '  '
    for (let f = 0; f < board.length; f++){
        for (let i = 0; i < board.length; i++){
            pretty_print += board[f][i] // tää voi haistaa paskat ;:D
        }
        pretty_print += '\n  '
    }
    console.log(pretty_print)
    return pretty_print

  }
  add_block(){ // hardcoded starting positions
    this.current_board[0][0] = 1
    this.current_board[0][1] = 1
    this.current_board[1][0] = 1
    this.current_board[1][1] = 1
  }

  add_blinker(){
    this.current_board[1][0] = 1
    this.current_board[1][1] = 1
    this.current_board[1][2] = 1

  }
  add_glider(){ 
    this.current_board[0][1] = 1
    this.current_board[1][2] = 1
    this.current_board[2][0] = 1
    this.current_board[2][1] = 1
    this.current_board[2][2] = 1

  }
  /*Any live cell with two or three live neighbours survives.
Any dead cell with three live neighbours becomes a live cell.
All other live cells die in the next generation. Similarly, all other dead cells stay dead. */

  update_cell_value(row,column){
    let neighbours = this.check_neighbours(row,column)
    if (this.current_board[row][column] === 1 && neighbours === 2){
      return 1
    } else if (this.current_board[row][column] === 1 && neighbours === 3){
      return 1
    } else if (this.current_board[row][column] === 0 && neighbours === 3) {
      return 1
    } else if (this.current_board[row][column] === 1 && neighbours < 2){
      return 0
    } else if (this.current_board[row][column] === 1 && neighbours > 3){
      return 0
    } else {
      return this.current_board[row][column]
    }

  }
  run_cycle(iterations){
    let i = 0
    while (i < iterations){
      this.life_cycle()
      i++
    }


  }

  life_cycle(){
    for (let i = 0; i < this.size; i++){
      for (let j = 0 ; j < this.size;j++){  // loop trough every cell, i is for row, j is for column  
        let new_cell = this.update_cell_value(i,j)

          this.new_board[i][j] = new_cell
        

    }

  }

  this.current_board = this.new_board
  this.new_board = []
  this.create_new_board()
 

  }

  check_out_of_boundries(row,column){  // check if indexes are valid, else return 0 (cells outside board are considered dead == 0)
    try {
   
        if (this.current_board[row][column] === undefined){
          return 0
        } else {
          return this.current_board[row][column]
        }
        
    } catch {


      return 0
    }
  }


  check_neighbours(row,column){
    let counter = 0
    counter += this.check_out_of_boundries(row,column-1) // left
    counter += this.check_out_of_boundries(row,column+1) // right
    counter += this.check_out_of_boundries(row-1,column-1) // up left corner
    counter += this.check_out_of_boundries(row-1,column) // up
    counter += this.check_out_of_boundries(row-1,column+1) // up right corner
    counter += this.check_out_of_boundries(row+1,column-1) // down left corner 
    counter += this.check_out_of_boundries(row+1,column) // down
    counter += this.check_out_of_boundries(row+1,column+1)// down right corner
    return counter


  }
}