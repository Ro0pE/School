export class Tetromino {

       width;
       height;
       coords;
       shape;
       position;

       constructor() {
           this.width = 4;
           this.height = 4;
           this.coords = []
           this.shape = ''
           this.position = 1
       }
       getCoords(){
           return this.coords
       }
       setCoords(coords) {
           this.coords = coords
       }
       deleteCoords(){
           this.coords = []
       }
       getCoordsSize() {
           return this.coords.length
       }



       T_SHAPE(){         
        // '.T.\nTTT\n...\n' 
        let t_pieces = '....TTT..T......'  
        let t_shape = t_pieces.split('')
        this.shape = t_shape
        this.coords.push(13,14,15,24)

           return t_shape
       }
       
       S_SHAPE(){         
        // '.T.\nTTT\n...\n' 
        let s_pieces = '.....SS.SS......'  
        let s_shape = s_pieces.split('')

           return s_shape
       }
       I_SHAPE(){
        let i_pieces = '....IIII........'  
        let i_shape = i_pieces.split('')
           return i_shape
       }
       J_SHAPE(){
        let j_pieces = '....JJJ...J.....'  
        let j_shape = j_pieces.split('')
           return j_shape
       }
       L_SHAPE(){
        let l_pieces = '....LLL.L......'  
        let l_shape = l_pieces.split('')
           return l_shape
       }
       Z_SHAPE(){
        let z_pieces = '....ZZ...ZZ.....'  
        let z_shape = z_pieces.split('')
           return z_shape
       }
       O_SHAPE(){
        let o_pieces = '.....OO..OO.....'  
        let o_shape = o_pieces.split('')
           return o_shape
       }

       getBlockedAreas(){
        return this.coords
        }
         setBlockedAreas(index){
            this.coords.push(index)

        }
        getName(){
            return 'test'

        }
       rotateRight(){
           console.log('right posi ' , this.position, ' coords: ', this.coords)
        if (this.position === 4){

            let first = this.coords[0] - 11
            let second = this.coords[1]
            let third = this.coords[2] + 11
            let fourth = this.coords[3] + 9
            this.coords = []
            this.coords.push(first,second,third,fourth)
           

                 
            this.position = 1
            return
        } else if (this.position === 3){
            let first = this.coords[0] - 1
            let second = this.coords[1] - 10
            let third = this.coords[2]  - 19
            let fourth = this.coords[3] + 1
            this.coords = []
            this.coords.push(first,second,third,fourth)
            
            this.position = 4
            return
              
        } else if (this.position === 2){

            let first = this.coords[0] + 21
            let second = this.coords[1] + 10
            let third = this.coords[2] - 1
            let fourth = this.coords[3] + 1
          
            this.coords = []
            this.coords.push(first,second,third,fourth)
            this.position = 3
            return

               
            
        } else if (this.position === 1){
            
            let first = this.coords[0] - 9
            let second = this.coords[1] 
            let third = this.coords[2] + 9
            let fourth = this.coords[3] - 11

            this.coords = []
            this.coords.push(first,second,third,fourth)
            console.log('coords given here right' , this.coords)
            this.position = 2
            return
 

        }
          


      
            console.log('ROTATE')
          /* let helper = this.shape
           helper[0] = "."
           helper[1] = "T"
           helper[2] = "."
           helper[3] = "."
           helper[4] = "T"
           helper[5] = "T"
           helper[6] = "."
           helper[7] = "."
           helper[8] = "."
           helper[9] = "T"
           helper[10] = "."
           helper[11] = "."
           helper[12] = "."
           helper[13] = "."
           helper[14] = "."
           helper[15] = "."
           this.shape = helper*/
           console.log('tetro coords ' , this.coords)
        
           
         
           
       // return this.algo3x3(2,"right",this.shape)
       // return this.algo5x5(4,"right")
        }
        rotateLeft(){
            console.log('left posi ' , this.position, ' coords: ', this.coords)
            if (this.position === 4){

                let first = this.coords[0] + 1
                let second = this.coords[1] +10
                let third = this.coords[2] + 19
                let fourth = this.coords[3] - 1
                this.coords = []
                this.coords.push(first,second,third,fourth)
    
                     
                this.position = 3

                return
                
            } else if (this.position === 3){

                let first = this.coords[0] - 21
                let second = this.coords[1] - 10
                let third = this.coords[2] + 1
                let fourth = this.coords[3] - 1
    
                this.coords = []
                this.coords.push(first,second,third,fourth)
                console.log('coords given here left' , this.coords)
               
                this.position = 2
                return
                  
            } else if (this.position === 2){
               
                console.log('wat')
                let first = this.coords[0] + 9
                let second = this.coords[1] 
                let third = this.coords[2] - 9
                let fourth = this.coords[3] + 11
                //console.log('new coiords ', first,second,third,fourth)
                this.coords = []
                this.coords.push(first,second,third,fourth)
                console.log('coords given here left' , this.coords)
                this.position = 1
                return
    
                   
                
            } else if (this.position === 1){

                let first = this.coords[0] + 11
                let second = this.coords[1] 
                let third = this.coords[2]  -11
                let fourth = this.coords[3] - 9
                this.coords = []
                this.coords.push(first,second,third,fourth)
                this.position = 4
                return
      
            }
            
            
        //return this.algo3x3(6,"left",this.shape)
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