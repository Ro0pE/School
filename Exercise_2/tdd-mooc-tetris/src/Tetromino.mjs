export class Tetromino {

       width;
       height;
       coords;
       shape;

       constructor(shape) {
           this.width = 3;
           this.height = 3;
           this.coords = []
           this.shape = shape
       }



       T_SHAPE(){         
        // '.T.\nTTT\n...\n' 
        let t_pieces = '.T.TTT...'  
        let t_shape = t_pieces.split('')

           return t_shape
       }
       
       S_SHAPE(){         
        // '.T.\nTTT\n...\n' 
        let s_pieces = '....SSSS.'  
        let s_shape = s_pieces.split('')

           return s_shape
       }

       getBlockedAreas(){
        return this.coords
        }
         setBlockedAreas(index){
            this.coords.push(index)

        }
       rotateRight(){
        return this.algo3x3(2,"right",this.shape)
       // return this.algo5x5(4,"right")
        }
        rotateLeft(){
            
        return this.algo3x3(6,"left",this.shape)
        // return this.algo5x5(4,"right")
    }

    algo3x3(start,side,shape){
          let parse_text = shape           
          let empty = '_________'
          let list = parse_text.split('')
          let empty_list = empty.split('')
          let k = start
          let f = 0
          let s = 0
          let d = 0
          let i;
          for (let j = 0; j < 3;j++){        
                for (i = 0; i < 3; i++){
                    empty_list[k+f-s] = list[d]
                    if (side === "left") {
                        f = f - 3              
                      } 
                      if (side === "right") {            
                        f = f + 3
                      }
                    
                    d++
                }
                if (side === "left"){
                    s = s - 1
                }
                if (side === "right") {
                    s = s + 1
                }
                i = 0
                f = 0
        }
        // trim output
        let new_shape = "";
        for (let f = 0; f < empty_list.length;f++){
            new_shape = new_shape+empty_list[f]
        }

          let output = ""
          let g = 1
          for (let i = 0; i < empty_list.length;i++){
            output= output + empty_list[i]
            if (g === 3){
                output = output + "\n"
                g = 0
            }
            g++
          }
          this.shape = new_shape // update object shape
          
          return empty_list 

    }
}


    /*`.T.
       TTT
       ...`*/