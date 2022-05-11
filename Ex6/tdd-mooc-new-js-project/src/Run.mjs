import prompt from 'prompt'
import { LifeGame } from './LifeGame.mjs'

prompt.start()
prompt.get(['pattern' , "iterations"],  function (error ,result) {

    const pattern = result.pattern
    const iterations = result.iterations

    console.log('pattern: ' , pattern + 
    ' \niterations : ' ,iterations)



 function run_program(){
    const new_life = new LifeGame()
    new_life.create_current_board()
    new_life.create_new_board()
    if (pattern == 'glider'){ // RLE bob$2bo$3o!
        new_life.add_glider()
    } else if (pattern == 'blinker'){ // RLE 3o!
        new_life.add_blinker()
    } else if (pattern == 'block'){ // RLE 2o$2o!
        new_life.add_block()
    } else {
        console.log('Pattern is not valid')
    }
    new_life.print_board(new_life.current_board)
    new_life.run_cycle(iterations)
    new_life.print_board(new_life.current_board)
   

 }
 run_program()


    
   
    //console.log(pretty_print)
})