export class Tetromino {

       width;
       height;

       constructor() {
           this.width = 3;
           this.height = 3;
       }

       T_SHAPE(){         
        // '.T.\nTTT\n...\n' 
        let t_pieces = '.T.TTT...'  
        let t_shape = t_pieces.split('')

           return t_shape
       }
}


    /*`.T.
       TTT
       ...`*/